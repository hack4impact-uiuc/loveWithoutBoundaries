import {commitMutation, graphql} from 'react-relay';

const mutation = graphql`
    mutation addStudentMutation($name: String!) {
        createStudent(name: $name){
            name
        }
    }
`;

function addStudent(environment, name) {
  const variables = {
    name
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log('Response received from server.')
      },
      onError: err => console.error(err),
    },
  );
}

export default addStudent