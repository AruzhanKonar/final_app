import axios from 'axios';

export const fetchEmployeeApi = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos'); 
    return response;
};

export const deleteEmployeeApi = async (id) => {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/todos/${id}'); 
    return response;
};