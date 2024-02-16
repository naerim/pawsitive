import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchAdoptedDogDetail, fetchAdoptedDogMod } from '@src/apis/adoptDog'
import { ModDataType } from '@src/types/components/AdoptedDogType'
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
  const { open, setOpen } = props
  const handleClose = () => setOpen(false)
  const navigate = useNavigate()
  const [user, setUser] = useAtom(userAtom)
  const [imageFilesValue, setImageFiles] = useState<File[]>([])
  const [imageViewValue, setImageView] = useState<string[]>([])
  const [updateAdoptDogRes, setUpdateAdoptDogRes] = useState({
    name: '',
    weight: 0,
    age: 0,
  })
  const [submitData, setSubmitData] = useState({
    adoptDogNo: 0,
    formData: {},
  })

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['adoptedDogDetail'],
    queryFn: () => fetchAdoptedDogDetail(user.userNo),
  })

  const { mutate: adoptedDogMod } = useMutation({
    mutationKey: ['adoptedDogMod'],
    mutationFn: (modData: ModDataType) => fetchAdoptedDogMod(modData),
  })

  const { mutate: updateStage } = useMutation({
    mutationKey: ['updateUserStage'],
    mutationFn: updateUserStage,
    onSuccess: () => {
      setUser(prevData => ({ ...prevData, stage: 4 }))
      navigate('/')
      handleClose()
    },
    onError: error => console.error('user stage update 3-4 fail : ', error),
  })

  useEffect(() => {
    refetch().then(r => r)
  }, [refetch])

  // useQuery로 받아 온 data 값을 저장해서 input에 넣기
  useEffect(() => {
    if (data) {
      setUpdateAdoptDogRes(prevData => ({
        ...prevData,
        name: data.name,
        weight: data.weight,
        age: data.age,
      }))
      setSubmitData(prevData => ({
        ...prevData,
        adoptDogNo: data.adoptDogNo,
      }))
    }
  }, [data])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    const imageUrlLists: string[] = []
    if (files) {
      const fileArray = Array.from(files, f => f as File)
      setImageFiles(fileArray)
      const currentImageUrl = URL.createObjectURL(files[0])
      imageUrlLists.push(currentImageUrl)
    }
    setImageView(imageUrlLists)
  }

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameChange = e.target.value
    setUpdateAdoptDogRes(prevData => ({
      ...prevData,
      name: nameChange,
    }))
  }

  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const weightChange = Number(e.target.value)
    setUpdateAdoptDogRes(prevData => ({
      ...prevData,
      weight: weightChange,
    }))
  }

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ageChange = Number(e.target.value)
    setUpdateAdoptDogRes(prevData => ({
      ...prevData,
      age: ageChange,
    }))
  }

  // 모달 크기 및 색상
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    borderRadius: '10px',
    bgcolor: 'background.paper',
    '&:focus': {
      outline: 'none',
    },
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  }

  const ButtonValue = styled(Button)({
    color: '#ffffff',
    backgroundColor: '#f59021',
    width: '100%',
    height: '50px',
    fontFamily: 'SCDream',
    cursor: 'pointer',
    margin: '45px 0 0 ',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      backgroundColor: 'rgba(253,151,78,0.83)',
    },
  })

  const HandleUserStage = () => {
    const formData: FormData = new FormData()
    formData.append('file', imageFilesValue[0])
    formData.append(
      'updateAdoptDogRes',
      new Blob([JSON.stringify(updateAdoptDogRes)], {
        type: 'application/json',
      }),
    )

    submitData.formData = formData

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    adoptedDogMod(submitData)
    updateStage({
      userNo: user.userNo,
      field: 'stage',
      value: 4,
    })
  }

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
              {/* 이미지 등록 로직 */}
              <a.ImgContainer>
                <a.ImgLabel htmlFor="image">
                  <a.ImgBox>
                    {imageViewValue.length === 0 ? (
                      <img className="img" src="/icon/icon_camera.png" alt="" />
                    ) : (
                      <a.Img
                        alt=""
                        src={imageViewValue[0]}
                        style={{ height: '100%', width: '100%' }}
                      />
                    )}
                  </a.ImgBox>
                </a.ImgLabel>
                <a.ImageInput
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </a.ImgContainer>

              <a.InputContainer>
                <a.Label htmlFor="name">이름</a.Label>
                <a.Input
                  id="name"
                  value={updateAdoptDogRes.name}
                  onChange={handleName}
                  placeholder="아이의 평생 이름을 알려주세요"
                />
              </a.InputContainer>
              <a.Column>
                <a.InputContainer>
                  <a.Label htmlFor="name">나이</a.Label>
                  <a.Column>
                    <a.InputNum
                      id="age"
                      type="number"
                      value={updateAdoptDogRes.age}
                      onChange={handleAge}
                      placeholder="예상 나이여도 좋아요"
                    />
                    <a.PlaceWord>살</a.PlaceWord>
                  </a.Column>
                </a.InputContainer>

                <a.InputContainer>
                  <a.Label htmlFor="weight">무게</a.Label>
                  <a.Column>
                    <a.InputNum
                      id="weight"
                      type="number"
                      value={updateAdoptDogRes.weight}
                      onChange={handleWeight}
                      placeholder="몸무게"
                    />
                    <a.PlaceWord>kg</a.PlaceWord>
                  </a.Column>
                </a.InputContainer>
              </a.Column>

              <a.ButtonContainer>
                <ButtonValue type="button" onClick={HandleUserStage}>
                  확인
                </ButtonValue>
                {/* <ButtonValue type="button" onClick={handleClose}> */}
                {/*  취소 */}
                {/* </ButtonValue> */}
              </a.ButtonContainer>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  )
}

export default AdoptedDogModModal
