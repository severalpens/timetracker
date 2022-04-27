/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
<<<<<<< HEAD
          _version
          _deleted
          _lastChangedAt
          blogPostsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
=======
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
>>>>>>> 055a1a70132d43e15e33ccaf8f2074aa948401e6
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
<<<<<<< HEAD
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBlogs = /* GraphQL */ `
  query SyncBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
=======
        }
        createdAt
        updatedAt
      }
      nextToken
>>>>>>> 055a1a70132d43e15e33ccaf8f2074aa948401e6
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
<<<<<<< HEAD
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
=======
        }
        createdAt
        updatedAt
>>>>>>> 055a1a70132d43e15e33ccaf8f2074aa948401e6
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
<<<<<<< HEAD
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
=======
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
>>>>>>> 055a1a70132d43e15e33ccaf8f2074aa948401e6
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
<<<<<<< HEAD
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogPostsId
      }
      nextToken
      startedAt
=======
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      nextToken
>>>>>>> 055a1a70132d43e15e33ccaf8f2074aa948401e6
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
<<<<<<< HEAD
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
=======
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
>>>>>>> 055a1a70132d43e15e33ccaf8f2074aa948401e6
        blogPostsId
      }
      content
      createdAt
      updatedAt
<<<<<<< HEAD
      _version
      _deleted
      _lastChangedAt
=======
>>>>>>> 055a1a70132d43e15e33ccaf8f2074aa948401e6
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          createdAt
          updatedAt
<<<<<<< HEAD
          _version
          _deleted
          _lastChangedAt
          blogPostsId
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        post {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
=======
>>>>>>> 055a1a70132d43e15e33ccaf8f2074aa948401e6
          blogPostsId
        }
        content
        createdAt
        updatedAt
<<<<<<< HEAD
        _version
        _deleted
        _lastChangedAt
        postCommentsId
      }
      nextToken
      startedAt
=======
        postCommentsId
      }
      nextToken
>>>>>>> 055a1a70132d43e15e33ccaf8f2074aa948401e6
    }
  }
`;
