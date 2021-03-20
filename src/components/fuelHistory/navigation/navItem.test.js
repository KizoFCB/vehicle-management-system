// Link.react.test.js
import React from "react";
import renderer from "react-test-renderer";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./navItem";

test("Renders with icon", () => {
  const component = renderer.create(<NavItem icon={faCar} title="VEHICLES" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renders without icon", () => {
  const component = renderer.create(<NavItem title="Operating Cost" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
