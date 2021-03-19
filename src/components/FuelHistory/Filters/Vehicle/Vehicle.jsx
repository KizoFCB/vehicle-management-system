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
    name,
    status,
    time,
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
            [{id}] {name}
          </div>
          <div>{status}</div>
        </div>
      </td>
      <td style={{ alignSelf: "flex-start", color: "#778CA2" }}>{time}</td>
      <td style={{ alignSelf: "flex-start", color: "#778CA2" }}>{distance}</td>
      <td style={{ alignSelf: "flex-start", color: "#778CA2" }}>{volume}</td>
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
            onClick={() => dispatch(deleteVehicle({ id }))}
          />
        </div>
        <Edit id={id} show={modalShow} onHide={() => setModalShow(false)} />
      </td>
    </Container>
  );
}

export default Vehicle;
