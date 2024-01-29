import CustomCard from '@src/common/CustomCard'
import { useNavigate } from 'react-router-dom'

const CheckPawsitiveCard = () => {
  const navigate = useNavigate()
  const onClick = () => navigate('/confirm/pawsitive')

  return (
    <CustomCard>
      <div onClick={onClick} role="presentation">
        포지티버가 되어 보시겠어요?
      </div>
    </CustomCard>
  )
}

export default CheckPawsitiveCard
