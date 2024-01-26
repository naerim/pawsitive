import { ChangeEvent, useState } from 'react'
import { UseInputType } from '../types/hooks/hookType'

export function useInput({ initialValue }: UseInputType) {
  const [inputValue, setInputValue] = useState(initialValue)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.target
    setInputValue(value)
  }

  return [inputValue, handleChange] as const
}
