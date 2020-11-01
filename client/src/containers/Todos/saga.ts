import { Action } from "redux";
import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import {
  todoByIdError,
  todoByIdSuccess,
  todoDeleteError,
  todoDeleteSuccess,
  todoEditError,
  todoEditSuccess,
  todoError,
  todoSearchError,
  todoSearchSuccess,
  todoSuccess,
} from "./actions";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";
import { TodoActionTypes, Todo } from "./types";

type SagaAction<T> = Action & { payload: T };

function* todos() {
  try {
    const res = yield call(Api.todos);
    if (res.error) {
      yield put(todoError(res.error));
    } else {
      yield put(todoSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(todoError(err));
    } else {
      yield put(todoError(unknownError("An unknown error occurred")));
    }
  }
}

function* todoCreate({ payload: params }: SagaAction<Todo>) {
  try {
    const res = yield call(Api.todoCreate, params);
    if (res.error) {
      yield put(todoError(res.error));
    } else {
      yield put(todoSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(todoError(err));
    } else {
      yield put(todoError(unknownError("An unknown error occurred")));
    }
  }
}

function* GetTodo({ payload: params }: SagaAction<{ _id: string }>) {
  try {
    const res = yield call(Api.todoById, params);
    if (res.error) {
      yield put(todoByIdError(res.error));
    } else {
      yield put(todoByIdSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(todoByIdError(err));
    } else {
      yield put(todoByIdError(unknownError("An unknown error occurred")));
    }
  }
}

function* todoEdit({
  payload: params,
}: SagaAction<{ id: string; data: Todo }>) {
  try {
    const res = yield call(Api.todoEdit, params);
    if (res.error) {
      yield put(todoEditError(res.error));
    } else {
      yield put(todoEditSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(todoEditError(err));
    } else {
      yield put(todoEditError(unknownError("An unknown error occurred")));
    }
  }
}

function* todoDelete({ payload: params }: SagaAction<{ _id: string }>) {
  try {
    const res = yield call(Api.todoDelete, params);
    if (res.error) {
      yield put(todoDeleteError(res.error));
    } else {
      yield put(todoDeleteSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(todoDeleteError(err));
    } else {
      yield put(todoDeleteError(unknownError("An unknown error occurred")));
    }
  }
}


function* search({ payload: params }: SagaAction<{value: string }>) {
  try {
    const res = yield call(Api.todoSearch, params);
    if (res.error) {
      yield put(todoSearchError(res.error));
    } else {
      yield put(todoSearchSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(todoSearchError(err));
    } else {
      yield put(todoSearchError(unknownError("An unknown error occurred")));
    }
  }
}

function* watchFetchRequest() {
  yield takeLatest(TodoActionTypes.TODO_REQUEST, todos);
  yield takeLatest(TodoActionTypes.TODO_CREATE_REQUEST, todoCreate);
  yield takeLatest(TodoActionTypes.GET_TODO_REQUEST, GetTodo);
  yield takeLatest(TodoActionTypes.TODO_EDIT_REQUEST, todoEdit);
  yield takeLatest(TodoActionTypes.TODO_DELETE_REQUEST, todoDelete);
  yield takeLatest(TodoActionTypes.TODO_SEARCHING_REQUEST,search)
}

export function* todoSaga() {
  yield all([fork(watchFetchRequest)]);
}
