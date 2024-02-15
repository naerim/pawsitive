import * as h from '@src/components/style/HomeProgressBarStyle'
import { ProgressBarType } from '@src/types/components/HomeType'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { useNavigate } from 'react-router-dom'

const HomeProgressBar = (props: ProgressBarType) => {
  const navigate = useNavigate()
  const { currentStage } = props
  const user = useAtomValue(userAtom)

  const handleClick = () => {
    navigate('/adopt-process-info')
  }
  return (
    <h.Container>
      <h.Top>
        <h.ImageWrap>
          {currentStage === 1 ? (
            <img className="one" src="/icon/icon_bone_one.png" alt="" />
          ) : currentStage === 2 ? (
            <img className="two" src="/icon/icon_bone_two.png" alt="" />
          ) : (
            <img
              className="three"
              src="/icon/icon_bone_three.png"
              alt=""
              style={{ width: '100%' }}
            />
          )}
        </h.ImageWrap>
        <h.TopRightWrap>
          <h.PawsitiveInfoWrap>
            <div className="title">{currentStage !== 3 && '예비 '}포지티버</div>
            <div
              className="stage"
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            >
              단계 안내
            </div>
          </h.PawsitiveInfoWrap>
          <h.UserStage>
            <b>{user.name}</b>님의 입양 단계
          </h.UserStage>
        </h.TopRightWrap>
      </h.Top>
      <h.ProgressBarWrapper>
        <h.ProgressBarValue value={33 * currentStage} />
      </h.ProgressBarWrapper>
      <h.Bottom>
        <div className="left">
          {currentStage === 3 ? '입양완료' : '다음 단계까지 기다리는 중'}
        </div>
        <div className="right">{currentStage}/3</div>
      </h.Bottom>
    </h.Container>
  )
}

export default HomeProgressBar
