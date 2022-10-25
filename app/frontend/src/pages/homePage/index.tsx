import { Header } from '../../components/header';
import { ListCard } from '../../components/listCard';
import { useSearch } from '../../service/friends.service';
import './homePage.css';
import { useState } from 'react';

export const HomePage = () => {
  const [value, setValue] = useState('');

  var listFriends = useSearch(value);
  const Filter = (val: string) => {
    setValue(val);
    listFriends = useSearch(value);
  };
  return (
    <div className='container'>
      <Header onChange={Filter} />
      <ListCard listcard={listFriends} />
    </div>
  );
};
