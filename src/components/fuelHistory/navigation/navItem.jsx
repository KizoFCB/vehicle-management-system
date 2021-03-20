import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavItem({ icon, title, color, style }) {
  let className = "flex-center-row w-100 m-0 p-auto";

  if (title === "REPORT") {
    className += " bg-default-primary vl";
  } else if (title === "Operating Cost") {
    className += " bg-default-primary";
  } else if (title === "Fuel History") {
    className += " font-weight-bold bg-default-primary vl";
  }

  return (
    <div className={className} style={style}>
      {icon && <FontAwesomeIcon color={color} className="mr-3" icon={icon} />}
      <div className="p-3">{title}</div>
    </div>
  );
}

NavItem.defaultProps = {
  icon: {},
  title: "Default",
  color: "",
  style: {},
};

export default NavItem;
