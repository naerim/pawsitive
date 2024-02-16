import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 6px;

  img {
    width: 70px;
    height: 70px;
    background-color: #fff3e9;
    border-radius: 6px;
    object-fit: cover;
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const Category = styled.div`
  color: #ff9232;
  font-weight: 500;
  font-size: 0.7em;
`

export const Title = styled.div`
  color: #000;
  font-size: 1.1em;
  line-height: 1.5;
  margin: 2px 0;
  text-overflow: ellipsis;
  overflow-x: hidden;
  width: 85%;
  white-space: nowrap;
`

export const Desc = styled.div`
  color: #7b7b7b;
  font-size: 0.9em;
  line-height: 1.1;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
