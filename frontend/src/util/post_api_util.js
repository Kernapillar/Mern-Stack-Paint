import axios from 'axios';

export const getPosts = () => {
  return axios.get('/api/posts')
};

export const getUserPosts = id => {
  return axios.get(`/api/posts/user/${id}`)
};

export const getPost = id => {
  return axios.get(`/api/posts/${id}`)
};

export const writePost = data => {
  console.log("postapiutil",data)
  return axios.post('/api/posts/', data)
}
  
export const fetchSearch = query => {
  console.log("query", query)
  return axios.get(`/api/posts/search/${query}`)
}

export const fetchTags = query => {
  console.log("query", query)
  return axios.get(`/api/posts/tags/${query}`)
}
export const fetchComments = query => {
  console.log("query", query)
  return axios.get(`/api/posts/comments/${query}`)
}

export const changePost = data => {
  console.log("are we hitting post api util", data)
  return axios.patch(`/api/posts/${data.id}`, data)
}

export const destroyPost = id => {
  return axios.delete(`/api/posts/${id}`)
}

//
