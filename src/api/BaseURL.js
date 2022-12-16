import axios from 'axios'

export default axios.create({
    baseURL: "https://refiners-cooperative-api.herokuapp.com/api/v1/",
  });