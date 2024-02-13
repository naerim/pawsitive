import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  height: 100vh;
  z-index: 100;
  background-color: #282c34;
  width: 390px;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
`

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10%;
`

export const VideoWrap = styled.div`
  height: 100%;
  padding: 20px;
`

export const PrevContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  width: 390px;
`

export const PrevTitle = styled.div`
  color: #fff;
  font-weight: 100;
  line-height: 1.2;
`

export const PrevName = styled.div`
  color: #fff;
  font-size: 1.8em;
  margin-bottom: 20px;
`

export const PrevCallButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: #4263eb;
  color: #fff;
  margin-right: 10px;
`

export const PrevSubTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #fff;
  font-weight: 100;
  line-height: 1.3;
  width: 80%;
  margin-top: 40%;
  font-size: 0.8em;
  margin-bottom: 20px;
`

export const PrevCancelButton = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 20px;
  background-color: red;
  color: #fff;
`

export const DoneButton = styled.button`
  background-color: red;
  color: #fff;
  bottom: 10px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`
