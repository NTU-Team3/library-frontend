import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "../../Assets/Styles/navbar.css";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <FontAwesomeIcon icon={faBookOpenReader} />
        </div>
        <div>
          <SearchBar
            onSearchSubmit={this.props.onSearchSubmit}
            returnResult={this.props.returnResult}
            Clear={this.props.Clear}
          />
        </div>

        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <div key={index}>
                <a className={item.cName} href={item.url}>
                  {item.img} {item.title}
                </a>
              </div>
            );
          })}
        </ul>
      </nav>
    );
  }
}

// const Navbar = () => {
//     return
//         <nav className="NavbarItems">
//             <h1
//             className="navbar=logo">Home
//             </h1>
//             <div className="menu-icon">

//             </div>
//             <ul>
//                 {MenuItems.map((item, index) => {
//                     return
//                     (
//                         <li key={index}>
//                             <a className={item.cName}
//                             href={item.url}>
//                             {item.title}
//                             </a>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </nav>
// }

export default Navbar;
