import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px auto 0 auto;
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

  background: #ffffff;
  border-radius: 10px;
  width: 158px;
  padding: 9px 0;
  border: 1px solid #ebebeb;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 140px;
    height: 140px;
    border-radius: 8px;
    object-fit: cover;
    margin: 0 auto;
  }
`

export const ItemTitle = styled.div`
  padding-left: 9px;
  color: #000000;
  font-weight: 500;
  font-size: 1em;
  line-height: 1em;
  margin-top: 10px;
`
export const ItemSubTitle = styled.div`
  padding-left: 9px;
  color: #818181;
  font-weight: 400;
  font-size: 0.9em;
  line-height: 1.2;
  margin-top: 3px;
`

export const Button = styled.button`
  margin-top: 20px;
  background-color: #f7f7f7;
  color: #7b7b7b;
  padding: 11px;
`
