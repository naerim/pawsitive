import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchAdoptedDogDetail, fetchAdoptedDogMod } from '@src/apis/adoptDog'
import { ModData } from '@src/types/components/AdoptedDogType'
import React, { useEffect, useState } from 'react'
import { updateUserStage } from '@src/apis/user'
import * as a from '@src/components/style/AdoptedDogModModalStyle'
// mui
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'
import Button from '@mui/material/Button'

interface PropsType {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AdoptedDogModModal = (props: PropsType) => {
  const navigate = useNavigate()
  const [user, setUser] = useAtom(userAtom)
  const { open, setOpen } = props
  const handleClose = () => setOpen(false)
  const [dataForm, setDataForm] = useState<ModData>({
    fetchData: {
      name: '',
      weight: 0,
      age: 0,
    },
    adoptDogNo: 0,
  })

  const { data, isLoading } = useQuery({
    queryKey: ['adoptedDogDetail'],
    queryFn: () => fetchAdoptedDogDetail(user.userNo),
  })

  const { mutate: adoptedDogMod } = useMutation({
    mutationKey: ['adoptedDogMod'],
    mutationFn: (modData: ModData) => fetchAdoptedDogMod(modData),
  })

  const { mutate: updateStage } = useMutation({
    mutationKey: ['updateUserStage'],
    mutationFn: updateUserStage,
    onSuccess: () => {
      setUser(user => ({ ...user, stage: 4 }))
      navigate('/')
      handleClose()
    },
    onError: error => console.error('user stage update 3-4 fail : ', error),
  })

  // useQuery로 받아 온 data 값을 저장해서 input에 넣기
  useEffect(() => {
    if (data) {
      setDataForm(prevData => ({
        ...prevData,
        fetchData: {
          ...prevData.fetchData,
          name: data.name,
          weight: data.weight,
          age: data.age,
        },
        adoptDogNo: data.adoptDogNo,
      }))
    }
  }, [data])

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

  const HandleUserStage = () => {
    adoptedDogMod(dataForm)
    updateStage({
      userNo: user.userNo,
      field: 'stage',
      value: 4,
    })
  }

  // 모달 크기 및 색상
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    borderRadius: '10px',
    bgcolor: 'background.paper',
    '&:focus': {
      outline: 'none',
    },
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const ButtonValue = styled(Button)({
    color: '#000000',
    fontFamily: 'SCDream',
    cursor: 'pointer',
    margin: '10px 0 0 ',
    '&:focus': {
      outline: 'none',
      color: '#f59021',
    },
  })

  return (
    <div>
      {!isLoading && data && (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <a.InputContainer>
                <label htmlFor="name">이름 </label>
                <a.Input
                  id="name"
                  value={dataForm.fetchData.name}
                  onChange={handleName}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
              </a.InputContainer>

              <a.InputContainer>
                <label htmlFor="weight">무게 </label>
                <a.Input
                  id="weight"
                  type="number"
                  value={dataForm.fetchData.weight}
                  onChange={handleWeight}
                />
                kg
              </a.InputContainer>
              <a.InputContainer>
                <label htmlFor="name">나이 </label>
                <a.Input
                  id="age"
                  type="number"
                  value={dataForm.fetchData.age}
                  onChange={handleAge}
                />
                세
              </a.InputContainer>
              <a.ButtonContainer>
                <ButtonValue type="button" onClick={HandleUserStage}>
                  확인
                </ButtonValue>
                <ButtonValue type="button" onClick={handleClose}>
                  취소
                </ButtonValue>
              </a.ButtonContainer>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  )
}

export default AdoptedDogModModal
