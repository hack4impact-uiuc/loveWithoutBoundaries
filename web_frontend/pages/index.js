import {graphql, QueryRenderer} from 'react-relay';

import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import StudentListItem from './../components/studentListItem'

import addStudent from '../mutations/addStudent'

require('isomorphic-fetch');

import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

function fetchQuery(
  operation,
  variables,
) {
  return fetch('http://localhost:8080/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <QueryRenderer
      environment={modernEnvironment}
      query={graphql`
        query pages_Query{
          students {
            ...studentListItem_student
          }
        }
      `}
      variables={{}}
      render={({error, props}) => {
        if(!props) {
          return <div>Loading...</div>
        }
        return <div>
          {props.students.map(s => <StudentListItem student={s}/>)}
          <button onClick={() => addStudent(modernEnvironment, "Pranay")}>Add Pranay</button>
        </div>
      }}
    />

  </div>
)
