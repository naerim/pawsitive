import * as f from '@src/components/style/AlarmFillAdoptInfoStyle'
import AdoptedDogModModal from '@src/components/AdoptedDog/AdoptedDogModModal'
import { useState } from 'react'

const AlarmFillAdoptInfo = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  return (
    <div>
      <f.Container onClick={handleOpen}>
        <f.SubTitle>오늘의 할 일</f.SubTitle>
        <f.Title>반려견이 된 아이의 이름을</f.Title>
        <f.Title>정해볼까요?</f.Title>
        <f.DogHouse src="img/img_dog_cushion.png" alt="dog_cushion" />
        <f.Button>이름 지으러 가기</f.Button>
      </f.Container>
      <AdoptedDogModModal open={open} setOpen={setOpen} />
    </div>
  )
}

export default AlarmFillAdoptInfo
