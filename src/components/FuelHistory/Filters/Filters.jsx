import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Table,
  Dropdown,
  Form,
  Image,
  DropdownButton,
  Card,
} from "react-bootstrap";
import Vehicle from "./Vehicle/Vehicle";
import moment from "moment";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Filters() {
  const DatesSet = new Set();
  const vehicles = useSelector((state) => state.vehicles.vehicles);
  vehicles.map((vehicle) => DatesSet.add(vehicle.date));
  const uniqueDates = [...DatesSet.values()];
  const timezoneOptions = [
    {
      label: (
        <div className="d-flex">
          <div>Timezone</div>
          <Image
            height="30"
            width="40"
            src="https://i1.wp.com/danshafarms.com/wp-content/uploads/2016/09/egypt-flag-small.png?ssl=1"
          />
        </div>
      ),
      value: "Egypt",
    },
  ];
  const sortingOptions = [
    {
      label: (
        <div className="d-flex">
          <div>Sort:</div>
          <strong>Date</strong>
        </div>
      ),
      value: "Date",
    },
  ];
  console.log(uniqueDates);
  return (
    <Container
      className="d-flex flex-column pl-4 pr-4 py-5"
      style={{ backgroundColor: "#F8FAFB" }}
    >
      <div className="d-flex flex-row justify-content-end align-items-center">
        <div>1-10 of 40</div>

        <ButtonGroup>
          <Button
            as="span"
            className="bg-white"
            style={{ border: "1px solid #E8ECEF" }}
            variant="light"
            size="lg"
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </Button>
          <Button
            as="span"
            className="bg-white"
            style={{ border: "1px solid #E8ECEF" }}
            variant="light"
            size="lg"
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </Button>
        </ButtonGroup>

        <Select className="w-25" options={timezoneOptions} />
        <Select className="w-25" options={sortingOptions} />
      </div>
      <Card>
        <Table>
          <thead>
            <tr
              style={{
                backgroundColor: "#F8FAFB",
                color: "#98A9BC",
              }}
            >
              <th className="font-weight-normal">Vehicle</th>
              <th className="font-weight-normal">Time</th>
              <th className="font-weight-normal">Total km</th>
              <th className="font-weight-normal">Volume</th>
              <th className="font-weight-normal">Cost</th>
              <th className="font-weight-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {uniqueDates.map(function (dateEntry) {
              return (
                <>
                  <tr>
                    <td
                      colSpan="6"
                      style={{ backgroundColor: "#F8FAFB", color: "#252631" }}
                    >
                      {moment(dateEntry).format()}
                    </td>
                  </tr>

                  {vehicles
                    .filter((vehicle) => vehicle.date === dateEntry)
                    .map(function (vehicle) {
                      return <Vehicle vehicle={vehicle} />;
                    })}
                </>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default Filters;
