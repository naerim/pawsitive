import CreateDogFile from '@src/components/CreateDog/CreateDogFile'
import CreateDogInfo from '@src/components/CreateDog/CreateDogInfo'
import CreateDogMbti from '@src/components/CreateDog/CreateDogMbti'
import { useInput } from '@src/hooks/useInput'
import React, { useState } from 'react'
import CreateDogDoneButton from '@src/components/CreateDog/CreateDogDoneButton'
import { useMutation } from '@tanstack/react-query'
import { createDog } from '@src/apis/dog'
import * as c from '@src/container/style/CreateDogContainerStyle'

const CreateDogContainer = () => {
  const [name, setName] = useInput({ initialValue: '' })
  const [kind, setKind] = useInput({ initialValue: '' })
  const [isNaturalized, setIsNaturalized] = useInput({ initialValue: 0 })
  const [color, setColor] = useInput({ initialValue: '' })
  const [note, setNote] = useInput({ initialValue: '' })
  const [mbti, setMbti] = useState<boolean[]>([])
  const [file, setFile] = useState<File[]>([])

  const { mutate } = useMutation({
    mutationKey: ['createDog'],
    mutationFn: createDog,
    onSuccess() {
      console.log('유기견 추가 성공')
    },
  })

  const onClickCreateDogButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    const dogData = {
      userNo: 1,
      name,
      kind,
      isNaturalized: isNaturalized !== 0,
      color,
      note,
      aw: mbti[0],
      eq: mbti[1],
      fc: mbti[2],
      si: mbti[3],
    }
    // for (let i = 0; i < file.length; i += 1) {
    //   formData.append('req', JSON.stringify(dogData))
    // }
    // formData.append('req', JSON.stringify(dogData))

    for (let i = 0; i < file.length; i += 1) {
      formData.append('images', file[i])
    }
    formData.append(
      'req',
      new Blob([JSON.stringify(dogData)], { type: 'application/json' }),
    )
    mutate(formData)
    console.log(JSON.stringify(dogData))
  }

  return (
    <c.Container>
      <h1>보호소의 유기견 추가 페이지</h1>
      <form onSubmit={onClickCreateDogButton} encType="multipart/form-data">
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
    </c.Container>
  )
}

export default CreateDogContainer
