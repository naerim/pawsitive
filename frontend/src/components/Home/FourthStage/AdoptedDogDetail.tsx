import * as a from '@src/components/style/AdoptInfoStyle'
import { userAtom } from '@src/stores/atoms/user'
import { useAtomValue } from 'jotai'
import { useQuery } from '@tanstack/react-query'
import { fetchAdoptedDogDetail } from '@src/apis/adoptDog'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdoptedDogDetail = () => {
  const user = useAtomValue(userAtom)
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ['adoptedDogDetail'],
    queryFn: () => fetchAdoptedDogDetail(user.userNo),
  })
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }
  const goToMod = () => {
    navigate('/adopted-dog/mod')
  }

  console.log(data)

  return (
    <a.Flip>
      <a.Container>
        {!isLoading && (
          <a.Card onClick={handleCardClick}>
            <a.FrontCard>
              <a.DogImage src="img/image_sample_dog.png" />
              <a.TextContainer>
                <a.TogetherContainer>
                  <a.DogName>{data.name}</a.DogName>
                  <a.Together>와 함께한지</a.Together>
                </a.TogetherContainer>
                <a.Day> {data.adoptedDays}일</a.Day>
              </a.TextContainer>
            </a.FrontCard>

            <a.BackCard>
              <a.Text>이름: {data.name}</a.Text>
              <a.Text>성별: {data.name}</a.Text>
              <a.Text>중성화: {data.name}</a.Text>
              <a.Text>나이: {data.age}</a.Text>
              <a.Text>무게: {data.weight}</a.Text>
              <a.ModButton type="button" onClick={goToMod}>
                수정하기
              </a.ModButton>
            </a.BackCard>
          </a.Card>
        )}
      </a.Container>
    </a.Flip>
  )
}

export default AdoptedDogDetail
