import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90%;
  margin: 0 auto 20px auto;
  border-radius: 6px;
`

export const Item = styled.div<{ $select: boolean }>`
  width: fit-content;
  display: flex;
  height: 28px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
  padding: 6px 8px;
  border-radius: 28px;
  margin-right: 5px;
  margin-bottom: 5px;
  border: 1px solid ${props => (props.$select ? '#ffffff' : '#C3C3C3')};
  font-weight: 300;
  color: ${props => (props.$select ? '#ffffff' : '#C3C3C3')};
  background-color: ${props => (props.$select ? '#FF9232' : 'transparent')};
`

export const SexNeuteredContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`

export const Title = styled.div`
  font-weight: 450;
  margin-bottom: 5px;
`

export const KindTitle = styled.div``

export const SexNeuteredItemList = styled.div`
  display: flex;
`

export const KindItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const KindContainer = styled.div`
  width: 100%;
  padding: 0 3%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`
