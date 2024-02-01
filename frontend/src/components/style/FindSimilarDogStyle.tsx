import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`

export const WebcamContainer = styled.div`
  margin-bottom: 100px;
`

export const BarContainer = styled.div`
  width: 300px;
  margin-bottom: 10px;
`

export const LabelContainer = styled.div`
  display: flex;
  width: 300px;
  margin-bottom: 30px;
  justify-content: space-between;

  & > div {
    padding: 3px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`

export const CaptureButton = styled.button`
  width: 165px;
  height: 60px;
  background-color: #fff3e9;
  font-size: 17px;
  font-weight: normal;
  color: #ff9232;
`

export const NextButton = styled.button`
  width: 165px;
  height: 60px;
  background-color: #ff9232;
  font-size: 17px;
  font-weight: normal;
  color: #ffffff;
`
