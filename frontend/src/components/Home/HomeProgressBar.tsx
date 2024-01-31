import * as h from '@src/components/style/HomeProgressBarStyle'
import { ProgressBarType } from '@src/types/components/HomeType'
import StageInfoModal from '@src/common/StageInfoModal'

const HomeProgressBar = (props: ProgressBarType) => {
  const { currentStage } = props

  return (
    <h.Container>
      <h.Top>
        <h.ImageWrap>
          {currentStage === 1 ? (
            <img className="one" src="/icon/icon_bone_one.png" alt="" />
          ) : (
            <img className="two" src="/icon/icon_bone_two.png" alt="" />
          )}
        </h.ImageWrap>
        <h.TopRightWrap>
          <h.PawsitiveInfoWrap>
            <div className="title">예비 포지티버</div>
            <StageInfoModal />
          </h.PawsitiveInfoWrap>
          <h.UserStage>
            <b>김현지</b>님의 입양 단계
          </h.UserStage>
        </h.TopRightWrap>
      </h.Top>
      <h.Progress value={33 * currentStage} max="100" />
      <h.Bottom>
        <div className="left">다음 단계까지 기다리는 중</div>
        <div className="right">{currentStage}/3</div>
      </h.Bottom>
    </h.Container>
  )
}

export default HomeProgressBar
