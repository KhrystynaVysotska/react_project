import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:8080/sweaters",
});

export const getAllSweaters = () => Axios.get();
export const getFilteredSweaters = (params) => Axios.get(`/?${params}`);
