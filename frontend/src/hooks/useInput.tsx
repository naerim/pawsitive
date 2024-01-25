import { ChangeEvent, useState } from 'react'
import { UseInputType } from '../types/hooks/hookType'

export function useInput({ initialValue }: UseInputType) {
  const [inputValue, setInputValue] = useState(initialValue)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setInputValue(value)
  }

  const resetInputValue = () => {
    setInputValue('')
  }

  return [inputValue, handleChange, resetInputValue] as const
}
