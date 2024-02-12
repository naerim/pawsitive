import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  padding: 0 5%;
`

export const FilterContainer = styled.div`
  width: 100%;
`

export const ShowFilterButton = styled.div`
  display: flex;
  justify-content: right;
  height: 16px;
  margin: 0 6px 6px 6px;
`

export const ShowFilterButtonImg = styled.img<{ $isShow: boolean }>`
  transform: ${props => (props.$isShow ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
  margin-left: 6px;
`

export const DogListContainerStyle = styled.div`
  width: 100%;
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
