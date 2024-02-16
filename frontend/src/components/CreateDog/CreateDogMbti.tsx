import { useAtom } from 'jotai'
import { createDogInfoAtom } from '@src/stores/atoms/dog'
import * as c from '@src/components/style/CreateDogMbtiStyle'

const CreateDogMbti = () => {
  const [, setCreateDogData] = useAtom(createDogInfoAtom)

  const handleRadio = (category: string, value: boolean) => {
    switch (category) {
      case 'e':
        setCreateDogData(prevData => ({ ...prevData, eq: value }))
        break
      case 's':
        setCreateDogData(prevData => ({ ...prevData, si: value }))
        break
      case 'a':
        setCreateDogData(prevData => ({ ...prevData, aw: value }))
        break
      case 'f':
        setCreateDogData(prevData => ({ ...prevData, fc: value }))
        break
      default:
        break
    }
  }

  return (
    <c.Container>
      <c.Title>추가정보</c.Title>
      <c.InputContainer>
        <c.RadioWrap>
          <c.QuesContainer>
            <input
              type="radio"
              id="e1"
              name="e"
              value="300"
              onChange={() => handleRadio('e', true)}
            />
            <label htmlFor="e1">잘 때 빼고 항상 활발하고 밝아요</label>
          </c.QuesContainer>
          <c.QuesContainer>
            <input
              type="radio"
              id="e2"
              name="e"
              value="0"
              onChange={() => handleRadio('e', false)}
            />
            <label htmlFor="e2">집에서도 스스로 잘 놀아요</label>
          </c.QuesContainer>
        </c.RadioWrap>
        <c.RadioWrap>
          <c.QuesContainer>
            <input
              type="radio"
              id="s1"
              name="s"
              value="300"
              onChange={() => handleRadio('s', true)}
            />
            <label htmlFor="s1">반려인을 많이 따라요</label>
          </c.QuesContainer>
          <c.QuesContainer>
            <input
              type="radio"
              id="s2"
              name="s"
              value="0"
              onChange={() => handleRadio('s', false)}
            />
            <label htmlFor="s2">스스로 행동하는 걸 선호해요</label>
          </c.QuesContainer>
        </c.RadioWrap>
        <c.RadioWrap>
          <c.QuesContainer>
            <input
              type="radio"
              id="a1"
              name="a"
              value="300"
              onChange={() => handleRadio('a', true)}
            />
            <label htmlFor="a1">
              호기심이 많고 즐거운 성격을 가지고 있어요
            </label>
          </c.QuesContainer>
          <c.QuesContainer>
            <input
              type="radio"
              id="a2"
              name="a"
              value="0"
              onChange={() => handleRadio('a', false)}
            />
            <label htmlFor="a2">처음 보는 환경에는 낯가리며 조심스러워요</label>
          </c.QuesContainer>
        </c.RadioWrap>
        <c.RadioWrap>
          <c.QuesContainer>
            <input
              type="radio"
              id="f1"
              name="f"
              value="300"
              onChange={() => handleRadio('f', true)}
            />
            <label htmlFor="f1">
              주인의 요구에 따르며 언제나 충성스럽게 행동해요
            </label>
          </c.QuesContainer>
          <c.QuesContainer>
            <input
              type="radio"
              id="f2"
              name="f"
              value="0"
              onChange={() => handleRadio('f', false)}
            />
            <label htmlFor="f2">재치 있고 조금은 개성 넘치게 행동해요</label>
          </c.QuesContainer>
        </c.RadioWrap>
      </c.InputContainer>
    </c.Container>
  )
}

export default CreateDogMbti
