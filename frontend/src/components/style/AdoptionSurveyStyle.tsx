import styled from 'styled-components'

interface ButtonProps {
  active: boolean
}

export const Container = styled.div`
  margin: 20px 30px;
`

export const SectionContainer = styled.div`
  margin: 100px 0;
  width: 100%;
  height: auto;
  text-align: center;
`

export const Image = styled.img`
  width: 182px;
  height: 182px;
`

export const Title = styled.h1`
  margin: 0 0 10px 0;
  font-weight: 450;
  font-size: 20px;
  letter-spacing: 0.5px;
  line-height: 1.2;
`
export const Section = styled.h1`
  font-weight: 500;
  font-size: 18px;
`
export const Content = styled.p`
  margin: 10px 0 30px 0;
  font-size: 13px;
  color: rgba(128, 128, 128, 0.64);
  //line-height: 1;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  font-size: 15px;
  color: rgba(128, 128, 128, 0.64);
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  //line-height: 1;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #c8c8c8;
    font-size: 15px;
    padding: 12px;
  }
`

export const CheckBoxDiv = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
`

export const CheckBoxLabel = styled.div`
  display: flex;
  align-items: center;
  margin: -5px 0;
`

export const CheckBoxOk = styled.div`
  margin: 1px 0 0 5px;
`

export const Input = styled.input`
  width: 328px;
  height: 50px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #c8c8c8;
    font-size: 15px;
    padding: 12px;
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const Button = styled.button<ButtonProps>`
  background-color: ${({ active }) => (active ? '#ff9232' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : 'rgba(128,128,128,0.64)')};
  padding: 10px;
  margin: 5px 3px;
  width: 100%;
  height: 55px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`

export const Question = styled.h1`
  font-weight: bolder;
  font-size: 16px;
`

export const Explain = styled.div`
    width: auto;
    height: 200px;
    margin-bottom: 2px;
    font-size: 15px;
    border: 1px solid #c8c8c8;
    der-ra ius:;
`
