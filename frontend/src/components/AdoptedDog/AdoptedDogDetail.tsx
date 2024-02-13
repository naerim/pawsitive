import * as a from '@src/components/style/AdoptedDogDetailStyle'
import { userAtom } from '@src/stores/atoms/user'
import { useAtomValue } from 'jotai'
import { useQuery } from '@tanstack/react-query'
import { fetchAdoptedDogDetail } from '@src/apis/adoptDog'
import { useEffect, useState } from 'react'
import AdoptedDogModModal from '@src/components/AdoptedDog/AdoptedDogModModal'

const AdoptedDogDetail = () => {
  const user = useAtomValue(userAtom)
  // const navigate = useNavigate()
  const [message, setMessage] = useState('')

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['adoptedDogDetail'],
    queryFn: () => fetchAdoptedDogDetail(user.userNo),
  })

  useEffect(() => {
    refetch().then(r => r)
  }, [data, refetch])

  // const goToMod = () => {
  //   navigate('/adopted-dog/mod')
  // }
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
              <a.DogImage
                src={data.image ? `${data.image}` : 'img/img_dog1.png'}
              />
              <a.TextContainer>
                <a.TogetherContainer>
                  <a.DogName>{data.name}</a.DogName>
                  <a.Together>{message}</a.Together>
                </a.TogetherContainer>
                <a.Day> {data.adoptedDays}일</a.Day>
              </a.TextContainer>
            </a.FrontCard>

            <a.BackCard>
              <a.BackCardDiv>
                <a.BackContent>
                  <a.BackDogName>{data.name}</a.BackDogName>
                  <a.Text>{data.age}살</a.Text>
                  <a.Text>{data.weight}kg</a.Text>
                  <a.Text>중성화 {data.neutralized ? 'O' : 'X'}</a.Text>
                  <a.ModButton type="button" onClick={handleOpen}>
                    수정하기
                  </a.ModButton>
                </a.BackContent>
                <a.BackImgDiv>
                  {data.sex === 'F' ? (
                    <a.BackSex src="/icon/icon_female.png" />
                  ) : (
                    <a.BackSex src="/icon/icon_male.png" />
                  )}
                </a.BackImgDiv>
              </a.BackCardDiv>
              <AdoptedDogModModal open={open} setOpen={setOpen} />
            </a.BackCard>
          </a.Card>
        )}
      </a.Container>
    </a.Flip>
  )
}

export default AdoptedDogDetail
