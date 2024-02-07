import * as c from '@src/components/style/SurveyFormStyle'
import React, { useState } from 'react'

const houseForm = [
  { value: '아파트', index: 1 },
  { value: '빌라', index: 2 },
  { value: '개인주택', index: 3 },
  { value: '오피스텔', index: 4 },
  { value: '기타', index: 5 },
]

const SurveyForm = () => {
  const [formDataValue, setFormData] = useState({
    No1: '',
    No2: '',
    No3: '',
    No4: '',
    No5: '',
    No6: false,
    No7: false,
    No8: '',
    No9: '',
    No10: '',
    No11: '',
    No12: '',
    No13: '',
    No14: '',
    No15: '',
    No16: '',
    No17: '',
    No18: '',
    No19: '',
    No20: '',
  })

  const handleInputChange = (name: string, value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleFamChange = () => {
    setFormData(prevData => ({ ...prevData, No6: !formDataValue.No6 }))
  }

  const handleAccept = () => {
    setFormData(prevData => ({ ...prevData, No7: !formDataValue.No7 }))
  }
  // const navigate = useNavigate()
  //
  // const { mutate } = useMutation({
  //   mutationKey: ['communityCreateForm'],
  //   mutationFn: fetchCommunityCreate,
  //   onSuccess(responseData) {
  //     console.log('mutate 사용을 성공했습니다')
  //     navigate(`/community/${responseData.boardNo}`)
  //   },
  //   onError() {
  //     console.log('에러남')
  //   },
  // })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formDataValue)
  }
  //   const formData: FormData = new FormData()
  //   const ArticleData = {
  //     userNo: 1,
  //     title: titleValue,
  //     content: contentValue,
  //     isPublic: isPublicValue,
  //     latitude: latitudeValue,
  //     longitude: longitudeValue,
  //     categoryNo: categoryValue,
  //   }
  //   formData.append(
  //     'req',
  //     new Blob([JSON.stringify(ArticleData)], { type: 'application/json' }),
  //   )
  //   mutate(formData)
  // }
  return (
    <c.Container>
      <form onSubmit={handleSubmit}>
        {/* <form> */}
        <c.Section>거주환경</c.Section>
        <c.QuestionDiv>
          <c.Question>1. 현재 거주하고 계신 집의 형태는?</c.Question>
          <c.Select
            id="home"
            value={formDataValue.No1}
            onChange={e => handleInputChange('No1', e.target.value)}
          >
            <option value="" hidden>
              선택 ∨
            </option>
            {houseForm.map(houseFormItem => (
              <option value={houseFormItem.index} key={houseFormItem.index}>
                {houseFormItem.value}
              </option>
            ))}
          </c.Select>
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            2. 구조견의 급식 배변 산책 등의 보살핌을 주로 누가 담당하실
            계획입니까?
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No2}
            onChange={e => handleInputChange('No2', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            3. 반려견을 입양하고 싶으신 이유가 무엇입니까?
          </c.Question>
          <c.RadioWrap>
            <input type="radio" id="reason1" name="reason" value="1" />
            <label htmlFor="reason1">반려견이 귀여워서</label>
            <br />
            <input type="radio" id="reason2" name="reason" value="2" />
            <label htmlFor="reason2">
              기존의 반려견에게 친구를 만들어 주기 위해서
            </label>
            <br />
            <input type="radio" id="reason3" name="reason" value="3" />
            <label htmlFor="reason3">가족을 위해서</label>
            <br />
            <input type="radio" id="reason4" name="reason" value="4" />
            <label htmlFor="reason4">아이들이 강아지를 원해서</label>
            <br />
            <input type="radio" id="reason5" name="reason" value="5" />
            <label htmlFor="reason5">집 지키는 강아지를 키우기 위해서</label>
            <br />
          </c.RadioWrap>
        </c.QuestionDiv>

        <c.Section>가족 관계</c.Section>

        <c.QuestionDiv>
          <c.Question>4. 함께 거주 중인 가족의 형태를 알려주세요.</c.Question>
          <c.RadioWrap>
            <input type="radio" id="family1" name="family" value="1" />
            <label htmlFor="family1">부부와 자녀</label>
            <br />
            <input type="radio" id="family2" name="family" value="2" />
            <label htmlFor="family2">1인 가구</label>
            <br />
            <input type="radio" id="family3" name="family" value="3" />
            <label htmlFor="family3">동거 커플</label>
            <br />
            <input type="radio" id="family4" name="family" value="4" />
            <label htmlFor="family4">결혼 예정의 동거 커플</label>
            <br />
            <input type="radio" id="family5" name="family" value="5" />
            <label htmlFor="family5">결혼한 2인 가구</label>
            <br />
          </c.RadioWrap>
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            5. 동거 중인 가족 구성원을 나이와 함께 알려주세요.
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No5}
            onChange={e => handleInputChange('No5', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>6. 앞으로 가족 수에 변동이 있을 수 있습니까?</c.Question>
          <c.CheckBoxDiv>
            <c.CheckBox
              type="checkbox"
              id="famChange"
              defaultChecked={false}
              onChange={handleFamChange}
            />
            <label className="label" htmlFor="famChange" />
          </c.CheckBoxDiv>
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            7. 함께 거주하는 모든 가족분들께서 강아지 입양에 동의하십니까?
          </c.Question>
          <c.CheckBoxDiv>
            <c.CheckBox
              type="checkbox"
              id="accept"
              defaultChecked={false}
              onChange={handleAccept}
            />
            <label className="label" htmlFor="accept" />
          </c.CheckBoxDiv>
        </c.QuestionDiv>

        <c.Section>생활 환경</c.Section>

        <c.QuestionDiv>
          <c.Question>
            8. 하루 평균 몇 시간 정도 강아지가 혼자 지내야 하나요?
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No8}
            onChange={e => handleInputChange('No8', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            9. 집이 비는 경우 강아지는 어디서 지내게 될까요?
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No9}
            onChange={e => handleInputChange('No9', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            10. 현재 기르시고 계시는 반려동물을 모두 기록해주세요. (종류, 성별,
            나이, 중성화 여부 포함)
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No10}
            onChange={e => handleInputChange('No10', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            11. 반려동물을 키우신 적이 있거나, 키우고 계시다면 반려한 기간이
            언제부터 언제까지 인지 써주세요.
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No11}
            onChange={e => handleInputChange('No11', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            12. 반려동물을 키우셨으나 지금 키우지 않고 있으신다면 이유를
            설명해주세요.
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No12}
            onChange={e => handleInputChange('No12', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            13. 현재 키우는 반려동물이 있는 경우, 그 반려동물은 다른 동물과
            지내는 일에 익숙합니까?
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No13}
            onChange={e => handleInputChange('No13', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            14. 현재 키우시는 반려동물있거나 키웠던 경우, 어떤 경로로 함께 하게
            되었나요?
          </c.Question>
          <c.RadioWrap>
            <input type="radio" id="where1" name="where" value="1" />
            <label htmlFor="where1">유기동물 입양</label>
            <br />
            <input type="radio" id="where2" name="where" value="2" />
            <label htmlFor="where2">전문 브리더를 통해</label>
            <br />
            <input type="radio" id="where3" name="where" value="3" />
            <label htmlFor="where3">펫샵을 통해</label>
            <br />
            <input type="radio" id="where4" name="where" value="4" />
            <label htmlFor="where4">기타</label>
            <br />
          </c.RadioWrap>
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            15. 반려동물을 키워본 적이 없으신 경우, 왜 키우지 않으셨는지 이유를
            설명해 주세요.
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No15}
            onChange={e => handleInputChange('No15', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            16. 입양을 원하시는 강아지 브리드 성격과 성질에 익숙하십니까?
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No16}
            onChange={e => handleInputChange('No16', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            17. 강아지가 짖거나, 분리 불안이 있는 등의 행동 교정이 필요한 경우,
            적절한 훈련이 필요할수 있습니다. 어떤 방법으로 훈련해주실건지
            알려주세요.
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No17}
            onChange={e => handleInputChange('No17', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            18. 다니시는 (다니실 예정인) 동물 병원이 있습니까? 있다면 어느
            병원인지 얘기해 주세요.
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No18}
            onChange={e => handleInputChange('No18', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            19. 강아지가 병원 치료나 수술을 받을 상황이 된다면 현실적으로 어느
            정도의 병원비까지 부담이 가능한가요?
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No19}
            onChange={e => handleInputChange('No19', e.target.value)}
          />
        </c.QuestionDiv>

        <c.QuestionDiv>
          <c.Question>
            20. 강아지에게 장애가 생기거나 질병으로 인하여 특별한 도움이
            필요하게 되는 경우에도 평생 책임지실 수 있습니까?
          </c.Question>
          <c.ContentInput
            id="title"
            value={formDataValue.No20}
            onChange={e => handleInputChange('No20', e.target.value)}
          />
        </c.QuestionDiv>

        <c.SubmitButton>제출</c.SubmitButton>
      </form>
    </c.Container>
  )
}

export default SurveyForm
