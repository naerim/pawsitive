import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { useMutation } from '@tanstack/react-query'
import { createDogInfoAtom, createDogStepAtom } from '@src/stores/atoms/dog'
import { createDog } from '@src/apis/dog'
import CreateDogInfo from '@src/components/CreateDog/CreateDogInfo'
import CreateDogMbti from '@src/components/CreateDog/CreateDogMbti'
import CreateDogNote from '@src/components/CreateDog/CreateDogNote'
import CreateDogFile from '@src/components/CreateDog/CreateDogFile'
import * as c from '@src/container/style/CreateDogContainerStyle'

const CreateDogContainer = () => {
  const [createDogInfo] = useAtom(createDogInfoAtom)
  const [createDogStep, setCreateDogStep] = useAtom(createDogStepAtom)
  const [file, setFile] = useState<File[]>([])

  const { mutate } = useMutation({
    mutationKey: ['createDog'],
    mutationFn: createDog,
    onSuccess() {
      console.log('유기견 추가 성공')
    },
    onError(error) {
      console.error('유기견 추가 실패:', error)
    },
  })

  const handleCreateDog = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append(
      'req',
      new Blob([JSON.stringify(createDogInfo)], {
        type: 'application/json',
      }),
    )

    for (let i = 0; i < file.length; i += 1) {
      formData.append('images', file[i])
    }

    mutate(formData)
    console.log(formData.get('images'))
  }

  const renderStepComponent = () => {
    switch (createDogStep) {
      case 1:
        return <CreateDogInfo />
      case 2:
        return (
          <>
            <CreateDogNote />
            <CreateDogFile file={file} setFile={setFile} />
          </>
        )
      case 3:
        return <CreateDogMbti />
      default:
        return null
    }
  }

  const handlePrevStep = () => {
    setCreateDogStep(prevStep => prevStep - 1)
  }

  const handleNextStep = () => {
    setCreateDogStep(prevStep => prevStep + 1)
  }

  return (
    <c.Container>
      <c.TopContainer>
        {createDogStep > 1 && (
          <button type="button" onClick={handlePrevStep}>
            &lt;
          </button>
        )}
        <h1>보호소 강아지 등록</h1>
      </c.TopContainer>
      {renderStepComponent()}
      <div>
        {createDogStep < 3 && (
          <c.Button type="button" onClick={handleNextStep}>
            다음
          </c.Button>
        )}
        <form onSubmit={handleCreateDog} encType="multipart/form-data">
          {createDogStep === 3 && (
            <c.Button type="submit">유기견 등록</c.Button>
          )}
        </form>
      </div>
    </c.Container>
  )
}

export default CreateDogContainer
