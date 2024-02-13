import styled from 'styled-components'

export const Container = styled.div`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 390px;
  height: 60px;
  z-index: 100;
  background-color: #fff;
  padding-left: 15px;
`

export const HeaderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  margin: 0 auto;
  font-weight: 500;
  font-size: 1.1em;
`

export const GoBackButton = styled.img`
  width: 36px;
  height: 28px;
  margin: auto;
  padding: 4px 7px 5px 5px;
`

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const StepImg = styled.img`
  width: 20%;
`

export const StepTitle = styled.div`
  color: #ff9232;
  font-size: 14px;
  font-weight: 700;
  line-height: 112.28%;
  margin: 2.5%;
`

export const StepSubTitle = styled.div`
  color: #ff9232;
  text-align: center;
  font-size: 13px;
  font-weight: 200;
  line-height: 112.28%;
  margin: 2.5%;
`

export const ChevronDownImg = styled.img`
  width: 11.173px;
  transform: rotate(90deg);
  margin: 5%;
`
