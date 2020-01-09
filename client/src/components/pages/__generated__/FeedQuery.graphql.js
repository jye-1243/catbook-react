/**
 * @flow
 * @relayHash a38602c28042741647c14288c7b3fbb3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Card_story$ref = any;
export type FeedQueryVariables = {||};
export type FeedQueryResponse = {|
  +stories: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: Card_story$ref,
  |}>
|};
export type FeedQuery = {|
  variables: FeedQueryVariables,
  response: FeedQueryResponse,
|};
*/


/*
query FeedQuery {
  stories {
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "creator",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
},
v2 = {
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
    "name": "FeedQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stories",
        "storageKey": null,
        "args": null,
        "concreteType": "Story",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
    "name": "FeedQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stories",
        "storageKey": null,
        "args": null,
        "concreteType": "Story",
        "plural": true,
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
              (v1/*: any*/),
              (v2/*: any*/)
            ]
          },
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FeedQuery",
    "id": null,
    "text": "query FeedQuery {\n  stories {\n    id\n    ...Card_story\n  }\n}\n\nfragment Card_story on Story {\n  id\n  ...CommentsBlock_story\n  ...SingleStory_story\n}\n\nfragment CommentsBlock_story on Story {\n  id\n  comments {\n    id\n    ...SingleComment_comment\n  }\n}\n\nfragment SingleComment_comment on Comment {\n  creator {\n    id\n    name\n  }\n  content\n}\n\nfragment SingleStory_story on Story {\n  creator {\n    id\n    name\n  }\n  content\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3f287abc4ac73e490b2e1599969b14e7';
module.exports = node;
