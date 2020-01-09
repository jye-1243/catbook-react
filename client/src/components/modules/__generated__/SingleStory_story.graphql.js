/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SingleStory_story$ref: FragmentReference;
declare export opaque type SingleStory_story$fragmentType: SingleStory_story$ref;
export type SingleStory_story = {|
  +creator: ?{|
    +id: ?string,
    +name: ?string,
  |},
  +content: ?string,
  +$refType: SingleStory_story$ref,
|};
export type SingleStory_story$data = SingleStory_story;
export type SingleStory_story$key = {
  +$data?: SingleStory_story$data,
  +$fragmentRefs: SingleStory_story$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SingleStory_story",
  "type": "Story",
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
(node/*: any*/).hash = '65f2e687769c37d07c0b8cdda6fed433';
module.exports = node;
