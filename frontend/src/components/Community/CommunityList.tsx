import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import {
  CategoryType,
  CommunityItemType,
} from '@src/types/components/CommunityType'
import CommunityCard from '@src/components/Community/CommunityCard'
import CategoryButton from '@src/components/Community/CategoryButton'
import * as c from '@src/components/style/CommunityListStyle'
import * as ca from '@src/components/style/CategoryButtonStyle'

interface CommunityListProps {
  data: CommunityItemType[]
}

const allCategories: CategoryType[] = [
  {
    communityCategoryNo: 1,
    communityCategoryName: '지식쌓개',
  },
  {
    communityCategoryNo: 2,
    communityCategoryName: '자랑하개',
  },
  {
    communityCategoryNo: 3,
    communityCategoryName: '영양있개',
  },
  {
    communityCategoryNo: 4,
    communityCategoryName: '쇼핑하개',
  },
]

const CommunityList: React.FC<CommunityListProps> = props => {
  const { data } = props
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  const handleCategoryClick = (categoryNo: number) => {
    setSelectedCategory(categoryNo)
  }

  const handleAllCategoriesClick = () => {
    setSelectedCategory(null)
  }

  const filteredData: CommunityItemType[] = selectedCategory
    ? data.filter(item => item.communityCategoryNo === selectedCategory)
    : data

  return (
    <c.Box>
      {/* 카테고리 */}
      <c.Category>
        <ca.Button type="button" onClick={handleAllCategoriesClick}>
          전체보기
        </ca.Button>
        <CategoryButton
          categories={allCategories}
          onCategoryClick={handleCategoryClick}
        />
      </c.Category>
      {/* 커뮤니티 리스트 */}
      {filteredData &&
        filteredData.map(item => (
          <Link key={item.boardNo} to={`${item.boardNo}`}>
            <CommunityCard data={item} />
          </Link>
        ))}
    </c.Box>
  )
}

export default CommunityList
