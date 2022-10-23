import React from 'react';
import { Header } from '../../components/header';
import { ListCard } from '../../components/listCard';
import { Perfil } from '../../components/perfil';
import './userPage.css';

export const UserPage = React.forwardRef(() => {
  var value = '';
  return (
    <div className='container'>
      <Header value={value} />
      <Perfil name='Foo' age={22} email='foo@gmail.com' />
      <div className='textUserPage'>Friends:</div>
      <div>
        <ListCard />
      </div>
    </div>
  );
});
