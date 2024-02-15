import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 29px;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
`

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
`

export const Circle = styled.div`
  background-color: #d9d9d9;
  width: 40px;
  height: 40px;
  border-radius: 100%;
`

export const Right = styled.div`
  margin-left: 10px;
`

export const Title = styled.div`
  font-size: 1em;
`

export const Address = styled.div`
  color: #7f7f7f;
  margin-top: 6px;
  font-size: 0.9em;
`

export const ImageWrap = styled.div``

const StampAnimation = keyframes`
    0% {
        transform: scale(1);
        opacity: 0;
    }
    50% {
        transform: scale(10);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`

export const UnLikeImage = styled.img`
  width: 28px;
  height: 28px;
`

export const LikeImage = styled.img`
  width: 28px;
  height: 28px;
  animation: ${StampAnimation} 1s ease-in-out;
`
