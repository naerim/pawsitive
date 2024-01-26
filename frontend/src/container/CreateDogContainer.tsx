import CreateDogFile from '@src/components/CreateDog/CreateDogFile'
import CreateDogInfo from '@src/components/CreateDog/CreateDogInfo'
import CreateDogMbti from '@src/components/CreateDog/CreateDogMbti'
import CreateDogDoneButton from '@src/components/CreateDog/CreateDogDoneButton'
import { useInput } from '@src/hooks/useInput'

const CreateDogContainer = () => {
  const [name, setName] = useInput({ initialValue: '' })
  const [kind, setKind] = useInput({ initialValue: '' })
  const [isNaturalized, setIsNaturalized] = useInput({ initialValue: 0 })
  const [color, setColor] = useInput({ initialValue: '' })
  const [note, setNote] = useInput({ initialValue: '' })

  const onClickCreateDogButton = () => {
    console.log({
      name,
      kind,
      isNaturalized,
      color,
      note,
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
      <CreateDogMbti />
      <CreateDogFile />
      <CreateDogDoneButton onClick={onClickCreateDogButton} />
    </div>
  )
}

export default CreateDogContainer
