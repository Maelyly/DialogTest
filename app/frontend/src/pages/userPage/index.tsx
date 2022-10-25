import { useParams } from 'react-router-dom';
import { IFriends } from '../../@types/friends';
import { Header } from '../../components/header';
import { ListCard } from '../../components/listCard';
import { Perfil } from '../../components/perfil';
import { useSearch } from '../../service/friends.service';
import './userPage.css';
import { useState } from 'react';

export const UserPage = () => {
  const { id } = useParams();

  const searchFriend = () => {
    const GetList = () => {
      var _id = '';
      if (id !== undefined) {
        console.log(id);
        _id = id;
      }

      return useSearch(_id);
    };
    var friend = GetList();
    var temp: IFriends[] = [];
    if (friend) {
      temp = friend;
    }

    return temp[0];
  };

  var r: IFriends = {
    name: '',
    age: 0,
    email: '',
    company: '',
    eyeColor: '',
    friends: [],
    id: '',
    image: '',
  };

  var a = searchFriend();

  if (a !== undefined) {
    r = a;
  }

  const { name, friends, age, email, image } = r;

  var listCard = friends;

  const [value, setValue] = useState('');

  const Filter = (val: string) => {
    setValue(val);
    var listFriends = useSearch(value);
    var listFilter = [];
    if (listFriends) {
      for (var a = 0; a < listFriends.length; a++) {
        if (friends.includes(listFriends[a])) {
          listFilter.push(a);
        }
      }
    }
  };
  return (
    <div className='container'>
      <Header onChange={Filter} />
      <Perfil name={name} age={age} email={email} image={image} />
      <div className='textUserPage'>Friends:</div>
      <div>
        <ListCard listcard={listCard} />
      </div>
    </div>
  );
};
