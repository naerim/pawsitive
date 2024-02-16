import * as d from '@src/components/CommunityDetail/_style/CommunityContentStyle'

interface PropsType {
  content: string
}

const CommunityContent = (props: PropsType) => {
  const { content } = props
  return <d.Container>{content}</d.Container>
}

export default CommunityContent
