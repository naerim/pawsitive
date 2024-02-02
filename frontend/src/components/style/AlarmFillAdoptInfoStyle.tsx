import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 90%;
  padding: 20px 0;
  border-radius: 10px;
  margin: 0 auto 20px auto;
  border: 1px solid #ebebeb;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  cursor: pointer;
`
export const SubTitle = styled.div`
  width: 100%;
  text-align: left;
  color: #f57301;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-left: 20%;
  margin-bottom: 3%;
`

export const Title = styled.div`
  font-size: 18px;
  width: 100%;
  text-align: left;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: #000000;
  margin-left: 20%;
  margin-bottom: 1%;
`

export const DogHouse = styled.img`
  width: 110px;
  height: 110px;
`

export const Button = styled.div`
  width: 80%;
  height: 10%;
  background: none;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-content: center;
  color: #ffffff;
  padding: 4%;
  border-radius: 6px;
  background: #ff9232;
  font-size: 13px;
`
