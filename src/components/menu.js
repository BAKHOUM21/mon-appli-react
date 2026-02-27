import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Menu extends Component {
    render() {
        const logo='../logo512.png';
        const newLocal = "header d-flex m-auto pl-3";
        const disp="p-3";
        return (
            <div className="menu mt-2 bg-primary h-200 d-flex pl-3" height={160}>
                <a href="/"><img className='m-3' alt="logo" src={logo} width={35}/></a>
                <ul  className={newLocal}>
                    <li><a href="/">Acceuil</a></li>
                    <li ><a className={disp} href="/form">Form</a></li>
                    <li ><a className={disp} href="/produits">A_propos</a></li>
                    <li ><a className={disp} href="/form">Contact</a></li>
                </ul>
            </div>
        );
    }
}
export default Menu;