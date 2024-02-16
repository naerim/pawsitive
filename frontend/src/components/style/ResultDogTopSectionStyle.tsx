import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`

export const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 231px;
    height: 231px;
    border-radius: 100%;
  }
`

export const SubTitle = styled.div`
  text-align: center;
  color: #727272;
  margin-top: 40px;
`

export const Title = styled.div`
  text-align: center;
  margin-top: 16px;
  color: #ff9232;
  font-size: 1.6em;
  font-weight: 600;
`
