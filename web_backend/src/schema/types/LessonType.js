import { GraphQLObjectType, GraphQLString } from 'graphql';
const mongoose = require('mongoose');

const Lesson = new GraphQLObjectType({
  name: 'Lesson',
  description: 'Self Descriptive',
  fields() {
    return {
      name: {
        type: GraphQLString,
      }
    };
  },
});

export default Lesson;
