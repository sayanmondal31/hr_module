import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/rootSaga";
import { staffSliceReducer } from "./manageStaff/staffSlice";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    staff: staffSliceReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
