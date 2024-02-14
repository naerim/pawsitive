import * as b from '@src/common/style/BasicDogInfoCardStyle'
import { DogListType } from '@src/types/dogType'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userAtom } from '@src/stores/atoms/user'
import { useAtomValue } from 'jotai'

const BasicDogInfoCard: React.FC<{ dogInfo: DogListType }> = ({ dogInfo }) => {
  const navigate = useNavigate()
  const user = useAtomValue(userAtom)
  const [fileName, setFileName] = useState<string | undefined>('')
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp']
  const videoExtensions = ['mp4', 'avi', 'mkv', 'mov', 'webm']
  console.log(dogInfo)
  useEffect(() => {
    if (dogInfo.file) {
      setFileName(dogInfo.file.split('.').pop())
    }
  }, [dogInfo.file])
  const handleClick = () => {
    navigate(`/dogs/${dogInfo.dogNo}`)
  }

  // 찜 등록
  // const [userLike, setUserLike] = useAtom(dogLikedAtom)
  //
  //
  // const { mutate: likeMutate } = useMutation({
  //   mutationKey: ['PostLikedog'],
  //   mutationFn: fetchLikeDog,
  //   onSuccess() {
  //     console.log('찜 성공')
  //     setUserLike(true)
  //   },
  //   onError() {
  //     console.log('찜 실패')
  //   },
  // })
  //
  // const handelPostLikeDog = () => {
  //   const params = {
  //     userNo: user.userNo,
  //     email: user.email,
  //     dogNo: dogInfo.dogNo,
  //   }
  //   likeMutate(params)
  // }
  //
  // // 찜 취소
  // const { mutate: UnlikeMutate } = useMutation({
  //   mutationKey: ['PostUnLikedog'],
  //   mutationFn: fetchUnLikeDog,
  //   onSuccess() {
  //     console.log('찜 취소 성공')
  //     setUserLike(false)
  //   },
  //   onError() {
  //     console.log('찜 취소 실패')
  //   },
  // })
  //
  // const handelPostUnLikeDog = () => {
  //   const params = {
  //     userNo: user.userNo,
  //     email: user.email,
  //     dogNo: dogInfo.dogNo,
  //   }
  //   UnlikeMutate(params)
  //   navigate('/dogs')
  // }

  return (
    <b.Container onClick={handleClick}>
      <b.AdoptStatus $status={dogInfo.statusNo === 0 ? '공고중' : '입양완료'}>
        {dogInfo.statusNo === 0 ? '공고중' : '입양완료'}
      </b.AdoptStatus>
      <b.ImgContainer>
        {/* <b.Dogimg src={dogInfo.file} /> */}
        {fileName && (
          <>
            {imageExtensions.includes(fileName) && (
              <b.Dogimg src={dogInfo.file} />
            )}
            {videoExtensions.includes(fileName) && (
              <b.DogVideo muted autoPlay loop>
                <source src={dogInfo.file} type={`video/${fileName}`} />
              </b.DogVideo>
            )}
          </>
        )}
      </b.ImgContainer>
      <b.DogTextInfoContainer>
        <b.DogNameAndLike>
          <b.DogName>{dogInfo.name}</b.DogName>
          {user.role !== 'SHELTER' && (
            <b.DogLiked>
              {dogInfo.userLiked ? (
                <b.Image
                  src="/img/img_paw.png"
                  alt="/"
                  // onClick={handelPostUnLikeDog}
                />
              ) : (
                <b.Image
                  src="/img/img_empty_paw.png"
                  alt="/"
                  // onClick={handelPostLikeDog}
                />
              )}
            </b.DogLiked>
          )}
        </b.DogNameAndLike>

        <b.SubInfo>
          {dogInfo.sex === 'F' ? '암컷' : '수컷'} ∙ 중성화
          {dogInfo.neutralized ? '0' : 'X'}
        </b.SubInfo>
        <b.SubInfo>
          {dogInfo.age}살 ∙ {dogInfo.kind}
        </b.SubInfo>
      </b.DogTextInfoContainer>
    </b.Container>
  )
}

export default BasicDogInfoCard
