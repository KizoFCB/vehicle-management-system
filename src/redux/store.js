import { configureStore } from "@reduxjs/toolkit";
import vehiclesSlice from "./vehicles";

export default configureStore({
  reducer: {
    vehicles: vehiclesSlice,
  },
});
