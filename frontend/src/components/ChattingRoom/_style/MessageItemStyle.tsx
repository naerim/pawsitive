import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Wrap = styled.div<{ $me: boolean }>`
  display: flex;
  margin-left: ${props => props.$me && 'auto'};
  flex-direction: ${props => props.$me && 'row-reverse'};
  max-width: 90%;
  margin-bottom: 14px;

  span {
    font-size: 0.7em;
    margin-top: auto;
    padding-bottom: 2px;
    margin-left: ${props => !props.$me && '4px'};
    margin-right: ${props => props.$me && '4px'};
    color: #555;
  }
`

export const MessageBox = styled.div<{ $me: boolean }>`
  display: flex;
  padding: 6px 10px;
  border-radius: 10px;

  background-color: ${props => (props.$me ? '#FF9232' : '#F2F3F6')};
  color: ${props => (props.$me ? '#fff' : '#000')};
  justify-content: center;
  word-break: break-word;
  line-height: 1.2;
`
