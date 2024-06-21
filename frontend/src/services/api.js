import axios from 'axios';

console.log(process.env.REACT_APP_API_URL);

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Ensure to use REACT_APP_ prefix for environment variables in React
});

export async function fetchBlogPosts() {
    const response = await api.get('/blogs');
    return response.data;
}
