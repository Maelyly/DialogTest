import { FC, InputHTMLAttributes } from 'react';
import './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className='input-wrapper'>
      <input id={name} {...rest} placeholder={label} className='search'></input>
    </div>
  );
};
