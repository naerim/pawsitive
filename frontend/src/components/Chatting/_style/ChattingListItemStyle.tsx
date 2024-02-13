import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 10px 10px 10px 0;
  margin-bottom: 20px;
  cursor: pointer;
  align-items: center;
`

export const ImgWrap = styled.div`
  display: flex;
  height: 46px;

  img {
    width: 36px;
    height: 36px;
    padding: 3px;
    background-color: #fff3e9;
    border-radius: 100%;

    &:last-child {
      transform: translate(-10px, 10px);
    }
  }
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Name = styled.div`
  font-weight: 500;
`

export const LastMsg = styled.div`
  color: #7b7b7b;
  font-size: 0.9em;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 210px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
