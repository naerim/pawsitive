import * as a from '@src/components/style/AdoptInfoStyle'
import { userAtom } from '@src/stores/atoms/user'
import { useAtomValue } from 'jotai'
import { useQuery } from '@tanstack/react-query'
import { fetchAdoptedDogDetail } from '@src/apis/adoptDog'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdoptedDogDetail = () => {
  const user = useAtomValue(userAtom)
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['adoptedDogDetail'],
    queryFn: () => fetchAdoptedDogDetail(user.userNo),
  })

  useEffect(() => {
    refetch().then(r => r)
  }, [data, refetch])

  const goToMod = () => {
    navigate('/adopted-dog/mod')
  }
  useEffect(() => {
    if (data) {
      if (data.name.length > 5) {
        setMessage('와')
      } else if (data.name.length > 3) {
        setMessage('와 함께')
      } else {
        setMessage('와 함께한지')
      }
    }
  }, [data])

  return (
    <a.Flip>
      <a.Container>
        {!isLoading && data && (
          <a.Card>
            <a.FrontCard>
              <a.DogImage src="img/image_sample_dog.png" />
              <a.TextContainer>
                <a.TogetherContainer>
                  <a.DogName>{data.name}</a.DogName>
                  <a.Together>{message}</a.Together>
                </a.TogetherContainer>
                <a.Day> {data.adoptedDays}일</a.Day>
              </a.TextContainer>
            </a.FrontCard>

            <a.BackCard>
              <a.Text>이름: {data.name}</a.Text>
              <a.Text>성별: {data.sex === 'F' ? '암컷' : '수컷'}</a.Text>
              <a.Text>나이: {data.age}살</a.Text>
              <a.Text>무게: {data.weight}kg</a.Text>
              <a.Text>중성화: {data.neutralized ? '했음' : '안했음'}</a.Text>
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
