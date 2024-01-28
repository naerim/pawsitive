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

export type CommunityDummyDataType = {
  title: string
  latitude: number
  longitude: number
}[]

export type LocationType = { latitude: number; longitude: number }
