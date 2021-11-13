import axios from 'axios';

export const tchat = axios.create({
  baseURL: `http://localhost:3000/tchat`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})
