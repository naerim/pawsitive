import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  width: 90%;
  margin: 0 auto 30px;
  padding: 28px;
  border: 1px solid #ebebeb;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);
`

export const SubTitle = styled.div`
  font-weight: 600;
  color: #f57301;
  font-size: 0.9em;
  margin-bottom: 12px;
`

export const Title = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 1.2em;
`

export const Image = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  margin: 20px auto;
  border-radius: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: #fff;
  background-color: #fecc3f;
  font-weight: 500;
  margin-top: 10px;
`
