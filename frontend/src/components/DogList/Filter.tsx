import { useAtom } from 'jotai'
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

  const handleGenderChange = event => {
    setBasicDogListParams({ ...basicDogListParams, sex: event.target.value })
  }

  const handleNeuteredChange = event => {
    setBasicDogListParams({
      ...basicDogListParams,
      neutralized: event.target.value,
    })
  }

  const handleKindChange = event => {
    const selectedKinds = event.target.checked
      ? [...basicDogListParams.kind, event.target.value]
      : basicDogListParams.kind.filter(kind => kind !== event.target.value)

    setBasicDogListParams({ ...basicDogListParams, kind: selectedKinds })
  }

  return (
    <div>
      <div>
        성별:
        <label>
          <input
            type="radio"
            value="0"
            checked={Number(basicDogListParams.sex) === 0}
            onChange={handleGenderChange}
          />
          전체
        </label>
        <label>
          <input
            type="radio"
            value="1"
            checked={Number(basicDogListParams.sex) === 1}
            onChange={handleGenderChange}
          />
          수컷
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={Number(basicDogListParams.sex) === 2}
            onChange={handleGenderChange}
          />
          암컷
        </label>
      </div>

      <div>
        중성화:
        <label>
          <input
            type="radio"
            value="0"
            checked={Number(basicDogListParams.neutralized) === 0}
            onChange={handleNeuteredChange}
          />
          전체
        </label>
        <label>
          <input
            type="radio"
            value="1"
            checked={Number(basicDogListParams.neutralized) === 1}
            onChange={handleNeuteredChange}
          />
          0
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={Number(basicDogListParams.neutralized) === 2}
            onChange={handleNeuteredChange}
          />
          X
        </label>
      </div>
      <div>
        종류:
        {kindList.map(kind => (
          <label key={kind}>
            <input
              type="checkbox"
              value={kind}
              checked={basicDogListParams.kind.includes(kind)}
              onChange={handleKindChange}
            />
            {kind}
          </label>
        ))}
      </div>
    </div>
  )
}

export default Filter
