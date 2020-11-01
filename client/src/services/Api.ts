import { Todo } from "./../containers/Todos/types";
import config from "../config/app";
import requestConfig from "../config/request";
import * as API from "../utils/api-helper";

const isProd: boolean = config.isProd;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.staging.api_endpoint;

export const todoCreate = (params: Todo) => {
  const url = `${API_ENDPOINT}/todo/create`;
  const config = { ...requestConfig };
  return API.post(url, params, config);
};

export const todoEdit = (params: { id: string; data: Todo }) => {
  const url = `${API_ENDPOINT}/todo/${params.id}`;
  return API.put(url, params.data);
};

export const todoDelete = (params: { _id: string }) => {
  const url = `${API_ENDPOINT}/todos/delete/${params._id}`;
  return API.deleteResource(url);
};

export const todoSearch = (params: { value: string }) => {
  const url = `${API_ENDPOINT}/search/todos?value=${params.value}`;
  return API.get(url);
};

export const todos = () => {
  const url = `${API_ENDPOINT}/todos`;
  return API.get(url);
};

export const todoById = (params: { _id: string }) => {
  const url = `${API_ENDPOINT}/todos/${params._id}`;
  return API.get(url);
};
