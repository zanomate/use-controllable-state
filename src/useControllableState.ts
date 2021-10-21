import { Dispatch, SetStateAction, useState } from 'react'

const useControllableState = <T>(
  defaultValue: T | undefined,
  value: T | undefined,
  onChange: ((newValue: T | undefined) => any) | undefined,
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

export default useControllableState
