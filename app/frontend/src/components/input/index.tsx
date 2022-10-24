import { IInput } from '../../@types/input';
import './input.css';

export const Input = ({ name, label, ...rest }: IInput) => {
  return (
    <div className='input-wrapper'>
      <input id={name} {...rest} placeholder={label} className='search'></input>
    </div>
  );
};
