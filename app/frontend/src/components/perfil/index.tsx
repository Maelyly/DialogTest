import { IPerfil } from '../../@types/perfil';
import './perfil.css';

export const Perfil = ({ name, age, email, image }: IPerfil) => {
  var urlImage = image ? image : require('../../image/image.png');
  return (
    <div className='perfil'>
      <img src={urlImage} alt='' className='imagePerfil'></img>
      <div className='perfilDesc'>
        <div className='perfilText'>name: {name}</div>
        <div className='perfilText'>age: {age}</div>
        <div className='perfilText'>email: {email}</div>
      </div>
    </div>
  );
};
