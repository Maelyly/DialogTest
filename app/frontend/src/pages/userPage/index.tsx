import { useParams } from 'react-router-dom';
import { IFriends } from '../../@types/friends';
import { Header } from '../../components/header';
import { ListCard } from '../../components/listCard';
import { Perfil } from '../../components/perfil';
import './userPage.css';

export const UserPage = () => {
  var value = '';
  const { id } = useParams();
  const searchFriend = () => {
    var test: IFriends = {
      id: 'kd2d',
      name: 'Teste',
      age: 22,
      eyeColor: 'black',
      email: 'wdqwd',
      company: 'jnfwed',
      image: '',
      friends: [],
    };
    return test;
  };
  const { friends, name, age, email, image } = searchFriend();
  console.log(id);
  var listCard = friends;
  return (
    <div className='container'>
      <Header value={value} />
      <Perfil name={name} age={age} email={email} image={image} />
      <div className='textUserPage'>Friends:</div>
      <div>
        <ListCard listcard={listCard} />
      </div>
    </div>
  );
};
