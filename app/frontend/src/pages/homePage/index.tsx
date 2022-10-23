import React from 'react';
import { Header } from '../../components/header';
import { ListCard } from '../../components/listCard';
import './homePage.css';

export const HomePage = React.forwardRef(() => {
  var value = '';
  return (
    <div className='container'>
      <Header value={value} />
      <ListCard />
    </div>
  );
});
