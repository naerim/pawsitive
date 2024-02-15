import * as f from '@src/components/style/FilterStyle'
import { useAtom } from 'jotai/index'
import { dogListParamsAtom } from '@src/stores/atoms/dog'

const Filter = () => {
  const kindList = [
    '말티즈',
    '비숑',
    '치와와',
    '푸들',
    '포메라니안',
    '시바견',
    '시츄',
    '도베르만',
    '리트리버',
    '기타',
  ]

  const [basicDogListParams, setBasicDogListParams] = useAtom(dogListParamsAtom)

  const handleGenderChange = (value: number) => {
    setBasicDogListParams({ ...basicDogListParams, sex: value })
  }

  const handleNeuteredChange = (value: number) => {
    setBasicDogListParams({
      ...basicDogListParams,
      neutralized: value,
    })
  }

  const handleKindChange = (value: { kind: string; checked: boolean }) => {
    const selectedKinds = value.checked
      ? [...basicDogListParams.kind, value.kind]
      : basicDogListParams.kind.filter(kind => kind !== value.kind)

    setBasicDogListParams({ ...basicDogListParams, kind: selectedKinds })
  }

  const renderGenderButtons = () => (
    <div>
      <f.Title>성별</f.Title>
      <f.SexNeuteredItemList>
        {['전체', '수컷', '암컷'].map((label, index) => (
          <f.Item
            key={index}
            $select={Number(basicDogListParams.sex) === index}
            onClick={() => handleGenderChange(index)}
          >
            {label}
          </f.Item>
        ))}
      </f.SexNeuteredItemList>
    </div>
  )

  const renderNeuteredButtons = () => (
    <div>
      <f.Title>중성화</f.Title>
      <f.SexNeuteredItemList>
        {['전체', '했음', '안했음'].map((label, index) => (
          <f.Item
            key={index}
            $select={Number(basicDogListParams.neutralized) === index}
            onClick={() => handleNeuteredChange(index)}
          >
            {label}
          </f.Item>
        ))}
      </f.SexNeuteredItemList>
    </div>
  )

  const renderKindCheckboxes = () => (
    <div>
      <f.Title>종류</f.Title>
      <f.KindItemList>
        {kindList.map(kind => (
          <f.Item
            key={kind}
            $select={basicDogListParams.kind.includes(kind)}
            onClick={() =>
              handleKindChange({
                kind,
                checked: !basicDogListParams.kind.includes(kind),
              })
            }
          >
            {kind}
          </f.Item>
        ))}
      </f.KindItemList>
    </div>
  )

  return (
    <>
      <f.SexNeuteredContainer>
        {renderGenderButtons()}
        {renderNeuteredButtons()}
      </f.SexNeuteredContainer>
      <f.KindContainer>{renderKindCheckboxes()}</f.KindContainer>
    </>
  )
}

export default Filter
