const CreateDogInfo = () => {
  return (
    <div>
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
    </div>
  )
}

export default CreateDogInfo
