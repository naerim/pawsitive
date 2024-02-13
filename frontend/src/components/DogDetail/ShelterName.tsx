import { useAtom, useAtomValue } from 'jotai/index'
import { useMutation } from '@tanstack/react-query'
import { userAtom } from '@src/stores/atoms/user'
import { fetchLikeDog, fetchUnLikeDog } from '@src/apis/dog'
import * as s from '@src/components/DogDetail/style/ShelterNameStyle'
import { ShelterNameType } from '@src/types/components/DogDetailType'
import { dogLikedAtom } from '@src/stores/atoms/dog'

const ShelterName = (props: ShelterNameType) => {
  const { userName, address, dogNo } = props
  const user = useAtomValue(userAtom)
  const [userLike, setUserLike] = useAtom(dogLikedAtom)

  // 찜 등록
  const { mutate: likeMutate } = useMutation({
    mutationKey: ['PostLikedog'],
    mutationFn: fetchLikeDog,
    onSuccess() {
      console.log('찜 성공')
      setUserLike(true)
    },
    onError() {
      console.log('찜 실패')
    },
  })

  const handelPostLikeDog = () => {
    const params = {
      userNo: user.userNo,
      email: user.email,
      dogNo,
    }
    likeMutate(params)
  }

  // 찜 취소
  const { mutate: UnlikeMutate } = useMutation({
    mutationKey: ['PostUnLikedog'],
    mutationFn: fetchUnLikeDog,
    onSuccess() {
      console.log('찜 취소 성공')
      setUserLike(false)
    },
    onError() {
      console.log('찜 취소 실패')
    },
  })

  const handelPostUnLikeDog = () => {
    const params = {
      userNo: user.userNo,
      email: user.email,
      dogNo,
    }
    UnlikeMutate(params)
  }

  return (
    <s.Container>
      <s.InfoWrap>
        <s.Circle />
        <s.Right>
          <s.Title>{userName}</s.Title>
          <s.Address>{address}</s.Address>
        </s.Right>
      </s.InfoWrap>
      <s.ImageWrap>
        {userLike ? (
          <s.Image
            src="/img/img_paw.png"
            alt="/"
            onClick={handelPostUnLikeDog}
          />
        ) : (
          <s.Image
            src="/img/img_empty_paw.png"
            alt="/"
            onClick={handelPostLikeDog}
          />
        )}
      </s.ImageWrap>
    </s.Container>
  )
}

export default ShelterName
