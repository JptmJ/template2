// import { num1, num2 } from './App';

export const num1 = [1, 2, 3];
export const num2 = [4, 5, 6];

export const num3 = [...num1, ...num2];

const Array = ['a', 'b', 'c'];
export const TypeList = Array.map((item) => <p>{item}</p>)