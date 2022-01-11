import axios from 'axios';

const BASE_URL = 'http://localhost:9000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmYxYTMxYjZkYWJhYTQwYmIzYzY3YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTg4MzI0NiwiZXhwIjoxNjQyMTQyNDQ2fQ.kZK9QGDbEcIh04uOqRYSXLc6EjAY1DmhC0smBspYTXY';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
