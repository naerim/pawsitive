import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const MessageSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  padding: 140px 5% 0 5%;
  height: 90%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
    width: 0; /* Remove scrollbar space */
    height: 0;
    background: transparent; /* Optional: just make scrollbar invisible */
    -webkit-appearance: none;
  }
`
