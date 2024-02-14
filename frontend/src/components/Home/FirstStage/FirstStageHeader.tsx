import * as f from '@src/components/Home/_style/FirstStageHeaderStyle'
import { useAtomValue } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user.ts'

const FirstStageHeader = () => {
  const user = useAtomValue(userAtom)
  return (
    <f.Container>
      <f.TopWrap>
        <div>
          <f.Title>{user.name}님 안녕하세요!</f.Title>
          <f.SubTitle>
            입양설문을 통해 반려견들과
            <br />더 가까워져볼까요?
          </f.SubTitle>
        </div>
        <f.HomeImage src="/img/img_first_stage_header.png" alt="" />
      </f.TopWrap>
    </f.Container>
  )
}

export default FirstStageHeader
