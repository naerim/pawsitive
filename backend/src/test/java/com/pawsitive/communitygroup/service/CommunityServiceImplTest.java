package com.pawsitive.communitygroup.service;

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.BDDMockito.given;

import com.pawsitive.communitygroup.dto.response.CommunityBoardDetailRes;
import com.pawsitive.communitygroup.dto.response.CommunityCommentDetailRes;
import com.pawsitive.communitygroup.dto.response.CommunityDetailRes;
import com.pawsitive.communitygroup.exception.CommunityBoardNotFoundException;
import com.pawsitive.communitygroup.repository.CommunityBoardRepository;
import com.pawsitive.dummy.CommunityDummy;
import com.pawsitive.usergroup.service.UserService;
import java.util.List;
import java.util.Optional;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

/**
 * @author 이하늬
 * @since 1.0
 */
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = CommunityServiceImpl.class)
class CommunityServiceImplTest {

    @Autowired
    CommunityService communityService;

    @MockBean
    CommunityBoardRepository mockCommunityBoardRepository;
    @MockBean
    CommunityCategoryService mockCategoryService;
    @MockBean
    CommunityImageService mockCommunityImageService;
    @MockBean
    UserService mockUserService;


    @Test
    @DisplayName("저장되어 있는 커뮤니티글일 경우 단건 조회에 성공해 정상적으로 반환한다.")
    void getCommunityBoardSuccess() {
        CommunityBoardDetailRes board = CommunityDummy.getSuccessBoardDto();

        given(mockCommunityBoardRepository.getBoardByBoardNo(anyInt()))
            .willReturn(Optional.of(board));

        CommunityBoardDetailRes actualCommunity =
            communityService.getCommunityBoard(1);

        Assertions.assertThat(actualCommunity).isNotNull();
        Assertions.assertThat(actualCommunity.getBoardNo())
            .isEqualTo(board.getBoardNo());
    }

    @Test
    @DisplayName("저장되어 있는 커뮤니티글일 경우 단건 조회에 성공해 정상적으로 반환한다.")
    void getCommunityBoardFail() {

        given(mockCommunityBoardRepository.getBoardByBoardNo(anyInt()))
            .willReturn(Optional.empty());

        Assertions.assertThatThrownBy(() -> communityService.getCommunityBoard(1))
            .isInstanceOf(CommunityBoardNotFoundException.class)
            .hasMessageContaining("존재하지 않는");
    }

    @Test
    @DisplayName("추천 유기견 리스트 조회에 성공해 정상적으로 반환한다.")
    void getRecommendationCommunityListSuccess() {
        CommunityBoardDetailRes boardDto = CommunityDummy.getSuccessBoardDto();
        given(mockCommunityBoardRepository.getRecommendationBoardListLimitNum(anyInt()))
            .willReturn(List.of(boardDto));

        List<CommunityBoardDetailRes> recommendationCommunityList =
            communityService.getRecommendationCommunityList(1);

        Assertions.assertThat(recommendationCommunityList).hasSize(1);
        Assertions.assertThat(recommendationCommunityList.get(0).getBoardNo())
            .isEqualTo(boardDto.getBoardNo());
        Assertions.assertThat(recommendationCommunityList.get(0).getContent())
            .isEqualTo(boardDto.getContent());
    }

    @Test
    @DisplayName("커뮤니티 글과 그 글에 해당하는 댓글 리스트 조회에 성공해 정상적으로 반환한다.")
    void getCommunitySuccess() {
        CommunityBoardDetailRes board = CommunityDummy.getSuccessBoardDto();
        CommunityCommentDetailRes comment = CommunityDummy.getSuccessCommentDto();
        given(mockCommunityBoardRepository.getBoardByBoardNo(anyInt()))
            .willReturn(Optional.of(board));
        given(mockCommunityBoardRepository.getCommunityImagesByDogNo(anyInt()))
            .willReturn(List.of("image1", "image2"));
        given(mockCommunityBoardRepository.getCommentsByBoardNo(anyInt()))
            .willReturn(List.of(comment));

        CommunityDetailRes actualCommunity = communityService.getCommunity(1);

        Assertions.assertThat(actualCommunity).isNotNull();
        Assertions.assertThat(actualCommunity.getBoard()).isEqualTo(board);
        Assertions.assertThat((actualCommunity.getComments())).hasSize(1);
        Assertions.assertThat((actualCommunity.getBoard().getImages())).hasSize(2);

    }

}