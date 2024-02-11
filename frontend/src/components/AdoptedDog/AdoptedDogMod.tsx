import { useNavigate } from 'react-router-dom'
// import { useAtom } from 'jotai/index'
// import { userAtom } from '@src/stores/atoms/user'
import { useMutation } from '@tanstack/react-query'
import { fetchAdoptedDogMod } from '@src/apis/adoptDog'
import { AdoptedDog, ModData } from '@src/types/components/AdoptedDogType'
import React, { useState } from 'react'

const AdoptedDogMod = (props: { data: AdoptedDog }) => {
  const { data } = props
  const navigate = useNavigate()
  // const [, setUser] = useAtom(userAtom)
  const [dataForm, setDataForm] = useState<ModData>({
    fetchData: {
      name: data.name,
      weight: data.weight,
      age: data.age,
    },
    adoptDogNo: data.adoptDogNo,
  })
  const { mutate } = useMutation({
    mutationKey: ['adoptedDogMod'],
    mutationFn: (modData: ModData) => fetchAdoptedDogMod(modData),
  })

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameChange = e.target.value
    setDataForm(prevData => ({
      ...prevData,
      fetchData: {
        ...prevData.fetchData,
        name: nameChange,
      },
    }))
  }

  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weightChange = Number(e.target.value)
    setDataForm(prevData => ({
      ...prevData,
      fetchData: {
        ...prevData.fetchData,
        weight: weightChange,
      },
    }))
  }

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ageChange = Number(e.target.value)
    setDataForm(prevData => ({
      ...prevData,
      fetchData: {
        ...prevData.fetchData,
        age: ageChange,
      },
    }))
  }

  // const changeUserStage = (num: number) =>
  //   setUser(user => ({ ...user, stage: num }))

  const HandleUserStage = () => {
    mutate(dataForm)
    // changeUserStage(4)
    navigate('/')
  }
  return (
    <div>
      <div>
        <label htmlFor="name">이름: </label>
        <input
          id="name"
          value={dataForm.fetchData.name}
          onChange={handleName}
        />
      </div>
      <div>
        <label htmlFor="weight">무게: </label>
        <input
          id="weight"
          type="number"
          value={dataForm.fetchData.weight}
          onChange={handleWeight}
        />
        kg
      </div>
      <div>
        <label htmlFor="name">나이: </label>
        <input
          id="age"
          type="number"
          value={dataForm.fetchData.age}
          onChange={handleAge}
        />
        세
      </div>
      <div>
        <button type="button" onClick={HandleUserStage}>
          확인
        </button>
      </div>
    </div>
  )
}

export default AdoptedDogMod