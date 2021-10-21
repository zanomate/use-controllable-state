import { Dispatch, SetStateAction, useState } from 'react'

export const useControllableState = <T>(
  defaultValue: T,
  value: T,
  onChange: (newValue: T) => void,
): [
  T | undefined,
  Dispatch<SetStateAction<T | undefined>>
] => {
  const isValueControlled = value !== undefined
  const [internalValue, setInternalValue] = useState<T>(defaultValue)

  const stateValue = isValueControlled ? value : internalValue

  const setStateValue = (newStateValue: T) => {
    if (!isValueControlled) {
      setInternalValue(newStateValue)
    }
    onChange(newStateValue)
  }

  return [stateValue, setStateValue]
}
