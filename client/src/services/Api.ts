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

export const todoEdit = (params: { id: string }) => {
  const url = `${API_ENDPOINT}/todo/${params.id}`;
  return API.get(url);
};

export const todoDelete =(params: { id: string })=>{
  const url=`${API_ENDPOINT}/todos/delete/${params.id}`
  return API.deleteResource(url)
}

export const todoCurrentState = (params:{currentState:string}) => {
  const url = `${API_ENDPOINT}/todos/about?currentState=${params.currentState}`;
  return API.get(url);
};

export const todos=()=>{
  const url =`${API_ENDPOINT}/todos`;
  return API.get(url)
}