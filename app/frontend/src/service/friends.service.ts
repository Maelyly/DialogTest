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
        picture
        friends {
          name
          email
          company
          eyeColor
          age
          picture
          _id
        }
      }
    }
  `;
  //Não consegui recuperar de forma correta a lista de amigos do backend
  const { loading, error, data } = useQuery(SearchUser, {
    variables: { name },
  });

  if (loading) return alert('Loading...');
  if (error) return alert(error);

  var listFriends = [];
  for (var i = 0; i < data.list.length; i++) {
    var user: IFriends = {
      id: data.list[i]._id?.replace('"', '').replace('"', ''),
      name: data.list[i].name?.replace('"', '').replace('"', ''),
      eyeColor: data.list[i].eyeColor?.replace('"', '').replace('"', ''),
      company: data.list[i].company?.replace('"', '').replace('"', ''),
      age: data.list[i].age,
      email: data.list[i].email?.replace('"', '').replace('"', ''),
      image: data.list[i].picture?.replace('"', '').replace('"', ''),
      friends: data.list[i].friends,
    };
    listFriends.push(user);
  }
  console.log('return: ', listFriends);
  return listFriends;
};
