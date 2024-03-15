import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const link= '.././images/bagnol.jpg';
const title='Ma voiture';
class Produits extends Component {
     
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="container-fluid d-block">
                <div className="card m-2">
                    <div className="card-header">
                        {title}
                    </div>
                    <div className="card-body">
                        <div className=" float-end ml-2">
                            <button className="btn btn-primary">+</button>
                            <button className="btn btn-primary">-</button>
                        </div>
                        <img width={200} src={link} />
                    </div>
                </div>
                <div className="card m-2">
                    <div className="card-header">
                        {title}
                    </div>
                    <div className="card-body">
                        <div className=" float-end ml-2">
                            <button className="btn btn-primary">+</button>
                            <button className="btn btn-primary">-</button>
                        </div>
                        <img width={200} src={link} />
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