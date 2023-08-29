import { call, put, takeEvery } from "redux-saga/effects";
import {
  addStaffAction,
  getAllStaffAction,
  updateStaffAction,
} from "../api/staffAction";
import { getAllStaffs } from "../redux/manageStaff/staffSlice";
import { toast } from "react-toastify";

function* createNewStaffSaga(action) {
  try {
    toast.loading("Creating New staff");
    const response = yield call(addStaffAction, action.payload);

    if (response.status === 200) {
      toast.dismiss();
      toast.success("New staff created");
    }
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* getAllStaffSaga(action) {
  try {
    console.log(action.payload.body);
    const response = yield call(getAllStaffAction, action.payload);
    if (response.status === 200) {
      yield put(
        getAllStaffs({
          staffs: response?.data?.resultScope,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateStaffSaga(action) {
  try {
    const response = yield call(updateStaffAction, action.payload);
    if (response.status === 200) {
      toast.success("Staff updated");
    }
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

export function* watchAsyncStaffSaga() {
  yield takeEvery("CREATE_NEW_STAFF", createNewStaffSaga);
  yield takeEvery("GET_ALL_STAFF", getAllStaffSaga);
  yield takeEvery("UPDATE_STAFF", updateStaffSaga);
}
