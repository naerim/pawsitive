import React from 'react'
import { useAtom } from 'jotai'
import { createDogInfoAtom } from '@src/stores/atoms/dog'
import * as c from '@src/components/style/CreateDogNoteStyle'

const CreateDogNote = () => {
  const [createDogData, setCreateDogData] = useAtom(createDogInfoAtom)

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const noteInput = e.target.value
    setCreateDogData(prevData => ({ ...prevData, note: noteInput }))
  }

  return (
    <c.Container>
      <div>추가정보</div>
      <c.CustomTextarea
        value={createDogData.note}
        onChange={handleNoteChange}
        placeholder="성격, 보호 과정 등 강아지의 특징을 적어주세요!"
      />
    </c.Container>
  )
}

export default CreateDogNote
