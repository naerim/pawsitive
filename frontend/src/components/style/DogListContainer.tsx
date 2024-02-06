import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto 70px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
  gap: 3px;
  padding: 3px 0;
  height: fit-content;
`

export const FakeDiv = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  border: #ebebeb solid 1px;
  border-radius: 11px;
  padding: 2%;
  margin: 1% 4%;
  position: relative;
  align-items: center;
  height: 244px;
  justify-content: center;
`
