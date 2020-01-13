/**
 * @flow
 * @relayHash 608d7d5719239f9572e8b914f9162cb5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SingleComment_comment$ref = any;
export type CommentsBlockCommentCreateMutationVariables = {|
  content: string,
  storyId: string,
|};
export type CommentsBlockCommentCreateMutationResponse = {|
  +commentCreate: ?{|
    +id: ?string,
    +$fragmentRefs: SingleComment_comment$ref,
  |}
|};
export type CommentsBlockCommentCreateMutation = {|
  variables: CommentsBlockCommentCreateMutationVariables,
  response: CommentsBlockCommentCreateMutationResponse,
|};
*/


/*
mutation CommentsBlockCommentCreateMutation(
  $content: String!
  $storyId: ID!
) {
  commentCreate(content: $content, storyId: $storyId) {
    id
    ...SingleComment_comment
  }
}

fragment SingleComment_comment on Comment {
  creator {
    id
    name
  }
  content
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "content",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "storyId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "content",
    "variableName": "content"
  },
  {
    "kind": "Variable",
    "name": "storyId",
    "variableName": "storyId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CommentsBlockCommentCreateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "commentCreate",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Comment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "SingleComment_comment",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CommentsBlockCommentCreateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "commentCreate",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Comment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "creator",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CommentsBlockCommentCreateMutation",
    "id": null,
    "text": "mutation CommentsBlockCommentCreateMutation(\n  $content: String!\n  $storyId: ID!\n) {\n  commentCreate(content: $content, storyId: $storyId) {\n    id\n    ...SingleComment_comment\n  }\n}\n\nfragment SingleComment_comment on Comment {\n  creator {\n    id\n    name\n  }\n  content\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c93b0ab0d098487f0e0d338fba9337cd';
module.exports = node;
