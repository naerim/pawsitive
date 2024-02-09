import * as s from '@src/components/style/ShowDogCardStyle'
import { useNavigate } from 'react-router-dom'

const ShowDogCard = () => {
  const userRole = JSON.parse(window.localStorage.getItem('currentUser')).role

  const showDogCardInfo =
    userRole === 'USER'
      ? {
          title: '세상에 귀여운 강아지는 많다!',
          subTitle: '나와 잘 맞는 강아지를 알아보세요.',
          buttonText: '유기견 공고 둘러보기',
          url: '/confirm/pawsitive',
        }
      : {
          title: '유기견을 등록하러 가볼까요?',
          subTitle: '상세히 등록해 입양률을 높여보세요!',
          buttonText: '유기견 등록하러 가기',
          url: '/new/dog',
        }

  const navigate = useNavigate()
  const goDogList = () => navigate(showDogCardInfo.url)

  return (
    <s.Container>
      <s.Image src="/img/img_show_dog_card.png" alt="" />
      <s.Title>{showDogCardInfo.title}</s.Title>
      <s.SubTitle>{showDogCardInfo.subTitle}</s.SubTitle>
      <s.Button type="button" onClick={goDogList}>
        {showDogCardInfo.buttonText}
      </s.Button>
    </s.Container>
  )
}

export default ShowDogCard
