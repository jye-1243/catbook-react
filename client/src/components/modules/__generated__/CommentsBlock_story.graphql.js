/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SingleComment_comment$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CommentsBlock_story$ref: FragmentReference;
declare export opaque type CommentsBlock_story$fragmentType: CommentsBlock_story$ref;
export type CommentsBlock_story = {|
  +id: ?string,
  +comments: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: SingleComment_comment$ref,
  |}>,
  +$refType: CommentsBlock_story$ref,
|};
export type CommentsBlock_story$data = CommentsBlock_story;
export type CommentsBlock_story$key = {
  +$data?: CommentsBlock_story$data,
  +$fragmentRefs: CommentsBlock_story$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CommentsBlock_story",
  "type": "Story",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "comments",
      "storageKey": null,
      "args": null,
      "concreteType": "Comment",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "FragmentSpread",
          "name": "SingleComment_comment",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '0229b59d71a970b5e42b6593522d0386';
module.exports = node;
