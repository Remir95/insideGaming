import axios from 'axios';

export const APIGames = axios.create({
  baseURL: `http://localhost:3000/list-game`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})
