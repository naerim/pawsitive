import { useNavigate } from 'react-router-dom'
import { DictionaryItemType } from '@src/types/components/DictionaryType'
import * as c from '@src/components/style/DictionaryDetailStyle'

const DictionaryDetail = (props: { data: DictionaryItemType }) => {
  const { data } = props

  const navigate = useNavigate()

  const handlePrevStep = () => {
    navigate('/dictionary')
  }

  const setImageSrc = (category: string) => {
    const imageUrls: Record<string, string[]> = {
      펫티켓: ['/img/img_dog_poo.png', '/img/img_bag.png'],
      질병정보: ['/img/img_popular_community.png', '/img/img_lope.png'],
      행동교육: [
        '/img/img_cage.png',
        '/img/img_dog_medication.png',
        '/img/img_bottle.png',
      ],
      애견상식: [
        '/img/img_bowl.png',
        '/img/img_can.png',
        '/img/img_fish_bone.png',
      ],
    }

    const images = imageUrls[category]
    const randomIndex = Math.floor(Math.random() * images.length)
    return images[randomIndex]
  }

  const parseContent = JSON.parse(data.content)
  const commonContent = (
    <c.wrap>
      <c.Category>{data.contentCategoryName}</c.Category>
      <c.Title>{data.title}</c.Title>
    </c.wrap>
  )

  switch (data.contentCategoryName) {
    case '펫티켓':
      return (
        <div>
          <c.TopContainer>
            <c.BackButtonWrap onClick={handlePrevStep}>
              <img src="/icon/icon_white_arrow_left.png" alt="" />
            </c.BackButtonWrap>
            <c.ImageContainer>
              <img src={setImageSrc(data.contentCategoryName)} alt="" />
            </c.ImageContainer>
          </c.TopContainer>
          <c.Container>
            {commonContent}
            <c.InfoContainer>
              <c.Desc>{parseContent.description}</c.Desc>
              <c.Remarks>
                <p>위반 시, 과태료 안내</p>
                {
                  parseContent.remarks
                    .split(':')
                    .filter((s: string) => s.trim() !== '')[1]
                }
              </c.Remarks>
            </c.InfoContainer>
          </c.Container>
        </div>
      )
    case '질병정보':
      return (
        <div>
          <c.TopContainer>
            <c.BackButtonWrap onClick={handlePrevStep}>
              <img src="/icon/icon_white_arrow_left.png" alt="" />
            </c.BackButtonWrap>
            <c.ImageContainer>
              <img src={setImageSrc(data.contentCategoryName)} alt="" />
            </c.ImageContainer>
          </c.TopContainer>
          <c.Container>
            {commonContent}
            <c.InfoContainer>
              <c.Desc>{parseContent.description}</c.Desc>
              <c.Symptom>
                <p>증상</p>
                {parseContent.symptom
                  .split('\n')
                  .filter((s: string) => s.trim() !== '')
                  .map((s: string) => (
                    <c.SymptomItem key={`symptom-${s}`}>{s}</c.SymptomItem>
                  ))}
              </c.Symptom>
              <c.Prevent>
                <p>예방 방법</p>
                {parseContent.prevent
                  .split('\n')
                  .filter((s: string) => s.trim() !== '')
                  .map((p: string) => (
                    <c.PreventItem key={`prevent-${p}`}>{p}</c.PreventItem>
                  ))}
              </c.Prevent>
            </c.InfoContainer>
          </c.Container>
        </div>
      )
    case '행동교육':
    case '애견상식':
      return (
        <div>
          <c.TopContainer>
            <c.BackButtonWrap onClick={handlePrevStep}>
              <img src="/icon/icon_white_arrow_left.png" alt="" />
            </c.BackButtonWrap>
            <c.ImageContainer>
              <img src={setImageSrc(data.contentCategoryName)} alt="" />
            </c.ImageContainer>
          </c.TopContainer>
          <c.Container>
            {commonContent}
            <c.InfoContainer>
              <c.Desc>
                {parseContent.description
                  .split('\n')
                  .filter((s: string) => s.trim() !== '')
                  .map((s: string) => (
                    <c.DescItem key={`description-${s}`}>{s}</c.DescItem>
                  ))}
              </c.Desc>
              <c.Remarks>{parseContent.remarks}</c.Remarks>
            </c.InfoContainer>
          </c.Container>
        </div>
      )
    default:
      return <div>상세정보를 불러올 수 없습니다.</div>
  }
}

export default DictionaryDetail
