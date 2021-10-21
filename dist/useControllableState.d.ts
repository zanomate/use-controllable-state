import { Dispatch, SetStateAction } from 'react';
export declare const useControllableState: <T>(defaultValue: T, value: T, onChange: (newValue: T) => void) => [T, Dispatch<SetStateAction<T>>];
