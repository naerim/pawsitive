import styled from 'styled-components'

export const State = styled.div`
  margin-top: 40px;
  color: #ff9232;
  font-weight: 500;
`

export const Title = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  margin: 10px 0 40px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #cbcbcb;

  input {
    border: none;
    outline: none;
  }

  select {
    border: none;
    outline: none;
  }
`

export const BottomButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`

export const RefuseButton = styled.button`
  height: 40px;
  background-color: #bebebe;
  color: #fff;
`

export const SubmitButton = styled.button`
  height: 40px;
  background-color: #ff9232;
  color: #fff;
  margin-top: 20px;
`
