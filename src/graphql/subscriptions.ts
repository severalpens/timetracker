/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
