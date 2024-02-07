import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 29px auto 0 auto;
  border-top: 1px solid #e8e8e8;
`

export const SubTitle = styled.div`
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
  flex-direction: column;
  margin-top: 18px;
`

export const Item = styled.div`
  display: flex;
  margin: 6px 0;
  align-items: center;
  line-height: 1.1;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #ebebeb;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);

  img {
    background-color: #fff3e9;
    border-radius: 6px;
    width: 62px;
    height: 62px;
    margin-right: 19px;
    object-fit: cover;
  }
`

export const ItemTitle = styled.div`
  width: 240px;
  margin-bottom: 10px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1em;
`

export const ItemDesc = styled.div`
  width: 240px;
  font-size: 0.9em;
  color: #7b7b7b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
