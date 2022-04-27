/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
