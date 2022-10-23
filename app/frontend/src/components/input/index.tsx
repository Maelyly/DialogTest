import { InputHTMLAttributes } from 'react';
import './input.css';

interface InterfaceInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input = ({ name, label, ...rest }: InterfaceInput) => {
  return (
    <div className='input-wrapper'>
      <input id={name} {...rest} placeholder={label} className='search'></input>
    </div>
  );
};
