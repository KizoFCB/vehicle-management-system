// Link.react.test.js
import React from "react";
import renderer from "react-test-renderer";
import store from "../../../../redux/store";
import { Provider } from "react-redux";
import Vehicle from "./vehicle";

test("Render a full vehicle", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Vehicle
        index={0}
        vehicle={{
          id: "89374927h77",
          number: "001",
          name: "Toyota Avanza",
          pic: "car2.png",
          time: "10:23 AM",
          date: "10/06/2019",
          fuelType: "Diesel",
          licensePlate: "A-836488",
          status: "Active",
          volume: 120.05,
          distance: 1284.984,
          cost: 866.0,
          pricePerLiter: 10200,
        }}
      />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render a full vehicle without an image", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Vehicle
        index={0}
        vehicle={{
          id: "89374927h77",
          number: "001",
          name: "Toyota Avanza",
          time: "10:23 AM",
          date: "10/06/2019",
          fuelType: "Diesel",
          licensePlate: "A-836488",
          status: "Out of service",
          volume: 120.05,
          distance: 1284.984,
          cost: 866.0,
          pricePerLiter: 10200,
        }}
      />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
