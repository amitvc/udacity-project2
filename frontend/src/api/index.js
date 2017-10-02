/**
 * Created by amit on 9/24/17.
 */
import uuid from 'uuid';
import axios from 'axios'

const ROOT_URL = "http://localhost:3001"



const headers = {
    'Accept': 'application/json',
    'Authorization': 'amitvc'
}

export const getCategories = () =>
    axios.get(`${ROOT_URL}/categories`, { headers })
   // .then(res => res.json())
        .then(res => res.data.categories)


export const getPosts = () =>
    axios.get(`${ROOT_URL}/posts`, { headers })
        .then(posts => posts.data.filter(post => !post.deleted))

export const getPostsByCategory = (category) =>
    axios.get(`${ROOT_URL}/${category}/posts`, { headers })
        .then(res => res.data)

export const createPost = (post) =>
    axios.post(`${ROOT_URL}/posts`, {
            ...post,
            id: uuid(),
            timestamp: Date.now()
        },
        {
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.data)

export const editPost = (id, title, body) =>
    axios.put(`${ROOT_URL}/posts/${id}`, {
            title,
            body,
            timestamp: Date.now()
        },
        { headers })
        .then(res => res.data)


export const deletePost = (id) =>
    axios.delete(`${ROOT_URL}/posts/${id}`, { headers })

export const getPost = (id) =>
    axios.get(`${ROOT_URL}/posts/${id}`, { headers })
        .then(res => res.data)


export const votePost = (id, option) =>
    axios.post(`${ROOT_URL}/posts/${id}`, { option },
        {
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            }})
        .then(res => res.data)


////Section for comments api -- add, delete, vote, update
export const voteComment = (id, option) =>
    axios.post(`${ROOT_URL}/comments/${id}`, { option },
        {
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            }})
        .then(res => res.data)

export const getComments = (postId) =>
    axios.get(`${ROOT_URL}/posts/${postId}/comments`, { headers })
        .then(res => res.data)

export const createComment = (comment) =>
    axios.post(`${ROOT_URL}/comments`,
        {
            ...comment,
            id: uuid(),
            timestamp: Date.now()
        },
        {
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            }})
        .then(res => res.data)

export const editComment = (id, body) =>
    axios.put(`${ROOT_URL}/comments/${id}`, {
            body,
            timestamp: Date.now()
        },
        {
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            }})
        .then(res => res.data)

export const deleteComment = (id) =>
    axios.delete(`${ROOT_URL}/comments/${id}`, { headers })
