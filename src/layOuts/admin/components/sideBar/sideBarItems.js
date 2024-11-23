import { faCalendarAlt, faCog, faNoteSticky, faStar, faSun, faTasks } from "@fortawesome/free-solid-svg-icons";

const sideBarItems = [
    {
        iconName: faSun,
        itemName: "my day",
    },
    {
        iconName: faStar,
        itemName: "important",
    },
    {
        iconName: faCalendarAlt,
        itemName: "planned",
        iconColor: "rgb(200, 10, 57)",
    },
    {
        iconName: faNoteSticky,
        itemName: "notes",
        iconColor: "rgb(91, 246, 77)",
    },
    {
        iconName: faTasks,
        itemName: "checked",
    },
    {
        iconName: faCog,
        itemName: "setting",
    },
];

export { sideBarItems };

