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
      <NavItem title="Operating Cost" />
      <NavItem title="Fuel History" />
      <NavItem title="Total Cost" />
      <NavItem title="Cost/Meter" />
      <NavItem title="Expense Summary" />
      <NavItem title="Utilization" />
      <NavItem title="Maintenance" />
      <NavItem title="Service" />
      <NavItem icon={faUser} title="PEOPLE" />
    </div>
  );
}

export default Navigation;
