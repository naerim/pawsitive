import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const MessageBox = styled.div<{ $me: boolean }>`
  display: flex;
  padding: 6px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${props => (props.$me ? '#FF9232' : '#F2F3F6')};
  color: ${props => (props.$me ? '#fff' : '#000')};
  justify-content: center;
  margin-left: ${props => props.$me && 'auto'};
  max-width: 85%;
  word-break: break-word;
`
