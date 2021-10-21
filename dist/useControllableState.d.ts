import { Dispatch, SetStateAction } from 'react';
declare const useControllableState: <T>(defaultValue: T, value: T, onChange: (newValue: T) => any) => [T, Dispatch<SetStateAction<T>>];
export default useControllableState;
