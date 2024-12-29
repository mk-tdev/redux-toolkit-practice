import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import habbitReducer from "./habbitSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    habbits: habbitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
