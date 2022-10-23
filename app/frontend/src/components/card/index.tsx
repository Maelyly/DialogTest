import './card.css';

interface InterfaceCard {
  name: string;
  age: number;
  eyeColor: string;
  company: string;
  email: string;
}
export const Card = ({
  name,
  age,
  eyeColor,
  company,
  email,
}: InterfaceCard) => {
  return (
    <div className='containerCard'>
      <div className='image'></div>
      <div className='textCard'>
        <div className='textCard'>name: {name}</div>

        <div className='textCard'>age: {age}</div>

        <div className='textCard'>eyeColor: {eyeColor}</div>

        <div className='textCard'>company: {company}</div>

        <div className='textCard'>email: {email}</div>
      </div>
    </div>
  );
};
