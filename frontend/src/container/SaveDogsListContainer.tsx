import { useAtomValue } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { useQuery } from '@tanstack/react-query'
import { fetchLikeDogList } from '@src/apis/dog'
import SaveDogListSection from '@src/components/SaveDog/SaveDogListSection'
import * as s from '@src/container/style/SaveDogListContainerStyle'
import { useNavigate } from 'react-router-dom'

const SaveDogsListContainer = () => {
  const navigate = useNavigate()
  const userValue = useAtomValue(userAtom)
  const { userNo } = userValue

  const { data } = useQuery({
    queryKey: ['SaveDogList'],
    queryFn: () => fetchLikeDogList(userNo),
  })

  const handlePrevStep = () => {
    navigate('/mypage')
  }

  return (
    <s.Container>
      <s.TopContainer>
        <s.BackButtonWrap onClick={handlePrevStep}>
          <img src="/icon/icon_gray_arrow_left.png" alt="" />
        </s.BackButtonWrap>
        <s.Title>내가 찜한 공고</s.Title>
        <s.Span />
      </s.TopContainer>
      <SaveDogListSection data={data} />
    </s.Container>
  )
}

export default SaveDogsListContainer
