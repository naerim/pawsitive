import { Link } from 'react-router-dom'
// import React from 'react'
import CommunityListItem from '@src/components/CommunityList/CommunityListItem'
import * as c from '@src/components/style/CommunityListSectionStyle'
import { CommunityItemType } from '@src/types/components/CommunityType'

// const allCategories: CategoryType[] = [
//   {
//     communityCategoryNo: 1,
//     communityCategoryName: '지식쌓개',
//   },
//   {
//     communityCategoryNo: 2,
//     communityCategoryName: '자랑하개',
//   },
//   {
//     communityCategoryNo: 3,
//     communityCategoryName: '영양있개',
//   },
//   {
//     communityCategoryNo: 4,
//     communityCategoryName: '쇼핑하개',
//   },
// ]

const CommunityListSection = (props: CommunityItemType[]) => {
  const { data } = props
  // const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  //
  // const handleCategoryClick = (categoryNo: number) => {
  //   setSelectedCategory(categoryNo)
  // }
  //
  // const handleAllCategoriesClick = () => {
  //   setSelectedCategory(null)
  // }
  //
  // const filteredData: CommunityItemType[] = selectedCategory
  //   ? data.filter(item => item.communityCategoryNo === selectedCategory)
  //   : data

  return (
    <c.Container>
      <c.Wrap>
        {data &&
          data.content.map(item => (
            <Link key={item.boardNo} to={`${item.boardNo}`}>
              <CommunityListItem data={item} />
            </Link>
          ))}
      </c.Wrap>
    </c.Container>
  )
}

export default CommunityListSection
