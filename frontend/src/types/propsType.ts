import React from 'react'

export type ChildrenType = {
  children: React.ReactNode
}

export type VisibleType = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}
