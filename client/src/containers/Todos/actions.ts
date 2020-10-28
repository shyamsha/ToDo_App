import { action } from "typesafe-actions";
import { TodoActionTypes, Todos } from "./types";

export const todoRequest = () =>
action(TodoActionTypes.TODO_REQUEST);
export const todoSuccess = (res: Todos) =>
action(TodoActionTypes.TODO_SUCCESS, res);
export const todoError = (message: Error) =>
action(TodoActionTypes.TODO_ERROR, message);
