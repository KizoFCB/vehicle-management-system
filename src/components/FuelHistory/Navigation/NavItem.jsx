import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavItem({ icon, title, color, style }) {
  return (
    <div
      className="p-auto w-100 d-flex flex-row justify-content-center m-2 align-items-center"
      style={style}
    >
      <FontAwesomeIcon color={color} className="mr-3" icon={icon} />
      <div>{title}</div>
    </div>
  );
}

export default NavItem;
