import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavItem({ icon, title, color }) {
  return (
    <div className="p-auto d-flex flex-row justify-content-start align-items-center">
      <FontAwesomeIcon color={color} className="mr-3" icon={icon} />
      <div>{title}</div>
    </div>
  );
}

export default NavItem;
