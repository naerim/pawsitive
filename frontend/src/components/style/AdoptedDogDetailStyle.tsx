import styled from 'styled-components'

export const Flip = styled.div`
  width: 56%;
  margin-right: 13px;
`
export const Container = styled.div`
  width: 100%;
  height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 5px 0 0;
  // z축에 깊이 주기 위해
  perspective: 1100px;
`

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  // 입체감 주기 위해
  transition: 0.2s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`
export const FrontCard = styled.div`
  width: 100%;
  height: 225px;
  position: absolute;
  padding: 11px;
  margin: 2px;
  border-radius: 9px;
  background: #ff9232;
  backface-visibility: hidden;
`
export const BackCard = styled.div`
  width: 100%;
  height: 225px;
  margin: 2px 2px 2px 7px;
  // 앞, 뒤 카드 같은 위치에 둠
  position: absolute;
  padding: 11px;
  border-radius: 9px;
  background: #ff9232;
  //  앞면에 반전된 뒷 면의 글들을 투영시키지 않기 위해
  backface-visibility: hidden;
  // 뒤집힌 상태로 둠
  transform: rotateY(180deg);
`

export const DogImage = styled.img`
  width: 100%;
  height: 166px;
  border-radius: 7px;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
`

export const TogetherContainer = styled.div`
  display: flex;
  align-items: end;
`

export const DogName = styled.div`
  font-size: 14px;
  font-weight: 700;
  align-items: center;
  color: #fff;
`

export const Together = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #fff;
`

export const Day = styled.div`
  color: #fff;
  font-size: 19px;
  font-weight: 500;
  line-height: normal;
`

export const Text = styled.div`
  margin: 10px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`

export const ModButton = styled.button`
  margin: 5px 10px 10px 10px;
  padding: 2px 5px;
  color: #f59021;
  font-weight: 600;
  background-color: white;
`
