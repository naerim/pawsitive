import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff3e9;
  border-radius: 10px;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff9232;
  width: 41px;
  height: 41px;
  border-radius: 100%;

  .one {
    width: 24px;
    height: 24px;
  }

  .two {
    width: 31px;
    height: 31px;
  }
`
export const TopRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 83%;
`
export const PawsitiveInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;

  .title {
    color: #ff9232;
    font-size: 1.2em;
    font-weight: 600;
  }

  .stage {
    color: #582900;
    text-decoration: underline;
  }
`

export const UserStage = styled.div`
  font-size: 1em;

  b {
    font-weight: 500;
    margin-right: 2px;
  }
`
const progressAnimation = keyframes`
    0% {
        width: 0;
    }
`

export const Progress = styled.progress`
  width: 100%;
  height: 12px;
  appearance: none;
  margin: 18px 0 10px 0;

  &::-webkit-progress-bar {
    background-color: #fff;
    border-radius: 11px;
  }

  &::-webkit-progress-value {
    background-color: #ffa859;
    border-radius: 11px;
    animation: ${progressAnimation} 5s ease forwards;
  }
`

interface ProgressBarValueProps {
  value: number
}

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 12px;
  background-color: #fff;
  border-radius: 11px;
  overflow: hidden;
  margin: 18px 0 10px 0;
`

export const ProgressBarValue = styled.div<ProgressBarValueProps>`
  height: 100%;
  width: ${({ value }) => value}%;
  background-color: #ffa859;
  border-radius: 11px;
  animation: ${progressAnimation} 1.5s ease forwards;
`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.8em;

    .right {
        font-weight: 300;

`
