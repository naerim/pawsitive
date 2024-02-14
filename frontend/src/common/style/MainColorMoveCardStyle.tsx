import styled from 'styled-components'

interface ContainerProps {
  backgroundColor?: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  cursor: pointer;
  padding: 16px 21px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.backgroundColor};
  width: 90%;
  margin: 0 auto 2% auto;
  border-radius: 12px;
  color: #fff;
  border: 1px solid #ebebeb;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);
`
export const Title = styled.div`
  font-size: 1.1em;
  margin-bottom: 6px;
  font-weight: 500;
  line-height: normal;
`

export const SubTitle = styled.div`
  font-size: 0.9em;
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
