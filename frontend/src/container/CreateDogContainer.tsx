import CreateDogFile from '@src/components/CreateDog/CreateDogFile'
import CreateDogInfo from '@src/components/CreateDog/CreateDogInfo'
import CreateDogMbti from '@src/components/CreateDog/CreateDogMbti'
import { useInput } from '@src/hooks/useInput'
import React, { useState } from 'react'
import CreateDogDoneButton from '@src/components/CreateDog/CreateDogDoneButton'

const CreateDogContainer = () => {
  const [name, setName] = useInput({ initialValue: '' })
  const [kind, setKind] = useInput({ initialValue: '' })
  const [isNaturalized, setIsNaturalized] = useInput({ initialValue: 0 })
  const [color, setColor] = useInput({ initialValue: '' })
  const [note, setNote] = useInput({ initialValue: '' })
  const [mbti, setMbti] = useState<boolean[]>([])
  const [file, setFile] = useState<File[]>([])

  const onClickCreateDogButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    const dogData = {
      name,
      kind,
      isNaturalized,
      color,
      note,
      E: mbti[0],
      S: mbti[1],
      A: mbti[2],
      F: mbti[3],
    }
    for (let i = 0; i < file.length; i += 1) {
      formData.append('files', file[i])
    }
    formData.append(
      'dogData',
      new Blob([JSON.stringify(dogData)], { type: 'application/json' }),
    )
    console.log(JSON.stringify(dogData))
  }

  return (
    <div style={{ height: 300, overflow: 'scroll' }}>
      <h1>보호소의 유기견 추가 페이지</h1>
      <form onSubmit={onClickCreateDogButton}>
        <CreateDogInfo
          name={name}
          setName={setName}
          kind={kind}
          setKind={setKind}
          setIsNaturalized={setIsNaturalized}
          color={color}
          setColor={setColor}
          note={note}
          setNote={setNote}
        />
        <CreateDogMbti mbti={mbti} setMbti={setMbti} />
        <CreateDogFile file={file} setFile={setFile} />
        <CreateDogDoneButton onClick={onClickCreateDogButton} />
      </form>
    </div>
  )
}

export default CreateDogContainer
