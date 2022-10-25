import { Header } from '../../components/header';
import { ListCard } from '../../components/listCard';
import { useSearch } from '../../service/friends.service';
import './homePage.css';

export const HomePage = () => {
  var value = '';

  var listFriends = useSearch('');

  return (
    <div className='container'>
      <Header value={value} />
      <ListCard listcard={listFriends} />
    </div>
  );
};
