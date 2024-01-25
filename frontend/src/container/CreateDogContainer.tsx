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
      <input type="radio" id="naturalized" name="naturalized" value="1" />
      중성화 o
      <input type="radio" id="naturalized" name="naturalized" value="0" />
      중성화 x<div>색상</div>
      <input type="text" />
      <div>유기견 추가 정보</div>
      <div>
        <input type="radio" id="e1" name="e" value="0" />
        <label htmlFor="e1">질문</label>
      </div>
      <div>
        <input type="radio" id="e2" name="e" value="300" />
        <label htmlFor="e2">질문</label>
      </div>
      <div />
      <Camera />
    </div>
  )
}

export default CreateDogContainer
