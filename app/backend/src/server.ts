import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import * as db from '../../../db.json' assert { 'type': 'json' };

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = `#graphql
    type user {
    name: String, 
    age: Int,
    eyeColor: String,
    company: String,
    email: String
    _id: String,
    friends: [user],
    picture: String
  }
  type Query {
    list(name: String): [user]
    user(_id:String): user
  }
`;

function filter(text: string, name: string) {
  var temp = `/${text}/`;
  if (temp.match(`/${name}/`)) {
    return true;
  }
  return false;
}
const strJson = JSON.stringify(db);

var myArray = strJson.split('."},');
myArray[0] = myArray[0].replace('{"default":[', '');

for (var element in myArray) {
  myArray[element] = myArray[element].replace('messages', 'messages"};');
}

const dic = (text: string) => {
  var dict = new Map();
  if (text.indexOf('greeting') !== -1) {
    text = text.replace('};."}]}', '');
    var keys = text.split(':');
    dict.set(keys[0], keys[1]);
    return dict;
  }
  if (text.indexOf(',') == -1) {
    var keys = text.split(':');
    dict.set(keys[0], keys[1]);
    return dict;
  }

  var temp = text.split(',');
  for (var i in temp) {
    if (temp[i].indexOf('https://') == -1) {
      var keys = temp[i].split(':');
      dict.set(keys[0], keys[1]);
    } else {
      var keys = temp[i].split('picture":');
      dict.set('"picture"', keys[1]);
    }
  }
  return dict;
};

const joinFriends = (user, friend) => {
  user[0] = user[0].replace('{', '');
  var dic1 = dic(user[0]);
  var dic2 = dic(friend[1]);
  var dic3 = new Map();
  var f = friend[0].split('},');

  for (var i in f) {
    f[i] = f[i].replace('{', '');
    dic3.set(i, dic(f[i]));
  }
  dic1.set('"friends"', dic3);
  dic1.set('greeting', dic2.get('"greeting"'));
  return dic1;
};

var dicAll = new Map();

for (var ind in myArray) {
  var user = myArray[ind].split(':[');
  var friend = user[1].split('],');
  var value = joinFriends(user, friend);
  dicAll.set(ind, value);
}

var listUser = [];

for (var i = 0; i < dicAll.size; i++) {
  var a = i.toString();

  var userId = dicAll.get(a).get('"_id"');
  var userName = dicAll.get(a).get('"name"');
  var userCompany = dicAll.get(a).get('"company"');
  var userEmail = dicAll.get(a).get('"email"');
  var userEye = dicAll.get(a).get('"eyeColor"');
  var userAge = dicAll.get(a).get('"age"');
  var userPicture = dicAll.get(a).get('"picture"');
  var friends = [dicAll.get(a).get('"friends"')];
  // for (var i = 0; i < dicAll.get(a).get('"friends"').size; i++) {
  //   var b = i.toString();
  //   var userIdF = dicAll.get(a).get('"friends"').get(b).get('"_id"');
  //   // var userNameF = dicAll.get(a).get('"friends"').get(b).get('"name"');
  //   // var userCompanyF = dicAll.get(a).get('"friends"').get(b).get('"company"');
  //   // var userEmailF = dicAll.get(a).get('"friends"').get(b).get('"email"');
  //   // var userEyeF = dicAll.get(a).get('"friends"').get(b).get('"eyeColor"');
  //   // var userAgeF = dicAll.get(a).get('"friends"').get(b).get('"age"');
  //   // var userPictureF = dicAll.get(a).get('"friends"').get(b).get('"picture"');
  //   // var f = {
  //   //   name: userNameF,
  //   //   _id: userIdF,
  //   //   age: userAgeF,
  //   //   company: userCompanyF,
  //   //   email: userEmailF,
  //   //   eyeColor: userEyeF,
  //   //   picture: userPictureF,
  //   // };

  //   friends.push(f);
  // }
  var u = {
    name: userName,
    _id: userId,
    age: userAge,
    company: userCompany,
    email: userEmail,
    eyeColor: userEye,
    friends: friends,
    picture: userPicture,
  };
  listUser.push(u);
}

const resolvers = {
  Query: {
    user(parent, args, context, info) {
      const { _id } = args;
      var t = `"${_id}"`;
      for (var i = 0; i < listUser.length; i++) {
        if (filter(t, listUser[i]._id.toString())) {
          return listUser[i];
        }
      }
      return null;
    },
    list(parent, args, context, info) {
      const { name } = args;
      if (!name) {
        return listUser;
      }
      var listFilter = [];

      var t = `"${name}"`;
      for (var i = 0; i < listUser.length; i++) {
        if (filter(t, listUser[i].name.toString())) {
          listFilter.push(listUser[i]);
        } else if (filter(t, listUser[i]._id.toString())) {
          listFilter.push(listUser[i]);
        } else if (filter(t, listUser[i].eyeColor.toString())) {
          listFilter.push(listUser[i]);
        } else if (filter(t, listUser[i].company.toString())) {
          listFilter.push(listUser[i]);
        } else if (filter(t, listUser[i].email.toString())) {
          listFilter.push(listUser[i]);
        }
      }

      return listFilter;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
