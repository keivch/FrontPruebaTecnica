import axios from 'axios';

const API_URL = 'https://backendpruebatecnica.onrender.com/books'; // cambia según tu backend

export const getBooks = () => axios.get(API_URL);
export const createBook = (book) => axios.post(API_URL, book);
export const updateBook = (id, book) => axios.put(`${API_URL}/${id}`, book);
export const deleteBook = (id) => axios.delete(`${API_URL}/${id}`);
