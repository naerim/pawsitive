import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: 100vh;
`

export const Wrap = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto 0 auto;
  flex-direction: column;
  height: 90%;
`

export const DoneButton = styled.div`
  display: flex;
  margin-top: auto;

  button {
    width: 100%;
    background-color: #ff9232;
    padding: 11px;
    color: #fff;
  }
`
export const Title = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 1.3em;
  line-height: 1.2;
  margin-top: 10px;
`

export const SubTitle = styled.div`
  text-align: center;
`
