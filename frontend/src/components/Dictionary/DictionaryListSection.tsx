import { Link } from 'react-router-dom'
import DictionaryListItem from '@src/components/Dictionary/DictionaryListItem'
import * as c from '@src/components/style/DictionaryListSectionStyle'
import { DictionaryItemType } from '@src/types/components/DictionaryType'

const DictionaryListSection = (props: { data: DictionaryItemType[] }) => {
  const { data } = props

  return (
    <c.Container>
      <c.Wrap>
        {data &&
          Array.isArray(data) &&
          data.map(item => (
            <Link key={item.contentNo} to={`${item.contentNo}`}>
              <DictionaryListItem data={item} />
            </Link>
          ))}
      </c.Wrap>
    </c.Container>
  )
}

export default DictionaryListSection
