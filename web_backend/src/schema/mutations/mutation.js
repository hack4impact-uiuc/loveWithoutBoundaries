import { GraphQLObjectType, GraphQLString } from 'graphql';

import StudentType from '../types/StudentType'
import Student from '../../models/student';

import LessonType from '../types/LessonType'
import Lesson from '../../models/lesson';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return {
      createStudent: {
        type: StudentType,
        args: { name: { type: GraphQLString } },
        resolve(root, { name }, ctx) {
          const s = new Student({ name });
          return s.save()
        } 
      },
      createLesson: {
        type: LessonType,
        args: { name: { type: GraphQLString } },
        resolve(root, { name }, ctx) {
          const s = new Lesson({ name });
          return s.save()
        } 
      },  



    };
  },
});

export default Mutation;
