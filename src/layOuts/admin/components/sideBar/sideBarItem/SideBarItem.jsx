import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBarItem({ itemName, iconName, iconColor = "" }) {
  return (
    <li>
      <span style={{ color: iconColor }}>
        <FontAwesomeIcon icon={iconName} />
      </span>
      {itemName}
    </li>
  );
}
