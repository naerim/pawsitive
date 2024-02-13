import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: 100vh;
`

export const WebcamContainer = styled.div`
  margin-top: 40px;
  height: 340px;

  canvas {
    border-radius: 100%;
  }
`

export const FixWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
`

export const BarContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 300px;
  height: 250px;
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

  &:disabled {
    background-color: #bebebe;
  }
`

export const DoneWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const SmallDesc = styled.div`
  color: #a9a9a9;
  margin-top: 10px;
`

export const BackButtonWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;

  img {
    width: 10px;
  }
`

export const PrevWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100vh;
  align-items: center;
`

export const PrevImg = styled.img`
  width: 180px;
  height: 180px;
  margin-top: 50%;
`

export const PrevTitle = styled.div`
  font-weight: 500;
  font-size: 1.3em;
  margin-top: 30px;
`

export const PrevDesc = styled.div`
  color: #848484;
  margin-top: 20px;
  font-size: 1em;
`

export const StartButton = styled.button`
  height: 40px;
  color: #fff;
  margin-top: auto;
  margin-bottom: 40px;
  width: 100%;
  background-color: #ff9232;
`
