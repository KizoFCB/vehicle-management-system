import { createSlice } from "@reduxjs/toolkit";
import fakeVehicles from "./../fakeData";
export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: fakeVehicles,
  },
  reducers: {
    editVehicle: (state, action) => {
      const vehicle = state.vehicles.find(function (vehicle) {
        return vehicle.id === action.payload.id;
      });
      state.vehicles = state.vehicles.filter(function (vehicle) {
        return vehicle.id !== action.payload.id;
      });
      const newVehicle = { ...vehicle, ...action.payload };
      console.log(state.vehicles.length, action.payload, vehicle, newVehicle);
      state.vehicles.push(newVehicle);
    },
    deleteVehicle: (state, action) => {
      state.vehicles = state.vehicles.filter(function (vehicle) {
        return vehicle.id !== action.payload.id;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { editVehicle, deleteVehicle } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
