import { Link } from 'react-router-dom'
import CommunityListItem from '@src/components/CommunityList/CommunityListItem'
import * as c from '@src/components/style/CommunityListSectionStyle'
import { CommunityType } from '@src/types/communityType'

const CommunityListSection = (props: { data: CommunityType[] }) => {
  const { data } = props
  return (
    <c.Container>
      <c.Wrap>
        {data &&
          Array.isArray(data) &&
          data.map(item => (
            <Link key={item.boardNo} to={`${item.boardNo}`}>
              <CommunityListItem data={item} />
            </Link>
          ))}
      </c.Wrap>
    </c.Container>
  )
}

export default CommunityListSection
