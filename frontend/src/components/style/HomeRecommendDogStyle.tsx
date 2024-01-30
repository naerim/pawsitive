import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 29px 20px 0 20px;
  border-top: 1px solid #e8e8e8;
`

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #7b7b7b;
  margin-top: 21px;
`

export const Title = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 17px;
`
export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  border-radius: 11px;
  width: 170px;
  height: 240px;
  margin: 3px 0 6px;
  padding-bottom: 10px;

  img {
    width: 165px;
    height: 165px;
    border-radius: 8px;
    padding: 6px;
    margin-bottom: 10px;
  }
`

export const ItemTitle = styled.div`
  color: #000000;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`
export const ItemSubTitle = styled.div`
  color: #818181;
  font-weight: 200;
  font-size: 13px;
  line-height: 16px;
  margin-top: 3px;
`
