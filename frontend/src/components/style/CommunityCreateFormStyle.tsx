import styled from 'styled-components'

export const Container = styled.div`
  margin: 3px 15px 10px;

  form {
    margin-top: 40px;
  }
`

// 상단바
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
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
    width: 20px;
    height: 20px;
  }
`

export const H1 = styled.h1`
  font-weight: 500;
  font-size: 1em;
`

export const SubmitButton = styled.button`
  background-color: white;
  color: #fd974e;
  font-weight: 500;
  font-size: 0.9em;
  padding-right: 5px;
  outline: none;

  &:focus,
  &:active {
    outline: none;
  }
`

// 이미지
export const ImgContainer = styled.div`
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  padding: 20px 0;
`

export const ImgLabel = styled.label`
  border-radius: 5px;
`

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  width: 70px;
  height: 70px;

  .img {
    width: 16px;
  }

  .p {
    font-size: 0.6em;
    margin-top: 6px;
    color: #878787;
  }
`

export const ImageInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`
export const ImagePreview = styled.div`
  width: 70px;
  height: 70px;

  .img {
    width: 70px;
    height: 70px;
  }
`

export const Delete = styled.button`
  margin-left: -15px;
  z-index: 3;
  width: 15px;
  height: 17px;
  background-color: transparent;
`

export const DivLine = styled.div`
  border-bottom: 1px solid #eaeaea;
  margin: 15px 0;
`

export const Tag = styled.div`
  display: flex;
  align-items: center;

  .label {
    position: relative;
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 1px solid #eaeaea;
    margin-right: 10px;
    cursor: pointer;
  }

  .label::after {
    content: '✔';
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
  color: #d2d2d2;
  margin-right: 5px;
  font-size: 0.9em;

  .img {
    width: 25px;
    height: 30px;
  }
`

export const CheckBox = styled.input`
  display: none;

  &:checked + .label::after {
    display: block; /* Show after checkbox is checked */
  }
`

export const Select = styled.select`
  width: 80%;
  text-align: right;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: #fff;
  color: #878787;
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #ffffff;
    box-shadow: #ffffff;
  }

  option {
    color: #888;
    font-size: 1em;
  }
`
export const ContentInput = styled.input`
  width: 200px;
  height: 30px;
  margin-bottom: 2px;
  font-size: 1em;
  border: none;
  outline: none;
  color: #000;
`

export const MapCloseButton = styled.div`
  color: #c8c8c8;
`

export const MapDiv = styled.div`
  width: auto;
  height: auto;
`
export const Map = styled.div`
  width: 100%;
  height: 300px;
`

export const MapContentInput = styled.input`
  width: 360px;
  height: 30px;
  margin-bottom: 2px;
  font-size: 0.9em;
  border: none;
  outline: none;
  color: #c8c8c8;

  &::placeholder {
    color: #c8c8c8;
  }
`
