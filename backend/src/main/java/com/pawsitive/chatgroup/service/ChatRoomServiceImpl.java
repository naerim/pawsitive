package com.pawsitive.chatgroup.service;


import com.pawsitive.adoptgroup.dto.request.AppointmentReq;
import com.pawsitive.auth.Role;
import com.pawsitive.chatgroup.dto.request.ChatRoomCreateReq;
import com.pawsitive.chatgroup.dto.response.ChatRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomDetailRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomListRes;
import com.pawsitive.chatgroup.dto.response.ChatRoomRes;
import com.pawsitive.chatgroup.dto.response.LastChatTmp;
import com.pawsitive.chatgroup.entity.ChatRoom;
import com.pawsitive.chatgroup.exception.ChatRoomNotFoundException;
import com.pawsitive.chatgroup.repository.ChatRoomRepository;
import com.pawsitive.chatgroup.transfer.ChatGroupTransfer;
import com.pawsitive.common.dto.response.BaseResponseMessage;
import com.pawsitive.common.exception.InvalidRequestDataException;
import com.pawsitive.doggroup.entity.Dog;
import com.pawsitive.doggroup.service.DogService;
import com.pawsitive.usergroup.entity.Member;
import com.pawsitive.usergroup.entity.User;
import com.pawsitive.usergroup.service.UserService;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChatRoomServiceImpl implements ChatRoomService {
    private final ChatRoomRepository chatRoomRepository;
    private final DogService dogService;
    private final UserService userService;


    /**
     * 채팅방을 생성
     *
     * @return 생성한 채팅방
     */
    @Override
    @Transactional
    public ChatRoomRes createChatRoom(ChatRoomCreateReq req, Authentication authentication) {
        ChatRoom room = new ChatRoom();

        int userNo = req.getUserNo();
        int dogNo = req.getDogNo();

        // 채팅방 생성 요청자가 보호소 회원이라면
        if (userService.getUserByUserNo(userNo).getRole().equals(Role.SHELTER)) {
            throw new InvalidRequestDataException("유효하지 않은 요청입니다.");
        }

        Optional<ChatRoom> existChatRoom =
            chatRoomRepository.findChatRoomByUserNoAndDogNo(userNo, dogNo);

        if (existChatRoom.isPresent()) {
            return ChatGroupTransfer.entityToDto(existChatRoom.get());
        }

        Dog dog = dogService.getDogEntityByDogNo(dogNo);

        room.setId(getRandomRoomNo());
        room.setName(dog.getUser().getName() + "보호소 - " + dog.getName());
        room.setDogNo(dogNo);
        room.setUserNo(userNo);
        room.setIsPromiseAccepted(null);
        room.setPromiseCreatedAt(null);
        ChatRoom chatRoom = chatRoomRepository.save(room);

        return ChatGroupTransfer.entityToDto(chatRoom);
    }

    private String getRandomRoomNo() {
        String roomNo = UUID.randomUUID().toString();
        roomNo = roomNo.replace("-", "");
        roomNo = roomNo.substring(0, 16);
        return roomNo;
    }

    @Override
    public ChatRoom getChatRoomEntityByChatRoomNo(int chatRoomNo) {
        return chatRoomRepository.findByChatRoomNo(chatRoomNo)
            .orElseThrow(ChatRoomNotFoundException::new);
    }

    /**
     * 채팅방 고유번호로 채팅 이력을 조회
     *
     * @param chatRoomNo 조회할 채팅방의 고유 번호
     * @return
     */
    @Override
    public List<ChatRes> getChatHistoryByChatRoomNo(int chatRoomNo) {
        return chatRoomRepository.getChatHistoryByChatRoomNo(chatRoomNo);
    }

    /**
     * 최근에 생성된 순으로 채팅방 전체 조회
     *
     * @return 최근에 생성된 순으로 조회한 채팅방 목록
     */
    @Override
    public List<ChatRoomListRes> getChatRoomList(String type, int value) {

        List<ChatRoomListRes> chatRooms = null;

        if ("dogNo".equals(type)) {
            chatRooms = chatRoomRepository.getChatRoomListByDogNo(value);
        } else if ("userNo".equals(type)) {
            chatRooms = chatRoomRepository.getChatRoomListByUserNo(value);
        } else {
            throw new InvalidRequestDataException("유기견 번호나 회원 번호로만 조회 가능합니다.");
        }
        for (ChatRoomListRes chatRoom : chatRooms) {
            User user = userService.getUserByUserNo(chatRoom.getMemberNo());
            chatRoom.setMemberName(user.getName());
            chatRoom.setMemberProfileImage(user.getImage());
        }
        setLastChat(chatRooms);

        return chatRooms;
    }

    private void setLastChat(List<ChatRoomListRes> chatRooms) {
        for (ChatRoomListRes chatRoom : chatRooms) {
            LastChatTmp lastChat = chatRoomRepository.getLastChat(chatRoom.getChatRoomNo());
            if (Objects.nonNull(lastChat)) {
                if (lastChat.getCreatedDate().toLocalDate().isEqual(LocalDate.now())) {
                    chatRoom.setLastChat(new ChatRoomListRes.LastChat(lastChat.getMessage(),
                        LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))));
                } else {
                    chatRoom.setLastChat(new ChatRoomListRes.LastChat(lastChat.getMessage(),
                        lastChat.getCreatedDate().format(DateTimeFormatter.ofPattern("HH:mm"))));
                }
            }
        }
    }

    @Override
    @Transactional
    public String createAppointment(AppointmentReq appointmentReq) {
        ChatRoom chatRoom = getChatRoomEntityByChatRoomNo(appointmentReq.getChatRoomNo());
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");
        LocalDateTime createdAt =
            LocalDateTime.of(LocalDate.parse(appointmentReq.getDate(), dateFormatter),
                LocalTime.parse(appointmentReq.getTime(), timeFormatter));
        chatRoom.setPromiseCreatedAt(createdAt);
        chatRoom.setIsPromiseAccepted(false);
        chatRoomRepository.save(chatRoom);
        return BaseResponseMessage.SUCCESS.getMessage();
    }

    @Override
    @Transactional
    public String acceptAppointment(AppointmentReq appointmentReq) {
        ChatRoom chatRoom = getChatRoomEntityByChatRoomNo(appointmentReq.getChatRoomNo());
        chatRoom.setIsPromiseAccepted(true);
        chatRoomRepository.save(chatRoom);
        return BaseResponseMessage.SUCCESS.getMessage();
    }

    @Override
    public ChatRoomDetailRes getChatRoomDetail(int chatRoomNo) {
        ChatRoom chatRoom = getChatRoomEntityByChatRoomNo(chatRoomNo);
        Dog dog = dogService.getDogEntityByDogNo(chatRoom.getDogNo());
        User shelter = dog.getUser();
        Member member = userService.getMemberByUserNo(chatRoom.getUserNo());
        return ChatRoomDetailRes.builder()
            .chatRoomId(chatRoom.getId())
            .shelter(ChatRoomDetailRes.Shelter.of(shelter))
            .member(ChatRoomDetailRes.Member.of(member))
            .dog(ChatRoomDetailRes.Dog.of(dog))
            .promise(ChatRoomDetailRes.Promise.of(chatRoom))
            .chatList(getChatHistoryByChatRoomNo(chatRoomNo))
            .build();

    }

}
