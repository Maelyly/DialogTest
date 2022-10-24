import { IHeader } from '../../@types/header';
import { Input } from '../input';
import './header.css';

export const Header = ({ value }: IHeader) => {
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
            value = e.currentTarget.value;
          }}
        />
      </div>
    </div>
  );
};
