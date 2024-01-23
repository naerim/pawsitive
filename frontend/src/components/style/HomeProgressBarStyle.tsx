import styled from 'styled-components'
import { CirclePropsType } from '@src/types/components/HomeType'

export const Container = styled.div`
  display: flex;
  padding: 20px;
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`

export const Circle = styled.div<CirclePropsType>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({ $active }) => ($active ? '#FECC3F' : '#f2f2f2')};
`

export const Text = styled.div``
