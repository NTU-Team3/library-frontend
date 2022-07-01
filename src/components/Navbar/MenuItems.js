import "../../Assets/Styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// *Have to install these 3 for fontawesome to work*
//npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest
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
