import React from 'react'

export type ChildrenType = {
  children: React.ReactNode
}

export type ClickType = {
  onClick: () => void
}

export type FormClickType = {
  onClick: (e: React.FormEvent<HTMLFormElement>) => void
}
