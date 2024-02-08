import styled from 'styled-components'

export const Container = styled.div`
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

  img {
    width: 16px;
  }

  p {
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
