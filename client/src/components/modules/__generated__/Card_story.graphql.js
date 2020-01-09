/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CommentsBlock_story$ref = any;
type SingleStory_story$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Card_story$ref: FragmentReference;
declare export opaque type Card_story$fragmentType: Card_story$ref;
export type Card_story = {|
  +id: ?string,
  +$fragmentRefs: CommentsBlock_story$ref & SingleStory_story$ref,
  +$refType: Card_story$ref,
|};
export type Card_story$data = Card_story;
export type Card_story$key = {
  +$data?: Card_story$data,
  +$fragmentRefs: Card_story$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Card_story",
  "type": "Story",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "CommentsBlock_story",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SingleStory_story",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5c3b6729745afc17cf401c6cecc27d5b';
module.exports = node;
