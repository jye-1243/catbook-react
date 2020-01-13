/**
 * @flow
 * @relayHash 0bf86d14bc0249f63771275f519d76e7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Card_story$ref = any;
export type FeedCreateStoryMutationVariables = {|
  content: string
|};
export type FeedCreateStoryMutationResponse = {|
  +storyCreate: ?{|
    +id: ?string,
    +$fragmentRefs: Card_story$ref,
  |}
|};
export type FeedCreateStoryMutation = {|
  variables: FeedCreateStoryMutationVariables,
  response: FeedCreateStoryMutationResponse,
|};
*/


/*
mutation FeedCreateStoryMutation(
  $content: String!
) {
  storyCreate(content: $content) {
    id
    ...Card_story
  }
}

fragment Card_story on Story {
  id
  ...CommentsBlock_story
  ...SingleStory_story
}

fragment CommentsBlock_story on Story {
  id
  comments {
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

fragment SingleStory_story on Story {
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
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "content",
    "variableName": "content"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
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
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "content",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FeedCreateStoryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "storyCreate",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Story",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "Card_story",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FeedCreateStoryMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "storyCreate",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Story",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comments",
            "storageKey": null,
            "args": null,
            "concreteType": "Comment",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          },
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "FeedCreateStoryMutation",
    "id": null,
    "text": "mutation FeedCreateStoryMutation(\n  $content: String!\n) {\n  storyCreate(content: $content) {\n    id\n    ...Card_story\n  }\n}\n\nfragment Card_story on Story {\n  id\n  ...CommentsBlock_story\n  ...SingleStory_story\n}\n\nfragment CommentsBlock_story on Story {\n  id\n  comments {\n    id\n    ...SingleComment_comment\n  }\n}\n\nfragment SingleComment_comment on Comment {\n  creator {\n    id\n    name\n  }\n  content\n}\n\nfragment SingleStory_story on Story {\n  creator {\n    id\n    name\n  }\n  content\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1480fd7b028e00a58d6dd86a0d08b7bd';
module.exports = node;
