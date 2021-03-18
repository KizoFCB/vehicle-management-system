import React from "react";
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

function Filters() {
  const vehicles = [{}, {}, {}];
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

  return (
    <Container style={{ backgroundColor: "#F8FAFB" }}>
      <div className="d-flex flex-row justify-content-end align-items-center">
        <div>1-10 of 40</div>

        <ButtonGroup>
          <Button variant="outline-light" size="lg">
            <FontAwesomeIcon icon={faCaretLeft} />
          </Button>
          <Button variant="outline-light" size="lg">
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
              <th className="font-weight-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map(function (vehicle) {
              return (
                <>
                  <tr>
                    <td
                      colSpan="5"
                      style={{ backgroundColor: "#F8FAFB", color: "#252631" }}
                    >
                      {moment("Mon , 19 June 2019").format()}
                    </td>
                  </tr>
                  <Vehicle />
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
