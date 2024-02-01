import axios, { AxiosResponse } from "axios";
import { RepositoryItem } from "../models/repo.interface";

const client = axios.create({
  baseURL: "https://api.github.com",
});

client.interceptors.request.use(async (config) => {
  const token = process.env.REACT_APP_TOKEN;

  if (token) {
    client.defaults.data.access_token = `Bearer ${token}`;
  }

  return config;
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => client.get(url).then(responseBody),
  post: (url: string, body: {}) => client.post(url, body).then(responseBody),
  put: (url: string, body: {}) => client.put(url, body).then(responseBody),
  delete: (url: string) => client.delete(url).then(responseBody),
};

export const Repos = {
  getRepos: (): Promise<RepositoryItem[]> =>
    requests.get("/users/axelvarreira/repos"),
};
