import React, { useState } from "react";
import { Card, Container, Row, Image, Col, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deleteVehicle } from "../../../../redux/vehicles";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Edit from "../../Edit/Edit";

function Vehicle({ vehicle }) {
  //TODO Why m-3?
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const {
    pic,
    id,
    number,
    name,
    status,
    time,
    date,
    volume,
    distance,
    cost,
    pricePerLiter,
  } = vehicle;
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
          src={pic}
          roundedCircle
        />
        <div>
          <div>
            [{number}] {name}
          </div>
          <div
            style={{
              color:
                status === "Active"
                  ? "#21A11E"
                  : status === "In shop"
                  ? "#C1931B"
                  : "#C11B1B",
            }}
          >
            {status}
          </div>
        </div>
      </td>
      <td style={{ alignSelf: "flex-start", color: "#778CA2" }}>{time}</td>
      <td style={{ alignSelf: "flex-start", color: "#778CA2" }}>
        {distance} km
      </td>
      <td style={{ alignSelf: "flex-start", color: "#778CA2" }}>{volume} L</td>
      <td style={{ color: "#778CA2" }}>
        <div>Rp {(Math.round(cost * 100) / 100).toFixed(3)}</div>
        <div>Rp {pricePerLiter.toLocaleString()}/ltr</div>
      </td>

      <td>
        <div className="d-flex mt-3" style={{ alignSelf: "center" }}>
          <FontAwesomeIcon
            className="mr-3"
            icon={faEdit}
            color="#FFAB2B"
            onClick={() => setModalShow(true)}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            color="#FE4D5C"
            onClick={() => dispatch(deleteVehicle({ id, date }))}
          />
        </div>
        <Edit id={id} show={modalShow} onHide={() => setModalShow(false)} />
      </td>
    </Container>
  );
}

export default Vehicle;
