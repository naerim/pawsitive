import * as s from '@src/components/CommunityDetail/_style/UserNameStyle'

interface PropsType {
  memberName: string
  memberAddress: string
}

const UserName = (props: PropsType) => {
  const { memberName, memberAddress } = props
  return (
    <s.Container>
      <s.Image>
        <img src="/img/img_circle_dog.png" alt="" />
      </s.Image>
      <s.Right>
        <s.Title>{memberName}</s.Title>
        <s.Address>{memberAddress}</s.Address>
      </s.Right>
    </s.Container>
  )
}

export default UserName
