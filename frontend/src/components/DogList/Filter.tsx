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

  const handleGenderChange = value => {
    setBasicDogListParams({ ...basicDogListParams, sex: value })
  }

  const handleNeuteredChange = value => {
    setBasicDogListParams({
      ...basicDogListParams,
      neutralized: value,
    })
  }

  const handleKindChange = value => {
    const selectedKinds = value.checked
      ? [...basicDogListParams.kind, value.kind]
      : basicDogListParams.kind.filter(kind => kind !== value.kind)

    setBasicDogListParams({ ...basicDogListParams, kind: selectedKinds })
  }

  const renderGenderButtons = () => (
    <div>
      성별:
      {['전체', '수컷', '암컷'].map((label, index) => (
        <f.Item
          key={index}
          $select={Number(basicDogListParams.sex) === index}
          onClick={() => handleGenderChange(index)}
        >
          {label}
        </f.Item>
      ))}
    </div>
  )

  const renderNeuteredButtons = () => (
    <div>
      중성화:
      {['전체', '0', 'X'].map((label, index) => (
        <f.Item
          key={index}
          $select={Number(basicDogListParams.neutralized) === index}
          onClick={() => handleNeuteredChange(index)}
        >
          {label}
        </f.Item>
      ))}
    </div>
  )

  const renderKindCheckboxes = () => (
    <div>
      종류:
      {kindList.map(kind => (
        <f.Item key={kind} $select={basicDogListParams.kind.includes(kind)}>
          <input
            type="checkbox"
            value={kind}
            checked={basicDogListParams.kind.includes(kind)}
            onChange={() =>
              handleKindChange({
                kind,
                checked: !basicDogListParams.kind.includes(kind),
              })
            }
          />
          {kind}
        </f.Item>
      ))}
    </div>
  )

  return (
    <div>
      {renderGenderButtons()}
      {renderNeuteredButtons()}
      {renderKindCheckboxes()}
    </div>
  )
}

export default Filter
