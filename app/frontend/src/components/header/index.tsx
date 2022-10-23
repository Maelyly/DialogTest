import { Input } from '../input';
import './header.css';

interface InterfaceValue {
  value: string;
}
export const Header = ({ value }: InterfaceValue) => {
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
