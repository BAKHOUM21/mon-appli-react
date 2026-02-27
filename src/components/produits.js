import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/produits.css';
const link = '.././images/bagnol.jpg';
const title = 'Ma voiture';
class Produits extends Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="container expand-lg d-flex ml-1">
                <div className="card col-sm-5 mt-2 ml-1">
                    <div className="card-header">
                        {title}
                    </div>
                    <div className="card-body">
                        <div className="m-auto">
                            <img src={link} className="m-auto imgs" />
                        </div>
                        <div className="ml-2 mt-2">
                            <button className="btn btn-primary float-start">+</button>
                            <button className="btn btn-primary float-end">-</button>
                        </div>

                    </div>
                </div>
                <div className="card col-sm-5 mt-2 float-end">
                    <div className="card-header">
                        {title}
                    </div>
                    <div className="card-body">
                        <div>
                            <img className="imgs" src={link} />
                        </div>
                        <div className="ml-2 mt-2">
                            <button className="btn btn-primary start">+</button>
                            <button className="btn btn-primary float-end">-</button>
                        </div>

                    </div>
                </div>

            </div>
        );
        // function submit() {
        //     let form = document.getElementById("form");
        //     form.style.backgroundColor = 'yellow';
        //     document.location.href = 'http://localhost:4200/produits';

        // }
        // function restart() {
        //     let form = document.getElementById("form");
        //     form.style.backgroundColor = 'indigo';
        // }
    }
}
export default Produits;