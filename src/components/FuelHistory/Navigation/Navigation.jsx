import { Image } from "react-bootstrap";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt, faUser } from "@fortawesome/free-regular-svg-icons";
import NavItem from "./navItem";

function Navigation() {
  return (
    <div className="d-flex flex-column justify-content-start align-items-center font-default-primary">
      <Image src="smartselect.png" height="40" width="30" />
      <NavItem icon={faCar} title="VEHICLES" />
      <NavItem
        className="bg-default-primary"
        icon={faFileAlt}
        color="#4D7CFE"
        title="REPORT"
      />
      <div>
        <p>Operating Cost</p>
        <p className="font-weight-bold">Fuel History</p>
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
