import axios from 'axios'

export const getAll = () => {
axios.get('http://localhost:8080/posts/showAll')
.then( result => console.log(result.data) )
.catch(error => console.log(error))
} 