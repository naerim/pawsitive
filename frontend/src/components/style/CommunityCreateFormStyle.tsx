import styled from 'styled-components'

export const Container = styled.div`
  margin: 3px 15px 10px;
`

// 상단바
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 10px 0px;
`
export const CloseButton = styled.button`
  background-color: white;
  margin-top: 2px;

  .img {
    width: 25px;
  }
`

export const H1 = styled.h1`
  font-weight: bolder;
  font-size: 18px;
`

export const SubmitButton = styled.button`
  background-color: white;
  color: #fd974e;
  font-weight: bolder;
  font-size: 18px;
  padding-right: 5px;
`

// 이미지
export const ImgContainer = styled.div`
  background-color: antiquewhite;
  display: flex;
  padding: 20px 0px;
`

export const ImgLabel = styled.label`
  border-radius: 5px;
`

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #c8c8c8;
  border-radius: 3px;
  width: 70px;
  height: 70px;

  .img {
    width: 18px;
  }

  .p {
    font-size: 14px;
    margin-bottom: 2px;
  }
`

export const ImageInput = styled.input`
  opacity: 0;
  width: 0px;
  height: 0px;
`
export const ImagePreview = styled.div`
  width: 70px;
  height: 70px;
  //border: 1px solid gainsboro;
  //border-radius: 3px;

  .img {
    width: 70px;
    height: 70px;
  }
`

export const DivLine = styled.div`
  border-bottom: 1px solid #c8c8c8;
  margin: 15px 0px;
`

export const Tag = styled.div`
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
export const Map = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid gray;
  border-radius: 40px;
`

export const CheckBox = styled.input`
  display: none;

  &:checked + .label::after {
    display: block; /* Show after checkbox is checked */
  }
`

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  text-align: right;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #c8c8c8;
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none;
    border-color: rgba(100, 100, 100, 0.5);
    box-shadow: #c8c8c8;
  }

  option {
    color: #888;
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
  border: 0px;
  outline: none;
`
