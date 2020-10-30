import { action } from "typesafe-actions";
import { Todo, TodoActionTypes, } from "./types";

export const todoRequest = () =>
action(TodoActionTypes.TODO_REQUEST);
export const todoSuccess = (res: Todo[]) =>
action(TodoActionTypes.TODO_SUCCESS, res);
export const todoError = (message: Error) =>
action(TodoActionTypes.TODO_ERROR, message);

export const todoCreateRequest = (params: Todo) =>
action(TodoActionTypes.TODO_CREATE_REQUEST,params);
export const todoCreateSuccess = (res: Todo[]) =>
action(TodoActionTypes.TODO_CREATE_SUCCESS, res);
export const todoCreateError = (message: Error) =>
action(TodoActionTypes.TODO_CREATE_ERROR, message);

export const todoEditRequest = (params: Todo) =>
action(TodoActionTypes.TODO_EDIT_REQUEST,params);
export const todoEditSuccess = (res: Todo[]) =>
action(TodoActionTypes.TODO_EDIT_SUCCESS, res);
export const todoEditError = (message: Error) =>
action(TodoActionTypes.TODO_EDIT_ERROR, message);

export const todoDeleteRequest = (params: Todo) =>
action(TodoActionTypes.TODO_DELETE_REQUEST,params);
export const todoDeleteSuccess = (res: Todo[]) =>
action(TodoActionTypes.TODO_DELETE_SUCCESS, res);
export const todoDeleteError = (message: Error) =>
action(TodoActionTypes.TODO_DELETE_ERROR, message);

export const todoStatusRequest = (params: Todo) =>
action(TodoActionTypes.TODO_OPEN_REQUEST,params);
export const todoStatusSuccess = (res: Todo[]) =>
action(TodoActionTypes.TODO_OPEN_SUCCESS, res);
export const todoStatusError = (message: Error) =>
action(TodoActionTypes.TODO_OPEN_ERROR, message);