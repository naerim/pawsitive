import { ChildrenType, VisibleType } from '@src/types/propsType.ts'

export type ProgressBarType = {
  currentStage: number
}

export type CirclePropsType = {
  $active: boolean
}

export type ClosePossibleCardType = ChildrenType & VisibleType
