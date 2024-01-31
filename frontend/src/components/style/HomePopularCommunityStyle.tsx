import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 86%;
  margin: 29px auto 0 auto;
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
  flex-direction: column;
  margin-top: 24px;
`

export const Item = styled.div`
  display: flex;
  margin: 6px 0;
  align-items: center;

  img {
    background-color: #fff3e9;
    border-radius: 6px;
    width: 62px;
    height: 62px;
    padding: 6px;
    margin-right: 19px;
  }
`

export const ItemTitle = styled.div`
  margin-bottom: 10px;
  color: black;
`

export const ItemDesc = styled.div`
  width: 250px;
  font-size: 12px;
  color: #7b7b7b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
