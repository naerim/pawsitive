import styled from 'styled-components'

export const Container = styled.div<{ $state: string }>`
  display: flex;
  cursor: pointer;
  padding: 10px 21px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.$state === '' ? '#fecc3f' : '#FF9232')};
  width: 90%;
  margin: 0 auto 2% auto;
  border-radius: 12px;
  color: #fff;
  border: 1px solid #ebebeb;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);
`
export const Title = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  line-height: normal;
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
