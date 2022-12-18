import axios from 'axios'

const BASE_URL = "https://refiners-cooperative-api.herokuapp.com/api/v1/";
export default axios.create({
	baseURL: BASE_URL,
	// withCredentials: true,
});

export const AxiosRequest = axios.create({
	baseURL: BASE_URL,
	headers: { "Content-Type": "application/json" },
	// withCredentials: true,
});
  