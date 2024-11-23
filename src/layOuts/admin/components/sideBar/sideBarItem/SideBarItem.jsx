import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SideBarItem({
  itemName,
  iconName,
  iconColor,
  isLink,
  linkAddress,
}) {
  return isLink ? (
    <li>
      <Link to={linkAddress}>
        <span style={{ color: iconColor }}>
          <FontAwesomeIcon icon={iconName} />
        </span>
        {itemName}
      </Link>
    </li>
  ) : (
    <li>
      <span style={{ color: iconColor }}>
        <FontAwesomeIcon icon={iconName} />
      </span>
      {itemName}
    </li>
  );
}
