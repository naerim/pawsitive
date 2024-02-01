import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  padding: 13px 18px;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background: #f2f3f5;
  width: 86%;
  height: 190px;
  margin: 0 auto;
  border-radius: 12px;
  border: 1px solid #ebebeb;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);
`

export const Title = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #000000;
  margin-left: 10px;
`

export const SubTitle = styled.div`
  font-size: 10px;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: #4f4f4f;
`

export const DogBone = styled.img`
  width: 27%;
`

export const Button = styled.div`
  display: flex;
  padding: 4% 13%;
  border-radius: 6px;
  font-weight: 600;
  align-items: center;
  background: #ffe3cb;
  color: #ff9232;
  font-size: 11px;
`
