import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createElement, FC, useEffect, useState } from 'react'
import useControllableState from './useControllableState'

/** Reverts a string. */
const reverseString = str => (
  str.split('').reverse().join('')
)

/**
 * A custom input component that implement a double controlled/uncontrolled behavior with "useControllableState".
 * It reverts the user input using the "reverseString" method.
 */
const ReverseInput: FC<{ defaultValue?: string, value?: string, onChange?: (newValue: string) => void }> = props => {
  const { defaultValue, value, onChange } = props

  const [state, setState] = useControllableState<string>(defaultValue, value, onChange)

  const handleChange = e => {
    setState(reverseString(e.target.value))
  }

  return createElement('input', {
    value: reverseString(state),
    onChange: handleChange,
    'aria-label': 'test',
  })
}

/** A Test component that use the custom input ReverseInput in an "uncontrolled" way. */
const Uncontrolled: FC<{ onChange?: (newValue: string) => void }> = props => {
  const { onChange } = props
  return createElement(ReverseInput, { defaultValue: 'hello world', onChange })
}

/** A Test component that use the custom input ReverseInput in a "controlled" way. */
const Controlled: FC<{ onChange?: (newValue: string) => void }> = props => {
  const { onChange } = props
  const [externalState, setExternalState] = useState('hello world')
  useEffect(() => {
    onChange(externalState)
  }, [externalState])
  return createElement(ReverseInput, { value: externalState, onChange: setExternalState })
}

describe('useControllableValue', () => {
  it('works as uncontrolled', () => {
    const onChange = jest.fn()
    const utils = render(createElement(Uncontrolled, { onChange }))
    const input = utils.getByLabelText('test')
    // @ts-ignore
    expect(input.value).toEqual('dlrow olleh')

    userEvent.type(input, '!!!')
    expect(onChange).toBeCalledWith('!hello world')
    expect(onChange).toBeCalledWith('!!hello world')
    expect(onChange).toBeCalledWith('!!!hello world')
  })

  it('works as controlled', () => {
    const onChange = jest.fn()
    const utils = render(createElement(Controlled, { onChange }))
    const input = utils.getByLabelText('test')
    // @ts-ignore
    expect(input.value).toEqual('dlrow olleh')

    userEvent.type(input, '!!!')
    expect(onChange).toBeCalledWith('!hello world')
    expect(onChange).toBeCalledWith('!!hello world')
    expect(onChange).toBeCalledWith('!!!hello world')
  })
})
