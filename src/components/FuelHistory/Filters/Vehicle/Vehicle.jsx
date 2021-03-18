import React from "react";
import { Card, Container, Row, Image, Col, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

function Vehicle() {
  //TODO Why m-3?
  return (
    <Container
      as="tr"
      //   className="d-flex flex-row"
      style={{ justifyContent: "space-around", alignItems: "baseline" }}
    >
      <td className="d-flex flex-row" style={{ alignItems: "center" }}>
        <Image
          width={35}
          height={35}
          className="mr-3"
          src="https://www.eviltailors.com/merchandising/img/evil-tailors-logo-1604318648.jpg"
          roundedCircle
        />
        <div>
          <div>[001] Toyota Avanza</div>
          <div>Active</div>
        </div>
      </td>
      <td style={{ alignSelf: "flex-start", color: "#778CA2" }}>Time</td>
      <td style={{ alignSelf: "flex-start", color: "#778CA2" }}>Distance</td>
      <td style={{ color: "#778CA2" }}>
        <div>Cost1</div>
        <div>Cost2</div>
      </td>

      <td>
        <div className="d-flex mt-3" style={{ alignSelf: "center" }}>
          <FontAwesomeIcon className="mr-3" icon={faEdit} color="#FFAB2B" />
          <FontAwesomeIcon icon={faTrashAlt} color="#FE4D5C" />
        </div>
      </td>
    </Container>
  );
}

export default Vehicle;
