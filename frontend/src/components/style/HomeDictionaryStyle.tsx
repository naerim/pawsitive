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
  width: 80px;
  height: 135px;
  margin: 3px 0 6px;
  padding: 10px;

  img {
    width: 62px;
    height: 62px;
    padding: 6px;
    margin: 5px 0 10px;
  }
`

export const ItemTitle = styled.div`
  font-weight: 450;
  font-size: 15px;
`
