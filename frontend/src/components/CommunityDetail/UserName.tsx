import * as s from '@src/components/CommunityDetail/_style/UserNameStyle'

interface PropsType {
  memberName: string
}

const UserName = (props: PropsType) => {
  const { memberName } = props
  return (
    <s.Container>
      <s.Circle />
      <s.Right>
        <s.Title>{memberName}</s.Title>
        <s.Address>광주광역시</s.Address>
      </s.Right>
    </s.Container>
  )
}

export default UserName
