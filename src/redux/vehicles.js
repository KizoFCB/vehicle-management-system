import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import { getVehicles } from "./../services/api/vehicleService";
import fakeVehicles from "./../fakeData";

export const fetchAllVehicles = createAsyncThunk(
  "vehicles/fetchAllVehicles",
  async () => {
    const response = await getVehicles();
    return response.data;
  }
);

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicles: fakeVehicles,
  },
  reducers: {
    editVehicle: (state, action) => {
      const index = state.vehicles.findIndex(function (vehicle) {
        return vehicle.id === action.payload.id;
      });
      const plate = action.payload.vehicle.split(" ");
      const newVehicle = {
        ...state.vehicles[index],
        ...action.payload,
        date: moment(action.payload.startDate, "YYYY-MM-DD").format(
          "DD/MM/YYYY"
        ),
        name: plate[0] + " " + plate[1],
        licensePlate: plate[2].replace("(", "").replace(")", ""),
      };

      state.vehicles[index] = newVehicle;
    },
    deleteVehicle: (state, action) => {
      state.vehicles = state.vehicles.filter(function (vehicle) {
        return vehicle.id !== action.payload.id;
      });
    },
  },
  extraReducers: {
    [fetchAllVehicles.fulfilled]: (state, action) => {
      state.vehicles = action.payload;
    },
  },
});

export const { editVehicle, deleteVehicle } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
