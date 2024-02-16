import styled from 'styled-components'

export const InputContainer = styled.div`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 70px 0 0;
`

export const Column = styled.div`
  display: flex;
  flex-direction: row;
`
export const Label = styled.label`
  font-size: 18px;
  margin: 0 0 9px 5px;
`

export const Input = styled.input`
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  width: 100%;
  height: 42px;
  margin: 5px 5px 10px 5px;
  padding: 15px;

  &:focus {
    outline: none;
    color: #f59021;
  }

  &::placeholder {
    color: #cbcbcb;
  }
`
export const InputNum = styled.input`
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  margin: 5px 10px 5px 5px;
  padding: 10px;
  width: 100px;
  height: 42px;

  &:focus {
    outline: none;
    color: #f59021;
  }

  &::placeholder {
    color: #a9a9a9;
  }
`

export const PlaceWord = styled.div`
  margin: 26px 0 0 0;
  font-size: 18px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

// 이미지
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 20px 0;
`

export const ImgLabel = styled.label``

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  width: 120px;
  height: 120px;

  .img {
    width: 35px;
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

export const Img = styled.img`
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  width: 120px;
  height: 120px;
`
