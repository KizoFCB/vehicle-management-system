import { createSlice } from "@reduxjs/toolkit";
import fakeVehicles from "./../fakeData";
import moment from "moment";
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
      console.log(
        state.vehicles.length,
        action.payload,
        newVehicle,
        index,
        state.vehicles[index]
      );
      // state.vehicles.push(newVehicle);
      state.vehicles[index] = newVehicle;
      console.log(state.vehicles[index]);
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
