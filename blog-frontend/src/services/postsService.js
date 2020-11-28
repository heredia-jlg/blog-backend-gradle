import axios from 'axios'

export const getAll = () => {
return axios.get('http://localhost:8080/posts/showAll')
} 