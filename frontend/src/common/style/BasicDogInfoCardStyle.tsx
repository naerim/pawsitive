import styled from 'styled-components'

interface AdoptStatusProps {
  status: string
}

export const Container = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  border: #ebebeb solid 1px;
  border-radius: 11px;
  padding: 2%;
  margin: 1% 4%;
  position: relative;
  align-items: center;
  height: 244px;
  justify-content: center;
`

export const ImgContainer = styled.div`
  height: 160px;
  display: flex;
  justify-content: center;
`

export const Dogimg = styled.img`
  width: 95%;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 2%;
`

export const AdoptStatus = styled.div<AdoptStatusProps>`
  position: absolute;
  width: fit-content;
  border-radius: 3px;
  font-size: 11px;
  padding: 2%;
  top: 6%;
  left: 8%;
  ${props =>
    props.status === ' 공고중'
      ? `background-color: #5B5B5B;
  color: #EAEAEA;`
      : ` background-color: #ff9232;
  color: #ffffff;`}
`
export const DogTextInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 2% 3% 4%;
`

export const DogName = styled.div`
  font-size: 17px;
  font-weight: 700;
  margin: 3% 0;
`

export const SubInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 2% 0 0;
  color: #818181;
  font-size: 13px;
`
