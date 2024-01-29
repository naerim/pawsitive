import { useNavigate } from 'react-router-dom'

const ConfirmPawsitiveContainer = () => {
  const navigate = useNavigate()
  const onClick = () => navigate(-1)

  return (
    <div>
      <div>입양 마음 확정 페이지</div>
      <br />
      <br />
      <button type="button">네</button>
      <br />
      <button type="button" onClick={onClick}>
        아니요, 조금만 더 둘러볼래요
      </button>
      <br />
      <br />
      <button type="button" onClick={onClick}>
        뒤로가기
      </button>
    </div>
  )
}

export default ConfirmPawsitiveContainer
