import { useContext } from "react";
import MainContext from "../../../../../contexts/MainContext";
import DisableItem from "./components/disableItem/DisableItem";
import LinkItem from "./components/linkItem/LinkItem";
import SettingItem from "./components/settingItem/SettingItem";

export default function SideBarItem({
  itemName,
  iconName,
  iconColor,
  isLink,
  linkAddress,
  disable,
}) {
  // context
  const { selectedItem, setSelectedItem } = useContext(MainContext);

  return disable ? (
    <DisableItem
      iconColor={iconColor}
      iconName={iconName}
      itemName={itemName}
    />
  ) : isLink ? (
    <LinkItem
      linkAddress={linkAddress}
      iconColor={iconColor}
      itemName={itemName}
      iconName={iconName}
      selectedItem={selectedItem}
      onSelect={(itemName) => {
        setSelectedItem(itemName);
      }}
    />
  ) : (
    <SettingItem
      iconName={iconName}
      itemName={itemName}
      selectedItem={selectedItem}
      onSelect={(itemName) => {
        setSelectedItem(itemName);
      }}
    />
  );
}
