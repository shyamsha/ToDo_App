
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

}

export interface TodoState {
  readonly loading: boolean;
  readonly todos:Todos | null;
  readonly errors: {
    todo?:string;
  };
}

