import * as o from '@src/components/Home/_style/OndRecommendCardStyle'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'

const OndRecommendCard = () => {
  const user = useAtomValue(userAtom)
  return (
    <o.Container>
      <o.SubTitle>유기견 공고 추천</o.SubTitle>
      <o.Title>{user.name}님의 가족이 되고 싶어요</o.Title>
      <o.Image src="img/img_dog1.png" alt="" />
      <o.Button type="button">해당 공고 보러가기</o.Button>
    </o.Container>
  )
}

export default OndRecommendCard
