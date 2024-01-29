import { CreateDogInfoType } from '@src/types/components/CreateDogType'

const CreateDogInfo = (props: CreateDogInfoType) => {
  const {
    name,
    setName,
    kind,
    setKind,
    setIsNaturalized,
    color,
    setColor,
    note,
    setNote,
  } = props
  return (
    <div>
      <div>보호소 번호(임의 1)</div>
      <label htmlFor="name">이름</label>
      <input id="name" type="text" value={String(name)} onChange={setName} />
      <div>품종</div>
      <input type="text" value={String(kind)} onChange={setKind} />
      <div>중성화여부</div>
      <div>
        <input
          type="radio"
          id="naturalizedx"
          name="naturalized"
          value="0"
          onChange={setIsNaturalized}
        />
        <label htmlFor="naturalizedx">중성화 x</label>
      </div>
      <div>
        <input
          type="radio"
          id="naturalizedo"
          name="naturalized"
          value="1"
          onChange={setIsNaturalized}
        />
        <label htmlFor="naturalizedo">중성화 o</label>
      </div>
      <div>색상</div>
      <input type="text" value={String(color)} onChange={setColor} />
      <div>특이사항(비고)</div>
      <textarea value={String(note)} onChange={setNote} />
    </div>
  )
}

export default CreateDogInfo
