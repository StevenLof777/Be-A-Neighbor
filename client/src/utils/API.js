export const getMe = (token) => {
    return fetch('/me/', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const addPost = (postData, token) => {
    // console.log(postData);
    // console.log(token);
    fetch('/post/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });
  };
  
  // Get posts
  export const getPosts = (postData) => {
    return fetch('/posts', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData),
    });
  };
  
  export const deletePost = (postId, token) => {
    return fetch(`/users/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  
//   How to add a reply?
  export const addReply = (postId, token) => {
    return fetch(`user/${postId}/`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
      },
    //   body: JSON.stringify(postData),
    });
  };


  