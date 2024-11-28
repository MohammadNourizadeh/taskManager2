import { faCalendarAlt, faCog, faNoteSticky, faStar, faSun, faTasks } from "@fortawesome/free-solid-svg-icons";

const sideBarItems = [
    {
        iconName: faSun,
        itemName: "my day",
        isLink: true,
        linkAddress: '/'
    },
    {
        iconName: faStar,
        itemName: "important",
        isLink: true,
        linkAddress: '/',
        disable: true
    },
    {
        iconName: faCalendarAlt,
        itemName: "planned",
        iconColor: "rgb(200, 10, 57)",
        isLink: true,
        linkAddress: '/',
        disable: true
    },
    {
        iconName: faNoteSticky,
        itemName: "notes",
        iconColor: "rgb(91, 246, 77)",
        isLink: true,
        linkAddress: '/',
        disable: true
    },
    {
        iconName: faTasks,
        itemName: "checked",
        isLink: true,
        linkAddress: '/',
        disable: true
    },
    {
        iconName: faCog,
        itemName: "setting",
        disable: true
    },
];

export { sideBarItems };

