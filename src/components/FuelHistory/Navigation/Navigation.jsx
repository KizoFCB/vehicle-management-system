import { Image } from "react-bootstrap";

function Navigation() {
  return (
    <div className="d-flex flex-column justify-content-start align-items-center">
      <Image src="smartselect.png" height="40" width="30" />
      <p>VEHICLES</p>
      <div
        className="w-100 d-flex flex-column justify-content-start align-items-center"
        style={{ backgroundColor: "#F8FAFB" }}
      >
        <p>REPORT</p>
        <p>Operating Cost</p>
        <p className="font-weight-bold">Fuel History</p>
      </div>
      <p>Total Cost</p>
      <p>Cost/Meter</p>
      <p>Expense Summary</p>
      <p>Utilization</p>
      <p>Maintenance</p>
      <p>Service</p>
      <p>PEOPLE</p>
    </div>
  );
}

export default Navigation;
