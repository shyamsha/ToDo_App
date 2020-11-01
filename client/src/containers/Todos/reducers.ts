import { TodoState, TodoActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: TodoState = {
  loading: false,
  todos: null,
  todo: null,
  errors: {
    todo: undefined,
  },
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
        errors: { ...state.errors, todo: undefined },
      };
    case TodoActionTypes.TODO_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.TODO_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, todo: action.payload },
      };

    case TodoActionTypes.TODO_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, todo: undefined },
      };
    case TodoActionTypes.TODO_CREATE_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.TODO_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, todo: action.payload },
      };

    case TodoActionTypes.GET_TODO_REQUEST:
      return { ...state, loading: true, errors: { todo: undefined } };
    case TodoActionTypes.GET_TODO_SUCCESS:
      return { ...state, loading: false, todo: action.payload };
    case TodoActionTypes.GET_TODO_ERROR:
      return { ...state, loading: false, errors: { todo: action.payload } };

    case TodoActionTypes.TODO_EDIT_REQUEST:
      return { ...state, loading: true, errors: { todo: undefined } };
    case TodoActionTypes.TODO_EDIT_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.TODO_EDIT_ERROR:
      return { ...state, loading: false, errors: { todo: action.payload } };

    case TodoActionTypes.TODO_DELETE_REQUEST:
      return { ...state, loading: true, errors: { todo: undefined } };
    case TodoActionTypes.TODO_DELETE_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.TODO_DELETE_ERROR:
      return { ...state, loading: false, errors: { todo: action.payload } };

    case TodoActionTypes.TODO_SEARCHING_REQUEST:
      return { ...state, loading: true, errors: { todo: undefined } };
    case TodoActionTypes.TODO_SEARCHING_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.TODO_SEARCHING_ERROR:
      return { ...state, loading: false, errors: { todo: action.payload } };

    default:
      return state;
  }
};

export { initialState as todoInitialState, reducer as todoReducer };
