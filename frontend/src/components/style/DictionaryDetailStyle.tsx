import styled from 'styled-components'

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  background-color: #ffe7d3;
  height: 450px;
`

export const BackButtonWrap = styled.div`
  cursor: pointer;
  margin: 50px 35px 0;

  img {
    width: 10px;
    height: 16px;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 230px;
    height: 230px;
  }
`

export const Container = styled.div`
  width: 95%;
  margin: 30px auto;
  padding: 20px;
`

export const wrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Category = styled.div`
  color: #ff9232;
  font-weight: 500;
  font-size: 0.9em;
`

export const Title = styled.div`
  color: #000;
  font-size: 1.3em;
  font-weight: 500;
  line-height: 1.5;
  margin: 3px 0;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`

export const Remarks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  p {
    font-weight: 550;
    font-size: 15px;
  }
`

export const Symptom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  p {
    font-weight: 550;
    font-size: 15px;
  }
`

export const Prevent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  p {
    font-weight: 550;
    font-size: 15px;
  }
`

export const DescItem = styled.div``

export const SymptomItem = styled.div``

export const PreventItem = styled.div``
