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
  const vehiclesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const statusSortMap = { Active: 1, "In shop": 2, "Out of service": 3 };
  const [sortingType, setSortingType] = useState("");
  console.log(sortingType);

  const stateVehicles = useSelector((state) => state.vehicles.vehicles);
  // const [vehicles, setVehicles] = useState(stateVehicles);

  // console.log("11111", stateVehicles, vehicles);
  // useEffect(() => {
  //   console.log("1222", stateVehicles);
  //   setVehicles(stateVehicles);
  // }, [stateVehicles]);

  const timezoneOptions = [
    {
      label: (
        <div className="d-flex align-items-center">
          <div>Timezone:</div>
          <Image
            height="15"
            width="30"
            className="ml-2"
            src="Flag_of_Egypt.png"
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
          <strong>All</strong>
        </div>
      ),
      value: "",
    },
    {
      label: (
        <div className="d-flex">
          <div>Sort:</div>
          <strong>Date</strong>
        </div>
      ),
      value: "Date",
    },
    {
      label: (
        <div className="d-flex">
          <div>Sort:</div>
          <strong>Status</strong>
        </div>
      ),
      value: "Status",
    },
  ];

  // Logic for sorting vehicles
  const sortedVehicles = [...stateVehicles].sort(function (a, b) {
    return sortingType === "Status"
      ? statusSortMap[b.status] - statusSortMap[a.status]
      : new Date(b.date) - new Date(a.date);
  });

  const DatesSet = new Set();
  sortedVehicles.map((vehicle) => DatesSet.add(vehicle.date));
  const uniqueDates = [...DatesSet.values()];

  // Logic for displaying vehicles
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = sortedVehicles.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );

  console.log(uniqueDates);
  return (
    <div
      className="d-flex flex-column pl-4 pr-4 py-5"
      style={{ backgroundColor: "#F8FAFB" }}
    >
      <div className="d-flex flex-row justify-content-end align-items-center">
        <div>
          {indexOfFirstVehicle === 0 ? 1 : indexOfFirstVehicle}-
          {indexOfLastVehicle > stateVehicles.length
            ? stateVehicles.length
            : indexOfLastVehicle}
          of {stateVehicles.length}
        </div>

        <ButtonGroup className="ml-3">
          <Button
            as="span"
            className="bg-white"
            style={{ border: "1px solid #E8ECEF" }}
            variant="light"
            size="lg"
            onClick={
              currentPage > 1 ? () => setCurrentPage(currentPage - 1) : null
            }
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </Button>
          <Button
            as="span"
            className="bg-white"
            style={{ border: "1px solid #E8ECEF" }}
            variant="light"
            size="lg"
            onClick={
              currentPage * vehiclesPerPage < stateVehicles.length
                ? () => setCurrentPage(currentPage + 1)
                : null
            }
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </Button>
        </ButtonGroup>

        <Select
          defaultValue={timezoneOptions[0]}
          className="w-25 ml-3"
          options={timezoneOptions}
        />
        <Select
          defaultValue={sortingType}
          placeholder="Sort..."
          onChange={(option) => {
            console.log("8888888", option.value);
            setSortingType(option.value);
            setCurrentPage(1);
          }}
          className="w-25 ml-3"
          options={sortingOptions}
        />
      </div>
      <Card>
        <Table responsive>
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
              return currentVehicles.some(
                (vehicle) =>
                  new Date(vehicle.date).getTime() ===
                  new Date(dateEntry).getTime()
              ) ? (
                <>
                  <tr>
                    <td
                      colSpan="6"
                      style={{
                        backgroundColor: "#F8FAFB",
                        color: "#252631",
                        fontWeight: "bold",
                      }}
                    >
                      {moment(dateEntry, "DD/MM/YYYY").format(
                        "ddd, MMM DD, YYYY"
                      )}
                    </td>
                  </tr>

                  {currentVehicles
                    .filter((vehicle) => vehicle.date === dateEntry)
                    .map(function (vehicle) {
                      return <Vehicle vehicle={vehicle} />;
                    })}
                </>
              ) : null;
            })}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}

export default Filters;
