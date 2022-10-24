import { ICard } from '../../@types/card';
import './card.css';
import { Link } from 'react-router-dom';

export const Card = ({
  id,
  name,
  age,
  eyeColor,
  company,
  email,
  image,
}: ICard) => {
  var urlImage = image ? image : require('../../image/image.png');
  return (
    <Link
      to={`/userPage/${id}`}
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <div className='containerCard'>
        <img src={urlImage} alt='' className='image'></img>
        <div className='textCard'>
          <div className='textCard'>name: {name ? name : '--'}</div>

          <div className='textCard'>age: {age ? age : '--'}</div>

          <div className='textCard'>eyeColor: {eyeColor ? eyeColor : '--'}</div>

          <div className='textCard'>company: {company ? company : '--'}</div>

          <div className='textCard'>email: {email ? email : '--'}</div>
        </div>
      </div>
    </Link>
  );
};
