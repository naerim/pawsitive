import CreateDogFile from '@src/components/CreateDog/CreateDogFile'
import CreateDogInfo from '@src/components/CreateDog/CreateDogInfo'
import CreateDogMbti from '@src/components/CreateDog/CreateDogMbti'
import CreateDogDoneButton from '@src/components/CreateDog/CreateDogDoneButton'
import { useInput } from '@src/hooks/useInput'
import { useState } from 'react'

const CreateDogContainer = () => {
  const [name, setName] = useInput({ initialValue: '' })
  const [kind, setKind] = useInput({ initialValue: '' })
  const [isNaturalized, setIsNaturalized] = useInput({ initialValue: 0 })
  const [color, setColor] = useInput({ initialValue: '' })
  const [note, setNote] = useInput({ initialValue: '' })
  const [mbti, setMbti] = useState<number[]>([])
  // const [image, setImage] = useState<string[]>([])
  // const [video, setVideo] = useInput({ initialValue: '' })

  const onClickCreateDogButton = () => {
    console.log({
      name,
      kind,
      isNaturalized,
      color,
      note,
      mbti,
    })
  }

  return (
    <div>
      <h1>보호소의 유기견 추가 페이지</h1>
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
      <CreateDogFile />
      <CreateDogDoneButton onClick={onClickCreateDogButton} />
    </div>
  )
}

export default CreateDogContainer
