import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 29px auto 0 auto;
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  width: 158px;
  padding: 9px 0;

  img {
    width: 140px;
    height: 140px;
    border-radius: 8px;
    margin-bottom: 10px;
    object-fit: cover;
  }
`

export const ItemTitle = styled.div`
  color: #000000;
  font-weight: 500;
  font-size: 1em;
  line-height: 1em;
`
export const ItemSubTitle = styled.div`
  color: #818181;
  font-weight: 400;
  font-size: 0.9em;
  line-height: 1.2;
  margin-top: 3px;
`
