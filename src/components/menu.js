import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Menu extends Component {
    render() {
        const logo='../logo512.png';
        const newLocal = "header d-flex";
        return (
            <div className=" menu mt-2 bg-primary h-200 d-flex" height={160}>
                <img alt="logo" src={logo} width={35}/>
                <ul className={newLocal} >
                    <li><a href="/">Acceuil</a></li>
                    <li><a href="/form">Form</a></li>
                    <li><a href="/produits">A_propos</a></li>
                    <li><a href="/form">Contact</a></li>
                </ul>
            </div>
        );
    }
}
export default Menu;