package com.pawsitive.communitygroup.service;

import com.pawsitive.common.exeption.NotSavedException;
import com.pawsitive.common.util.S3BucketUtil;
import com.pawsitive.communitygroup.dto.request.CommunityCreateReq;
import com.pawsitive.communitygroup.dto.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.dto.response.CommunityCommentDetailRes;
import com.pawsitive.communitygroup.dto.response.CommunityDetailRes;
import com.pawsitive.communitygroup.entity.CommunityBoard;
import com.pawsitive.communitygroup.exception.CommunityBoardNotFoundException;
import com.pawsitive.communitygroup.repository.CommunityBoardRepository;
import com.pawsitive.usergroup.service.UserService;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CommunityServiceImpl implements CommunityService {
    private final CommunityBoardRepository communityBoardRepository;
    private final CommunityCategoryService categoryService;
    private final CommunityImageService communityImageService;
    private final UserService userService;
    private final S3BucketUtil s3BucketUtil;


    @Override
    public Page<CommunityBoardDetailRes> getCommunityList(Pageable pageable, Integer categoryNo) {
        if (categoryNo == null) {
            return communityBoardRepository.getBoardList(pageable);
        }
        return getCommunityListByCommunityCategoryNo(pageable, categoryNo);
    }


    @Override
    public Page<CommunityBoardDetailRes> getCommunityListByCommunityCategoryNo(Pageable pageable,
                                                                               int categoryNo) {
        return communityBoardRepository.getBoardListByCategoryNo(pageable, categoryNo);
    }

    @Override
    public CommunityDetailRes getCommunity(int boardNo) {
        CommunityBoardDetailRes board = communityBoardRepository.getBoardByBoardNo(boardNo)
            .orElseThrow(CommunityBoardNotFoundException::new);

        return getCommunityByBoard(board);
    }

    @Override
    public CommunityBoardDetailRes getCommunityBoard(int boardNo) {
        return communityBoardRepository.getBoardByBoardNo(boardNo)
            .orElseThrow(CommunityBoardNotFoundException::new);
    }

    @Override
    public List<CommunityBoardDetailRes> getRecommendationCommunityList(int num) {
        return communityBoardRepository.getRecommendationBoardListLimitNum(num);
    }

    @Override
    @Transactional
    public CommunityBoardDetailRes createCommunityBoard(CommunityCreateReq req,
                                                        MultipartFile[] images) {
        CommunityBoard board =
            CommunityBoard.builder().member(userService.getMemberByUserNo(req.getUserNo()))
                .title(req.getTitle()).content(req.getContent()).isPublic(req.getIsPublic())
                .latitude(req.getLatitude()).longitude(req.getLongitude())
                .communityCategory(categoryService.getCategoryByCategoryNo(req.getCategoryNo()))
                .build();

        CommunityBoard savedBoard;
        try {
            savedBoard = communityBoardRepository.save(board);
        } catch (Exception e) {
            throw new NotSavedException();
        }

        communityImageService.createCommunityImage(savedBoard, images);

        return getCommunityBoard(savedBoard.getCommunityBoardNo());
    }

    private CommunityDetailRes getCommunityByBoard(CommunityBoardDetailRes board) {
        List<String> images =
            communityBoardRepository.getCommunityImagesByDogNo(board.getBoardNo());
        board.setImages(images);
        List<CommunityCommentDetailRes> commentList =
            communityBoardRepository.getCommentsByBoardNo(board.getBoardNo());

        return new CommunityDetailRes(board, commentList);
    }

    private List<CommunityDetailRes> getCommunityListByBoardList(
        List<CommunityBoardDetailRes> boardList) {
        List<CommunityDetailRes> communityList = new ArrayList<>();

        for (CommunityBoardDetailRes board : boardList) {
            communityList.add(getCommunityByBoard(board));
        }

        return communityList;
    }
}
