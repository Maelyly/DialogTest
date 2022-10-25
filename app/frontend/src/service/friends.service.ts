import { gql, useQuery } from '@apollo/client';
import { IFriends } from '../@types/friends';

export const useSearch = (name: string) => {
  const SearchUser = gql`
    query SearchUser($name: String) {
      list(name: $name) {
        name
        email
        company
        eyeColor
        age
        _id
        friends {
          name
          email
          company
          eyeColor
          age
          _id
        }
      }
    }
  `;
  //Não consegui recuperar de forma correta a lista de amigos do backend
  const { loading, error, data } = useQuery(SearchUser, {
    variables: { name },
  });
  console.log(name);

  if (loading) return alert('Loading...');
  if (error) return alert(error);

  var listFriends = [];
  for (var i = 0; i < data.list.length; i++) {
    var user: IFriends = {
      id: data.list[i]._id,
      name: data.list[i].name,
      eyeColor: data.list[i].eyeColor,
      company: data.list[i].company,
      age: data.list[i].age,
      email: data.list[i].email,
      image: data.list[i].picture,
      friends: data.list[i].friends,
    };
    listFriends.push(user);
  }
  console.log(listFriends);
  return listFriends;
};
