import { Action } from "redux";
import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import { todoError, todoSuccess } from "./actions";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";
import { TodoActionTypes, Todo } from "./types";

type SagaAction<T> = Action & { payload: T };

function* todos({ payload: params }: SagaAction<Todo>) {
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

function* watchFetchRequest() {
  yield takeLatest(TodoActionTypes.TODO_REQUEST, todos);
}

export function* todoSaga() {
  yield all([fork(watchFetchRequest)]);
}
