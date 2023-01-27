import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import { Sublinks } from "../types";

const sublinks: Sublinks[] = [
  {
    page: "products",
    menu: [
      { label: "payment", icon: <FaCreditCard />, url: "/payment" },
      { label: "terminal", icon: <FaCreditCard />, url: "/terminal" },
      { label: "connect", icon: <FaCreditCard />, url: "/connect" },
    ],
  },
  {
    page: "developers",
    menu: [
      { label: "plugins", icon: <FaBook />, url: "/plugins" },
      { label: "libraries", icon: <FaBook />, url: "/plugins" },
      { label: "help", icon: <FaBook />, url: "/help" },
      { label: "billing", icon: <FaBook />, url: "/billing" },
    ],
  },
  {
    page: "company",
    menu: [
      { label: "about", icon: <FaBriefcase />, url: "/about" },
      { label: "customers", icon: <FaBriefcase />, url: "/customers" },
    ],
  },
];

export default sublinks;
