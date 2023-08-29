import { all } from "redux-saga/effects";
import { watchAsyncStaffSaga } from "./staffSaga";

export function* rootSaga() {
  yield all([watchAsyncStaffSaga()]);
}
