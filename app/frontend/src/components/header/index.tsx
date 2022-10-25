import { IHeader } from '../../@types/header';
import { Input } from '../input';
import './header.css';

export const Header = ({ onChange }: IHeader) => {
  return (
    <div className='header'>
      <div>
        <p className='title'>MySocial</p>
      </div>
      <div>
        <Input
          name='name'
          label=' search'
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            onChange(e.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
};
