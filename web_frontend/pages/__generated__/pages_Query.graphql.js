/**
 * @flow
 * @relayHash 8b0910c4d368c1513e499dc3699528f9
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type pages_QueryResponse = {|
  +students: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query pages_Query {
  students {
    ...studentListItem_student
  }
}

fragment studentListItem_student on Student {
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Student",
        "name": "students",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "studentListItem_student",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "pages_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "pages_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Student",
        "name": "students",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Student",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query pages_Query {\n  students {\n    ...studentListItem_student\n  }\n}\n\nfragment studentListItem_student on Student {\n  name\n}\n"
};

module.exports = batch;
