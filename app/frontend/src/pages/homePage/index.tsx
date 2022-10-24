import { Header } from '../../components/header';
import { ListCard } from '../../components/listCard';
import './homePage.css';
import { IFriends } from '../../@types/friends';

export const HomePage = () => {
  var value = '';
  var test: IFriends = {
    id: 'kd2d',
    name: 'Teste',
    age: 22,
    eyeColor: 'black',
    email: 'wdqwd',
    company: 'jnfwed',
    image: require('../../image/image.png'),
    friends: [],
  };
  var test2: IFriends = {
    id: 'kd5d',
    name: 'Teste2',
    age: 32,
    eyeColor: 'yellow',
    email: 'wd',
    company: 'jed',
    image: '',
    friends: [],
  };
  var test3: IFriends = {
    id: 'kd6d',
    name: 'Teste3',
    age: 20,
    eyeColor: 'red',
    email: 'wffff',
    company: 'jfdwqfed',
    image: '',
    friends: [],
  };
  var listCard = [test, test2, test3];
  return (
    <div className='container'>
      <Header value={value} />
      <ListCard listcard={listCard} />
    </div>
  );
};
