import * as s from '@src/components/CommunityDetail/_style/UserNameStyle'

interface PropsType {
  memberName: string
  memberStage: number
  memberAddress: string
}

const UserName = (props: PropsType) => {
  const { memberName, memberStage, memberAddress } = props
  return (
    <s.Container>
      <s.Circle>{memberStage}</s.Circle>
      <s.Right>
        <s.Title>{memberName}</s.Title>
        <s.Address>{memberAddress}</s.Address>
      </s.Right>
    </s.Container>
  )
}

export default UserName
