import { TodoState, TodoActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: TodoState = {
  loading: false,
  todos:null,
  errors: {
    todo:undefined
  }
};



type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<TodoState, A> = (
  state: TodoState = initialState,
  action: A
) => {
  switch (action.type) {
    case TodoActionTypes.TODO_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, todos: undefined }
      };
    case TodoActionTypes.TODO_SUCCESS:
      return {...state,loading:false, todos:action.payload};
    case TodoActionTypes.TODO_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, todo: action.payload }
      };

    default:
      return state;
  }
};

export { initialState as todoInitialState, reducer as todoReducer };
