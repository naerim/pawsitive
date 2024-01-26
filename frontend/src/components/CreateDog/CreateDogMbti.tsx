import * as c from '@src/components/style/CreateDogMbtiStyle'

const CreateDogMbti = () => {
  return (
    <c.Container>
      <c.Title>유기견 추가 정보 ESAF QIWC</c.Title>
      <c.RadioWrap>
        <div>
          <input type="radio" id="e1" name="e" value="300" />
          <label htmlFor="e1">잘 때 빼고 항상 활발하고 밝아요.</label>
        </div>
        <div>
          <input type="radio" id="e2" name="e" value="0" />
          <label htmlFor="e2">집에서도 스스로 잘 놀아요</label>
        </div>
      </c.RadioWrap>
      <c.RadioWrap>
        <div>
          <input type="radio" id="s1" name="s" value="300" />
          <label htmlFor="s1">반려인을 많이 따라요</label>
        </div>
        <div>
          <input type="radio" id="s2" name="s" value="0" />
          <label htmlFor="s2">스스로 행동하는 걸 선호해요</label>
        </div>
      </c.RadioWrap>
      <c.RadioWrap>
        <div>
          <input type="radio" id="a1" name="a" value="300" />
          <label htmlFor="a1">
            모든 것에 호기심이 많고 즐거운 성격을 가지고 있어요
          </label>
        </div>
        <div>
          <input type="radio" id="a2" name="a" value="0" />
          <label htmlFor="a2">
            낯가리는 성향으로 처음 보는 환경에는 조심스럽게 대응해요
          </label>
        </div>
      </c.RadioWrap>
      <c.RadioWrap>
        <div>
          <input type="radio" id="f1" name="f" value="300" />
          <label htmlFor="f1">
            성실하게 주인의 요구에 따르며 언제나 충성스럽게 행동해요.
          </label>
        </div>
        <div>
          <input type="radio" id="f2" name="f" value="0" />
          <label htmlFor="f2">재치 있고 조금은 개성 넘치게 행동해요</label>
        </div>
      </c.RadioWrap>
    </c.Container>
  )
}

export default CreateDogMbti
