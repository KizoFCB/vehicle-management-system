import { Image } from "react-bootstrap";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt, faUser } from "@fortawesome/free-regular-svg-icons";
import NavItem from "./NavItem";

function Navigation() {
  return (
    <div
      className="d-flex flex-column justify-content-start align-items-center"
      style={{ color: "#778CA2" }}
    >
      <Image src="smartselect.png" height="40" width="30" />
      <NavItem icon={faCar} title="VEHICLES" />
      {/* <div
        className="w-100 d-flex flex-column justify-content-start align-items-center"
        style={{ backgroundColor: "#F8FAFB" }}
      > */}

      <NavItem
        style={{ backgroundColor: "#F8FAFB" }}
        icon={faFileAlt}
        color="#4D7CFE"
        title="REPORT"
      />
      {/* </div> */}
      <div>
        {/* <div className="w-100" style={{ backgroundColor: "#F8FAFB" }}> */}
        <p>Operating Cost</p>
        <p className="font-weight-bold">Fuel History</p>
        {/* </div> */}
        <p>Total Cost</p>
        <p>Cost/Meter</p>
        <p>Expense Summary</p>
        <p>Utilization</p>
        <p>Maintenance</p>
        <p>Service</p>
      </div>
      <NavItem icon={faUser} title="PEOPLE" />
    </div>
  );
}

export default Navigation;
