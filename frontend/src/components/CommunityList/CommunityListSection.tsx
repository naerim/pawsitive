import { Link } from 'react-router-dom'
import { CommunityListType } from '@src/types/components/CommunityType'
import CommunityListItem from '@src/components/CommunityList/CommunityListItem'
import * as c from '@src/components/style/CommunityListSectionStyle'

interface CommunityListProps {
  data: CommunityListType
}

const CommunityListSection = (props: CommunityListProps) => {
  const { data } = props
  console.log(data)
  return (
    <c.Container>
      <c.Wrap>
        {data.content &&
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
