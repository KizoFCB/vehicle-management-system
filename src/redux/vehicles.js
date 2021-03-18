import { createSlice } from "@reduxjs/toolkit";

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: [],
  },
  reducers: {
    editVehicle: (state, action) => {
      // const newVehicles =[];
      const vehicle = state.vehicles.find(function (vehicle) {
        return vehicle.id === action.payload.id;
      });
      state.vehicles = state.vehicles.filter(function (vehicle) {
        return vehicle.id !== action.payload.id;
      });
      state.vehicles.push(...vehicle, ...action.payload);
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
