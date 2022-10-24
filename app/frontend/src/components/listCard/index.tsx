import { IListCard } from '../../@types/listCard';
import { Card } from '../card';
import './listCard.css';

export const ListCard = ({ listcard }: IListCard) => {
  return (
    <div className='card'>
      {listcard?.map((friends) => {
        return (
          <div className='cardLine' key={friends?.id}>
            <Card
              id={friends.id}
              name={friends?.name}
              age={friends?.age}
              eyeColor={friends?.eyeColor}
              company={friends?.company}
              email={friends?.email}
              image={friends?.image}
            ></Card>
          </div>
        );
      })}
    </div>
  );
};
