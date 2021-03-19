import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deleteVehicle } from "../../../../redux/vehicles";
import Edit from "../../edit/edit";

function Vehicle({ vehicle, key }) {
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
      key={key}
      classname="justify-content-around align-items-baseline"
    >
      <td className="d-flex flex-row align-items-center">
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

      <td className="font-default-primary align-self-start">{time}</td>

      <td className="font-default-primary align-self-start">{distance} km</td>

      <td className="font-default-primary align-self-start">{volume} L</td>

      <td className="font-default-primary">
        <div>Rp {(Math.round(cost * 100) / 100).toFixed(3)}</div>
        <div>Rp {pricePerLiter.toLocaleString()}/ltr</div>
      </td>

      <td>
        <div className="d-flex mt-3 align-self-center">
          <FontAwesomeIcon
            className="mr-3 clickable"
            icon={faEdit}
            color="#FFAB2B"
            onClick={() => setModalShow(true)}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="clickable"
            color="#FE4D5C"
            onClick={() => dispatch(deleteVehicle({ id, date }))}
          />
        </div>
        <Edit id={id} show={modalShow} onHide={() => setModalShow(false)} />
      </td>
    </Container>
  );
}

Vehicle.defaultProps = { key: 0, vehicle: {} };

export default Vehicle;
