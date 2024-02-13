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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`
export const DogButton = styled.button`
  &:active,
  &:focus {
    outline: none;
  }
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 158px;
  padding: 9px 0;
  border: 1px solid #ebebeb;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);

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
  font-size: 1.1em;
  line-height: 1em;
`
export const ItemSubTitle = styled.div`
  color: #818181;
  font-weight: 400;
  font-size: 0.9em;
  line-height: 1.2;
  margin-top: 3px;
`
