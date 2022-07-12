import "../../Assets/Styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
export const MenuItems = [
  {
    title: "Cart",
    url: "/cart",
    cName: "nav-links",
    img: <FontAwesomeIcon icon={faCartShopping} />,
  },
  {
    title: "Profile",
    url: "#",
    cName: "nav-links",
    img: <FontAwesomeIcon icon={faUser} />,
  },
];
