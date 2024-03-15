import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/form.css';
class Form extends Component {

    render() {
        const state = {
            name: 'dmb@dev.com'
        };
        const hundleChange = (e) => {
            console.log(e.target.value);
        }
        return (
            <div className="container-fluid col-sm-6 " >
                <div className="row mt-5 m-auto">
                    <form className="form-horizontal" action="/action_page.php">
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="email">Email:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label className="control-label col-sm-2" for="pwd">Password:</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password"/>
                            </div>
                        </div>
                        <div className="form-group mt-2">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-primary float-end">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
        function submit() {
            let form = document.getElementById("form");
            form.style.backgroundColor = 'yellow';
            document.location.href = 'http://localhost:3000/produits.js';

        }
        function restart() {
            let form = document.getElementById("form");
            form.style.backgroundColor = 'indigo';
        }
    }
}
export default Form;