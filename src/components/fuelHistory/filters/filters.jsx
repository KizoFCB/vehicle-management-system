import React, { useState, useEffect } from "react";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Card, Table, Image } from "react-bootstrap";
import Select from "react-select";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllVehicles } from "../../../redux/vehicles";
import Vehicle from "./vehicle/vehicle";

function Filters() {
  const vehiclesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const statusSortMap = { Active: 1, "In shop": 2, "Out of service": 3 };
  const [sortingType, setSortingType] = useState("");

  const stateVehicles = useSelector((state) => state.vehicles.vehicles);
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(fetchAllVehicles());
  }, []);

  function dateToNum(d) {
    d = d.split("/");
    return Number(d[2] + d[1] + d[0]);
  }

  const sortedVehicles = [...stateVehicles].sort(function (a, b) {
    return sortingType === "Status"
      ? statusSortMap[a.status] - statusSortMap[b.status]
      : dateToNum(b.date) - dateToNum(a.date);
  });

  const DatesSet = new Set();
  sortedVehicles.map((vehicle) => DatesSet.add(vehicle.date));
  const uniqueDates = [...DatesSet.values()];

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = sortedVehicles.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );

  return (
    <div className="d-flex flex-column bg-default-primary pl-4 pr-4 py-5">
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
              className="bg-default-primary"
              style={{
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
            {uniqueDates.map(function (dateEntry, index) {
              return currentVehicles.some(
                (vehicle) => vehicle.date === dateEntry
              ) ? (
                <>
                  <tr key={index}>
                    <td
                      colSpan="6"
                      className="bg-default-primary font-weight-bold"
                      style={{
                        color: "#252631",
                      }}
                    >
                      {moment(dateEntry, "DD/MM/YYYY").format(
                        "ddd, MMM DD, YYYY"
                      )}
                    </td>
                  </tr>

                  {currentVehicles
                    .filter((vehicle) => vehicle.date === dateEntry)
                    .map(function (vehicle, index) {
                      return <Vehicle index={index} vehicle={vehicle} />;
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
