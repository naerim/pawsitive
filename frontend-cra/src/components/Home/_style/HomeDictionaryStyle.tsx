import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 29px auto 0;
  border-top: 1px solid #e8e8e8;
`

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 1em;
  color: #7b7b7b;
  margin-top: 21px;
`

export const Title = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 1.2em;
`
export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 20px;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 11px;
  padding: 18px;
  align-items: center;
  border: 1px solid #ebebeb;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 62px;
    height: 62px;
    margin-top: 10px;
  }
`

export const ItemTitle = styled.div`
  font-weight: 500;
  font-size: 1.1em;
`

export const ItemSubTitle = styled.div`
  font-size: 0.8em;
  margin-top: 10px;
  or: #5f5f5;
`
