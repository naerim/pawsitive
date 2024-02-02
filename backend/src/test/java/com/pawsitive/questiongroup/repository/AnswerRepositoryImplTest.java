//package com.pawsitive.questiongroup.repository;
//
//import com.pawsitive.dummy.AnswerDummy;
//import com.pawsitive.dummy.MemberDummy;
//import com.pawsitive.dummy.QuestionDummy;
//import com.pawsitive.dummy.UserDummy;
//import com.pawsitive.questiongroup.dto.response.AnswerDetailRes;
//import com.pawsitive.questiongroup.entity.Answer;
//import com.pawsitive.questiongroup.entity.Question;
//import com.pawsitive.usergroup.entity.Member;
//import com.pawsitive.usergroup.entity.User;
//import com.pawsitive.usergroup.repository.MemberRepository;
//import com.pawsitive.usergroup.repository.UserRepository;
//import java.util.Optional;
//import org.assertj.core.api.Assertions;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
//
//@DataJpaTest
//class AnswerRepositoryImplTest {
//
//    @Autowired
//    AnswerRepository answerRepository;
//
//    @Autowired
//    UserRepository userRepository;
//
//    @Autowired
//    MemberRepository memberRepository;
//
//    @Autowired
//    QuestionRepository questionRepository;
//
//    @Autowired
//    TestEntityManager entityManager;
//
//    Question question;
//    User user;
//    Member member;
//    Answer answer;
//
//    @BeforeEach
//    void setUp() {
//        user = UserDummy.getSuccessEntity();
//        userRepository.save(user);
//        member = MemberDummy.getSuccessEntity(user);
//        memberRepository.save(member);
//        question = QuestionDummy.getSuccessEntity();
//        questionRepository.save(question);
//        answer = AnswerDummy.getSuccessEntity(member, question);
//        answerRepository.save(answer);
//        entityManager.flush();
//        entityManager.clear();
//    }
//
//    @Test
//    @DisplayName("회원 번호와 질문 번호로 답변 내용을 성공적으로 조회한다.")
//    void getAnswerByUserNoAndQuestionNo() {
//        Optional<AnswerDetailRes> answerDetail =
//            answerRepository.getAnswerByUserNoAndQuestionNo(member.getUserNo(),
//                question.getQuestionNo());
//        Assertions.assertThat(answerDetail).isPresent();
//        Assertions.assertThat(answer.getAnswerNo()).isEqualTo(answerDetail.get().getAnswerNo());
//    }
//
//    @Test
//    void getAnswerListByUserNo() {
//    }
//}