import axios from 'axios';

export const getPosts = () => {
  return axios.get('/api/posts')
};

export const getUserPosts = id => {
  return axios.get(`/api/posts/user/${id}`)
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