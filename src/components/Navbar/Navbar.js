import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './style.css';
import SearchBar from './SearchBar';


class Navbar extends Component {
    render() {
        return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Home</h1>
            <div><SearchBar /></div>
            
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                      <h1 key={index}>
                        <a className={item.cName} href={item.url}>
                        {item.img} {item.title}
                        </a>
                      </h1>  
                    )
                })}
            </ul>    
        </nav>
        )}
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
