import styled from 'styled-components'

export const Container = styled.div``
export const Section = styled.h1`
  font-weight: bolder;
  font-size: 18px;
`

export const QuestionDiv = styled.div``

export const Question = styled.h1`
  font-weight: bolder;
  font-size: 16px;
`

export const RadioWrap = styled.div``

export const Select = styled.select`
  width: 60%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid black;
  border-width: 0 0 1px;
  color: black;
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #ffffff;
    box-shadow: #ffffff;
  }

  option {
    //color: #888;
    color: black;
    font-size: 18px;
    //text-align: left;
    //border: 1px solid #ccc;
    //box-shadow: none;
  }
`

export const ContentInput = styled.input`
  width: 200px;
  height: 30px;
  margin-bottom: 2px;
  font-size: 15px;
  border: 1px solid black;
  border-width: 0 0 1px;
  outline: none;
  //color: #c8c8c8;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 10px 0px;
`
export const CloseButton = styled.button`
  background-color: white;
  margin-top: 2px;
  outline: none;

  &:focus,
  &:active {
    outline: none;
  }

  .img {
    width: 25px;
  }
`

export const SubmitButton = styled.button`
  background-color: white;
  color: #fd974e;
  font-weight: bolder;
  font-size: 18px;
  padding-right: 5px;
  outline: none;

  &:focus,
  &:active {
    outline: none;
  }
`

export const DivLine = styled.div`
  border-bottom: 1px solid #c8c8c8;
  margin: 15px 0px;
`

export const CheckBox = styled.input`
  display: none;

  &:checked + .label::after {
    display: block; /* Show after checkbox is checked */
  }
`

export const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;

  .label {
    position: relative;
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 2px solid #c8c8c8;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
  }

  .label::after {
    content: '✔';
    color: #c8c8c8;
    font-size: 17px;
    width: 22px;
    height: 22px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .checked::after {
    display: block; /* Show after checkbox is checked */
  }
`

export const Label = styled.label`
  border-radius: 5px;
  color: #c8c8c8;
  font-weight: 400;
  margin-right: 5px;

  .img {
    width: 25px;
    height: 30px;
  }
`

export const MapCloseButton = styled.div`
  color: #c8c8c8;
`

export const MapDiv = styled.div`
  width: auto;
  height: auto;
`
export const Map = styled.div`
  width: auto;
  height: 300px;
  border: 2px solid #c8c8c8;
  border-radius: 30px;
`

export const MapContentInput = styled.input`
  width: 360px;
  height: 30px;
  margin-bottom: 2px;
  font-size: 15px;
  border: 0px;
  outline: none;
  color: #c8c8c8;

  &::placeholder {
    color: #c8c8c8;
  }
`
