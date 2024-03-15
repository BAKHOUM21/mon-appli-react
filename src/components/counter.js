import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="container">
                <div className="card d-block m-1">
                    <div className="card-header">
                        {this.props.title}
                    </div>
                    <div className="card-body d-block">
                        <div className="ml-2">
                            <button className="btn btn-primary float-start">+</button>
                            <button className="btn btn-primary float-end">-</button>
                        </div>
                        <img className='mt-2 w-100 h-100' src={this.props.image} />
                    </div>
                </div>
                <div className="card d-block m-1">
                    <div className="card-header">
                        {this.props.title}
                    </div>
                    <div className="card-body d-block">
                        <div className="ml-2">
                            <button className="btn btn-primary float-start">+</button>
                            <button className="btn btn-primary float-end">-</button>
                        </div>
                        <img className='mt-2 w-100 h-100' src={this.props.image} />
                    </div>
                </div>
                <div className="card d-block m-1">
                    <div className="card-header">
                        {this.props.title}
                    </div>
                    <div className="card-body d-block">
                        <div className="ml-2">
                            <button className="btn btn-primary float-start">+</button>
                            <button className="btn btn-primary float-end">-</button>
                        </div>
                        <img className='mt-2 w-100 h-100' src={this.props.image} />
                    </div>
                </div>
                <div className="card d-block m-1">
                    <div className="card-header">
                        {this.props.title}
                    </div>
                    <div className="card-body d-block">
                        <div className="ml-2">
                            <button className="btn btn-primary float-start">+</button>
                            <button className="btn btn-primary float-end">-</button>
                        </div>
                        <img className='mt-2 w-100 h-100' src={this.props.image} />
                    </div>
                </div>
            </div>
        );
        function submit() {
            let form = document.getElementById("form");
            form.style.backgroundColor = 'yellow';
            document.location.href = 'http://localhost:4200/produits';

        }
        function restart() {
            let form = document.getElementById("form");
            form.style.backgroundColor = 'indigo';
        }
    }
}
export default Counter;