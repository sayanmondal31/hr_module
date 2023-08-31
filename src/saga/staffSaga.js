import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  addStaffAction,
  getAllStaffAction,
  updateStaffAction,
} from "../api/staffAction";
import { getAllStaffs } from "../redux/manageStaff/staffSlice";
import { toast } from "react-toastify";

function* createNewStaffSaga(action) {
  // calling state variable inside saga
  const { pagination } = yield select((state) => state.staff);
  try {
    toast.loading("Creating New staff");
    const response = yield call(addStaffAction, action.payload);

    if (response.status === 200) {
      toast.dismiss();
      toast.success("New staff created");
      // after the new staff create successfull , call get all staff api
      // to fetch updated value
      yield put({
        type: "GET_ALL_STAFF",
        payload: {
          body: {
            inputData: {
              redoq_csd_staff_Designation: "Super Admin",
              redoq_csd_staff_Id: 14,
              pagination: {
                skip: pagination.take * (pagination.currentPage - 1),
                take: pagination.take,
                currentPage: pagination.currentPage,
              },
              keyword: "",
              staffType: 0,
            },
          },
        },
      });
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
  // calling redux state variable
  const { pagination } = yield select((state) => state.staff);
  try {
    // getting update response from edit api
    const response = yield call(updateStaffAction, action.payload);
    if (response.status === 200) {
      toast.success("Staff updated");
      // after the update successfull , call get all staff api
      // to fetch updated value
      yield put({
        type: "GET_ALL_STAFF",
        payload: {
          body: {
            inputData: {
              redoq_csd_staff_Designation: "Super Admin",
              redoq_csd_staff_Id: 14,
              pagination: {
                skip: pagination.take * (pagination.currentPage - 1),
                take: pagination.take,
                currentPage: pagination.currentPage,
              },
              keyword: "",
              staffType: 0,
            },
          },
        },
      });
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
