import { DictionaryItemType } from '@src/types/components/DictionaryType'
import * as c from '@src/components/style/DictionaryListItemStyle'

const DictionaryListItem = (props: { data: DictionaryItemType }) => {
  const { data } = props

  const setImageSrc = (category: string) => {
    const imageUrls: Record<string, string[]> = {
      펫티켓: ['/img/img_dog_poo.png', '/img/img_bag.png'],
      질병정보: [
        '/img/img_popular_community.png',
        '/img/img_lope.png',
        '/img/img_dog_food.png',
      ],
      행동교육: [
        '/img/img_cage.png',
        '/img/img_dog_medication.png',
        '/img/img_bottle.png',
        'img/img_bone_bowl.png',
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

  return (
    <c.Container>
      <c.Left>
        <c.Category>{data.contentCategoryName}</c.Category>
        <c.Title>{data.title}</c.Title>
      </c.Left>
      <c.Image src={setImageSrc(data.contentCategoryName)} alt="" />
    </c.Container>
  )
}

export default DictionaryListItem
