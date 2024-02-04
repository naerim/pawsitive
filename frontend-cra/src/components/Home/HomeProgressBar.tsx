import HomeStageInfoModal from '@components/Home/HomeStageInfoModal'
import * as h from './_style/HomeProgressBarStyle'
import { ProgressBarType } from '@/types/common'

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
            <HomeStageInfoModal />
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
