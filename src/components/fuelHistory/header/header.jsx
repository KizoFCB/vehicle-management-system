import { Image } from "react-bootstrap";

function Header() {
  return (
    <div className="flex-center-row">
      <p className="ml-3 mb-0 flex-grow-1">PLN Asset Management System</p>
      <Image width={35} height={35} src="user.png" roundedCircle />
      <br />
    </div>
  );
}

export default Header;
