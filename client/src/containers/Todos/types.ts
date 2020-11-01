
export interface Todo {
  currentState?: string;
  _id?: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  createdAt?: Date;
  __v?: number;
}

export enum TodoActionTypes {
  TODO_REQUEST = "@@todo/dashboard/TODO_REQUEST",
  TODO_SUCCESS = "@@todo/dashboard/TODO_SUCCESS",
  TODO_ERROR = "@@todo/dashboard/TODO_ERROR",

  TODO_OPEN_REQUEST = "@@todo/dashboard/TODO_OPEN_REQUEST",
  TODO_OPEN_SUCCESS = "@@todo/dashboard/TODO_OPEN_SUCCESS",
  TODO_OPEN_ERROR = "@@todo/dashboard/TODO_OPEN_ERROR",

  TODO_SEARCHING_REQUEST = "@@todo/dashboard/TODO_SEARCHING_REQUEST",
  TODO_SEARCHING_SUCCESS = "@@todo/dashboard/TODO_SEARCHING_SUCCESS",
  TODO_SEARCHING_ERROR = "@@todo/dashboard/TODO_SEARCHING_ERROR",

  TODO_CREATE_REQUEST = "@@todo/dashboard/TODO_CREATE_REQUEST",
  TODO_CREATE_SUCCESS = "@@todo/dashboard/TODO_CREATE_SUCCESS",
  TODO_CREATE_ERROR = "@@todo/dashboard/TODO_CREATE_ERROR",

  TODO_EDIT_REQUEST = "@@todo/dashboard/TODO_EDIT_REQUEST",
  TODO_EDIT_SUCCESS = "@@todo/dashboard/TODO_EDIT_SUCCESS",
  TODO_EDIT_ERROR = "@@todo/dashboard/TODO_EDIT_ERROR",

  TODO_DELETE_REQUEST = "@@todo/dashboard/TODO_DELETE_REQUEST",
  TODO_DELETE_SUCCESS = "@@todo/dashboard/TODO_DELETE_SUCCESS",
  TODO_DELETE_ERROR = "@@todo/dashboard/TODO_DELETE_ERROR",
  
  GET_TODO_REQUEST = "@@todo/dashboard/GET_TODO_REQUEST",
  GET_TODO_SUCCESS = "@@todo/dashboard/GET_TODO_SUCCESS",
  GET_TODO_ERROR = "@@todo/dashboard/GET_TODO_ERROR",  
}

export interface TodoState {
  readonly loading: boolean;
  readonly todos:Todo[] | null;
  readonly todo:Todo | null;
  readonly errors: {
    todo?:string;
  };
}

