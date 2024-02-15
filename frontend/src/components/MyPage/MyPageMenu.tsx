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
          <m.Role>
            {user.role === 'USER' && '포지티버'}
            {user.role === 'SHELTER' && '보호소'}
          </m.Role>
          <m.Name>
            {user.name && user.role === 'USER'
              ? `${user.name}님`
              : `${user.name}`}
          </m.Name>
        </m.word>
        <m.Img src="/img/img_dog_bones.png" />
      </m.Header>

      <m.Body>
        {/* <m.MenuItem to="/mypage/profile"> */}
        {/*  <m.MenuItemDiv> */}
        {/*    회원정보 수정 */}
        {/*    <m.RightArrow src="/icon/icon_black_arrow_right.png" /> */}
        {/*  </m.MenuItemDiv> */}
        {/* </m.MenuItem> */}

        {user.role === 'USER' && (
          <m.MenuItem to="/save-dogs-list">
            <m.MenuItemDiv>
              내가 찜한 공고 보기
              <m.RightArrow src="/icon/icon_black_arrow_right.png" />
            </m.MenuItemDiv>
          </m.MenuItem>
        )}

        {user.role === 'USER' && user.stage < 2 && (
          <m.MenuItem to="/mypage/survey">
            <m.MenuItemDiv>
              입양 설문 작성하기
              <m.RightArrow src="/icon/icon_black_arrow_right.png" />
            </m.MenuItemDiv>
          </m.MenuItem>
        )}

        {user.role === 'USER' && user.stage > 1 && (
          <m.MenuItem to={`/mypage/survey/detail/${user.userNo}`}>
            <m.MenuItemDiv>
              작성한 입양 설문 보기
              <m.RightArrow src="/icon/icon_black_arrow_right.png" />
            </m.MenuItemDiv>
          </m.MenuItem>
        )}

        {user.role === 'SHELTER' && (
          <m.MenuItem to="/shelter/dogs">
            <m.MenuItemDiv>
              내 보호소 강아지 보기
              <m.RightArrow src="/icon/icon_black_arrow_right.png" />
            </m.MenuItemDiv>
          </m.MenuItem>
        )}
        {/* 공통 */}
        <m.MenuItem to="/mypage/findSimilarDog">
          <m.MenuItemDiv>
            나와 닮은꼴 강아지 테스트
            <m.RightArrow src="/icon/icon_black_arrow_right.png" />
          </m.MenuItemDiv>
        </m.MenuItem>
        <m.MenuItem to="/mypage/setting">
          <m.MenuItemDiv>
            환경 설정
            <m.RightArrow src="/icon/icon_black_arrow_right.png" />
          </m.MenuItemDiv>
        </m.MenuItem>

        <m.MenuItemDiv>
          <LogoutModal />
          <m.RightArrow src="/icon/icon_black_arrow_right.png" />
        </m.MenuItemDiv>
        <br />
        <br />
        <br />
        <br />
      </m.Body>
    </m.Container>
  )
}

export default MyPageMenu
