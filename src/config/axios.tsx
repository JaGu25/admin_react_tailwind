import axios from 'axios'

const customAxios = () => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') ?? '{}') : null
    const custom = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: { 'Authorization': `Bearer ${user ? user.token : ''}` }
    });
    return custom
}

export default customAxios;