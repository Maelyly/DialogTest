import { Card } from '../card';
import './listCard.css';

export const ListCard = () => {
  return (
    <div className='card'>
      <div className='cardLine'>
        <Card
          name='Foo'
          age={22}
          eyeColor='Bar'
          company='test'
          email='foo@'
        ></Card>
      </div>
      <div className='cardLine'>
        <Card
          name='Foo'
          age={22}
          eyeColor='Bar'
          company='test'
          email='foo@'
        ></Card>
      </div>
    </div>
  );
};
