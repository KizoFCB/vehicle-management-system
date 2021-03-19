import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavItem({ icon, title, color, style }) {
  return (
    <div className="flex-center-row w-100 m-2 p-auto" style={style}>
      <FontAwesomeIcon color={color} className="mr-3" icon={icon} />
      <div>{title}</div>
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
