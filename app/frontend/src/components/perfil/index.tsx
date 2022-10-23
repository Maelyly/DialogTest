import './perfil.css';

interface PerfilInterface {
  name: string;
  age: number;
  email: string;
}
export const Perfil = ({ name, age, email }: PerfilInterface) => {
  return (
    <div className='perfil'>
      <div className='imagePerfil'></div>
      <div className='perfilDesc'>
        <div className='perfilText'>name: {name}</div>
        <div className='perfilText'>age: {age}</div>
        <div className='perfilText'>email: {email}</div>
      </div>
    </div>
  );
};
