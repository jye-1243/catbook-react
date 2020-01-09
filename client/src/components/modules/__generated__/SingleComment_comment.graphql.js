/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SingleComment_comment$ref: FragmentReference;
declare export opaque type SingleComment_comment$fragmentType: SingleComment_comment$ref;
export type SingleComment_comment = {|
  +creator: ?{|
    +id: ?string,
    +name: ?string,
  |},
  +content: ?string,
  +$refType: SingleComment_comment$ref,
|};
export type SingleComment_comment$data = SingleComment_comment;
export type SingleComment_comment$key = {
  +$data?: SingleComment_comment$data,
  +$fragmentRefs: SingleComment_comment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SingleComment_comment",
  "type": "Comment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "creator",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "content",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '73c0ba19c487faf1da054248fb2e91e2';
module.exports = node;
