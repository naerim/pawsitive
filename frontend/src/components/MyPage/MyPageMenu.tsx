import * as m from '@src/components/style/MyPageMenuStyle'
import { useAtom } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import LogoutModal from '@src/components/MyPage/LogoutModal'

const MyPageMenu = () => {
  const [user] = useAtom(userAtom)

  return (
    <m.Container>
      <m.Header>
        <m.word>
          <m.Pawsitiver>포지티버</m.Pawsitiver>
          <m.Name>{user.name ? `${user.name}님` : '사용자 이름'}</m.Name>
        </m.word>
        <m.Img src="/public/img/img_dog_bones.png" />
      </m.Header>
      <m.Body>
        <m.MenuItem to="/mypage/profile">
          <m.MenuItemDiv>
            회원정보 수정
            <m.RightArrow src="/public/icon/icon_black_arrow_right.png" />
          </m.MenuItemDiv>
        </m.MenuItem>

        <m.MenuItem to="/mypage/setting">
          <m.MenuItemDiv>
            환경 설정
            <m.RightArrow src="/public/icon/icon_black_arrow_right.png" />
          </m.MenuItemDiv>
        </m.MenuItem>
        <m.MenuItem to="/mypage/findSimilarDog">
          <m.MenuItemDiv>
            나와 닮은꼴 강아지 찾기
            <m.RightArrow src="/public/icon/icon_black_arrow_right.png" />
          </m.MenuItemDiv>
        </m.MenuItem>
        <m.MenuItem to="/mypage/survey">
          <m.MenuItemDiv>
            입양설문 하러가기
            <m.RightArrow src="/public/icon/icon_black_arrow_right.png" />
          </m.MenuItemDiv>
        </m.MenuItem>
        <m.MenuItem to="/login">
          <m.MenuItemDiv>
            로그인(임시)
            <m.RightArrow src="/public/icon/icon_black_arrow_right.png" />
          </m.MenuItemDiv>
        </m.MenuItem>

        <m.MenuItemDiv>
          <LogoutModal />
          <m.RightArrow src="/public/icon/icon_black_arrow_right.png" />
        </m.MenuItemDiv>
      </m.Body>
    </m.Container>
  )
}

export default MyPageMenu
