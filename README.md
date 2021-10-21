# use-controllable-state

![npm (scoped)](https://img.shields.io/npm/v/@zanomate/use-controllable-state?style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/@zanomate/use-controllable-state)
![npm peer dependency version (scoped)](https://img.shields.io/npm/dependency-version/@zanomate/use-controllable-state/peer/react)

A React custom hook to manage double controlled/uncontrolled behaviors.

Useful for creating custom Input components.

```js
const MyCustomInput = ({ defaultValue, value, onChange }) => {
  
  // This takes parameters passed from outside as props.
  const [state, setState] = useControllableState(
    defaultValue,
    value,
    onChange
  )
  
  const handleChange = (e) => {
    // Here I can transform the value back for the local state.
    onChange(e.target.value)
  }

  // Here I can add my custom behavior to the local state.
  return (
    <input
      defaultValue={defaultValue}
      value={value}
      onChange={handleChange}
    />
  )
}
```

## Install
Install via NPM:
```
npm i @zanomate/use-controllable-state
```
or Yarn:
```
yarn add @zanomate/use-controllable-state
```

## Usage
Import the `useControllableState` custom hook

```js
import useControllableState from '@zanomate/use-controllable-state'
```

Use inside your component; it takes 3 parameters:
- `defaultValue` use to initialize your local state when your component is used as "**uncontrolled**".
- `value` use to control your local state when your component is used as "**controlled**".
- `onChange` called each time the state is updated (for both "controlled" and "uncontrolled" behaviors).

```js
const [state, setState] = useControllableState(
  defaultValue,
  value,
  onChange
)
```

Returns an array with a state and its setter, as like the React `useState`.
