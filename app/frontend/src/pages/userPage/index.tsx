import { useParams } from 'react-router-dom';
import { IFriends } from '../../@types/friends';
import { Header } from '../../components/header';
import { ListCard } from '../../components/listCard';
import { Perfil } from '../../components/perfil';
import { useSearch } from '../../service/friends.service';
import './userPage.css';

export const UserPage = () => {
  var value = '';
  const { id } = useParams();

  const searchFriend = () => {
    const GetList = () => {
      var _id = '';
      if (id !== undefined) {
        _id = id;
      }
      return useSearch('5f1d7f3e5dc58af42fc39242');
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
