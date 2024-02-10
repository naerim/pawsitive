import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 90%;
  margin: 0 auto;
`

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0;
`
export const CloseButton = styled.div`
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`

export const Title = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  margin: 40px 0;
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

export const SubmitButton = styled.button`
  margin-top: auto;
  height: 40px;
  background-color: #ff9232;
  color: #fff;
`
