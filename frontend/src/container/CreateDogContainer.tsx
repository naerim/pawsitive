import Camera from '@src/components/CreateDog/Camera'

const CreateDogContainer = () => {
  return (
    <div>
      <h1>보호소의 유기견 추가 페이지</h1>
      <div>보호소 번호(임의 1)</div>
      <div>이름</div>
      <input type="text" />
      <div>품종</div>
      <input type="text" />
      <div>공고등록일</div>
      <input type="text" />
      <div>중성화여부</div>
      <input type="radio" id="naturalizedo" name="naturalized" value="1" />
      중성화 o
      <input type="radio" id="naturalizedx" name="naturalized" value="0" />
      중성화 x<div>색상</div>
      <input type="text" />
      <div>유기견 추가 정보 ESAF QIWC</div>
      <div>
        <input type="radio" id="e1" name="e" value="300" />
        <label htmlFor="e1">잘 때 빼고 항상 활발하고 밝아요.</label>
      </div>
      <div>
        <input type="radio" id="e2" name="e" value="0" />
        <label htmlFor="e2">집에서도 스스로 잘 놀아요</label>
      </div>
      <div>
        <input type="radio" id="s1" name="s" value="300" />
        <label htmlFor="e1">반려인을 많이 따라요</label>
      </div>
      <div>
        <input type="radio" id="s2" name="s" value="0" />
        <label htmlFor="e2">스스로 행동하는 걸 선호해요</label>
      </div>
      <div>
        <input type="radio" id="a1" name="a" value="300" />
        <label htmlFor="e1">
          모든 것에 호기심이 많고 즐거운 성격을 가지고 있어요
        </label>
      </div>
      <div>
        <input type="radio" id="a2" name="a" value="0" />
        <label htmlFor="e2">
          낯가리는 성향으로 처음 보는 환경에는 조심스럽게 대응해요
        </label>
      </div>
      <div>
        <input type="radio" id="f1" name="f" value="300" />
        <label htmlFor="e1">
          성실하게 주인의 요구에 따르며 언제나 충성스럽게 행동해요.
        </label>
      </div>
      <div>
        <input type="radio" id="f2" name="f" value="0" />
        <label htmlFor="e2">재치 있고 조금은 개성 넘치게 행동해요</label>
      </div>
      <div />
      <Camera />
    </div>
  )
}

export default CreateDogContainer
