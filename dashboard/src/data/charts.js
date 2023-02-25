import {
  faDesktop,
  faMobileAlt,
  faTabletAlt,
} from "@fortawesome/free-solid-svg-icons";

const trafficShares = [
  { id: 1, label: "Desktop", value: 60, color: "secondary", icon: faDesktop },
  {
    id: 2,
    label: "Mobile Web",
    value: 30,
    color: "primary",
    icon: faMobileAlt,
  },
  {
    id: 3,
    label: "Tablet Web",
    value: 10,
    color: "tertiary",
    icon: faTabletAlt,
  },
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const totalOrders = [
  {
    id: 1,
    label: monthNames[new Date().getMonth()],
    value: [1, 5, 2, 5, 4, 3],
    color: "primary",
  },
];

export { trafficShares, totalOrders };
