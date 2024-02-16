import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FilterContainer = styled.div`
  width: 90%;
`

export const ShowFilterButton = styled.div`
  display: flex;
  justify-content: right;
  height: 19px;
  margin: 0 6px 6px 6px;
  line-height: 19px;
  font-size: 0.9em;
`

export const ShowFilterButtonImg = styled.img<{ $isShow: boolean }>`
  transform: ${props => (props.$isShow ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
  margin-left: 6px;
  margin-bottom: 3px;
`

export const DogListContainerStyle = styled.div`
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

export const NoDataContainer = styled.div`
  width: 94%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff3e9;
  border-radius: 10px;
  padding: 5%;
  margin: 3% 0;
`

export const NoDataImg = styled.img`
  width: 20%;
  margin-bottom: 3%;
`

export const NoDataText = styled.div`
  text-align: center;
  color: #4f4f4f;
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 3%;
`
