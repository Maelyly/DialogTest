export interface IFriends {
  id: string;
  name: string;
  email: string;
  age: number;
  eyeColor: string;
  company: string;
  friends: IFriends[];
  image: string;
}
