import axios from 'axios';

export const loginApi = async (body) => {
    const response = await axios.post('https://api.mironovayouragency.com/admin/login',body).then((response)=>response).catch((error)=>error); 
};