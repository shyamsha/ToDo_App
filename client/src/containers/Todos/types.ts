
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



export interface Todos {
  data: Todo[];
}


export enum TodoActionTypes {
  TODO_REQUEST = "@@todo/dashboard/TODO_REQUEST",
  TODO_SUCCESS = "@@todo/dashboard/TODO_SUCCESS",
  TODO_ERROR = "@@todo/dashboard/TODO_ERROR",

  TODO_OPEN_REQUEST = "@@todo/dashboard/TODO_OPEN_REQUEST",
  TODO_OPEN_SUCCESS = "@@todo/dashboard/TODO_OPEN_SUCCESS",
  TODO_OPEN_ERROR = "@@todo/dashboard/TODO_OPEN_ERROR",

  TODO_CLOSE_REQUEST = "@@todo/dashboard/TODO_CLOSE_REQUEST",
  TODO_CLOSE_SUCCESS = "@@todo/dashboard/TODO_CLOSE_SUCCESS",
  TODO_CLOSE_ERROR = "@@todo/dashboard/TODO_CLOSE_ERROR",

  TODO_CREATE_REQUEST = "@@todo/dashboard/TODO_CREATE_REQUEST",
  TODO_CREATE_SUCCESS = "@@todo/dashboard/TODO_CREATE_SUCCESS",
  TODO_CREATE_ERROR = "@@todo/dashboard/TODO_CREATE_ERROR",

  TODO_EDIT_REQUEST = "@@todo/dashboard/TODO_EDIT_REQUEST",
  TODO_EDIT_SUCCESS = "@@todo/dashboard/TODO_EDIT_SUCCESS",
  TODO_EDIT_ERROR = "@@todo/dashboard/TODO_EDIT_ERROR",

  TODO_DELETE_REQUEST = "@@todo/dashboard/TODO_DELETE_REQUEST",
  TODO_DELETE_SUCCESS = "@@todo/dashboard/TODO_DELETE_SUCCESS",
  TODO_DELETE_ERROR = "@@todo/dashboard/TODO_DELETE_ERROR",
}

export interface TodoState {
  readonly loading: boolean;
  readonly todos:Todo[] | null;
  readonly errors: {
    todo?:string;
  };
}

