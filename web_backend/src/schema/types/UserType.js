import { GraphQLObjectType, GraphQLString } from 'graphql';
const mongoose = require('mongoose');

// const resolveType = (data) => {
//   if (data.teacher) {
//     return TeacherType;
//   }
//   if (data.student) {
//     return MovieType;
//   }
//   if (data.author) {
//     return BookType;
//   }
// };

// const SearchableType = new GraphQLInterfaceType({
//   name: 'Searchable',
//   fields: {
//     searchPreviewText: { type: GraphQLString }
//   },
//   resolveType: resolveType
// });


const User = new GraphQLObjectType({
  name: 'User',
  description: 'users',
  fields() {
    return {
      email: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      },
    };
  },
});

export default User;
