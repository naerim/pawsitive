import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  padding: 16px 21px;
  align-items: center;
  justify-content: space-between;
  background-color: #ff9232;
  width: 86%;
  margin: 0 auto;
  border-radius: 12px;
  color: #fff;
`
export const Title = styled.div`
  font-size: 15px;
  margin-bottom: 6px;
  font-weight: 500;
  line-height: normal;
`

export const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 300;
`

export const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;

  img {
    width: 8px;
    height: 12px;
    flex-shrink: 0;
  }
`
