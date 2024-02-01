import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100vh;
`

export const Item = styled.div`
  background-color: #fff3e9;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
`

export const Title = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 1.4em;
  padding: 20px 0 20px 0;
`

export const SubTitle = styled.div`
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 8px;
  color: #ff9232;
`
export const Desc = styled.div`
  font-size: 0.8em;
  font-weight: 400;
  color: #7b7b7b;
  line-height: 1.2;
`

export const CloseButton = styled.button`
  width: 16px;
  margin-left: auto;
  background-color: #ffffff;
`
export const OKButton = styled.button`
  background-color: #ff9232;
  padding: 10px;
  color: #fff;
  margin-top: auto;
`

export const CancelButton = styled.button`
  margin-top: 10px;
  font-size: 12px;
  color: #7b7b7b;
`
