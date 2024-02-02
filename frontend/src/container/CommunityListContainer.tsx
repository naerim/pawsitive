import {
  CommunityItemType,
  CommunityListType,
} from '@src/types/components/CommunityType'
import { useQuery } from '@tanstack/react-query'
import { fetchCommunityList } from '@src/apis/community'
import { CommunityListAtom } from '@src/stores/atoms/community'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import * as c from '@src/container/style/CommunityListContainerStyle'
import CommunityCategorySection from '@src/components/CommunityList/CommunityCategorySection'
import CommunityListSection from '@src/components/CommunityList/CommunityListSection'

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

const Index: React.FC = () => {
  const { isLoading, data } = useQuery<CommunityListType[]>({
    queryKey: ['communityList'],
    queryFn: () => fetchCommunityList(),
  })
  const [CommunityListValue, setCommunityList] =
    useAtom<CommunityItemType[]>(CommunityListAtom)

  useEffect(() => {
    if (data && data.content) {
      setCommunityList(data.content as CommunityListType[])
    }
  }, [data, setCommunityList])
  // const handleCategoryClick = (categoryNo: number) => {
  //   setSelectedCategory(categoryNo)
  // }
  //
  // const handleAllCategoriesClick = () => {
  //   setSelectedCategory(null)
  // }
  //
  // const filteredData: CommunityListType[] = selectedCategory
  //   ? CommunityListValue.filter(
  //       item => item.content.communityCategoryNo === selectedCategory,
  //     )
  //   : CommunityListValue

  return (
    <c.Container>
      <c.Wrap>
        <CommunityCategorySection />
        {isLoading || !CommunityListValue ? (
          <p>Loading...</p>
        ) : (
          <div>
            {/* 카테고리 */}
            {/* <c.Category> */}
            {/*  <Button type="button" onClick={handleAllCategoriesClick}> */}
            {/*    전체보기 */}
            {/*  </Button> */}
            {/*  <CategoryButton */}
            {/*    categories={allCategories} */}
            {/*    onCategoryClick={handleCategoryClick} */}
            {/*  /> */}
            {/* </c.Category> */}
            {/* 커뮤니티 리스트 */}
            <CommunityListSection data={CommunityListValue} />
            {/* <CommunityList data={filteredData} /> */}
          </div>
        )}
      </c.Wrap>
    </c.Container>
  )
}

export default Index
