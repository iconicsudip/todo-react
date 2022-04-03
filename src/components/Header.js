import React from "react";
import {Link} from "react-router-dom";
export default function Header(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img src="nothing.gif" alt="" width="30" height="30" className="d-inline-block align-text-top"/>
                TODOO
                </Link>
                <ul className="nav justify-content-center ">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2 text-muted">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link px-2 text-muted">About</Link>
                    </li>
                </ul>
                {props.haveTodo ? "Present ToDo ToDo" : "Absent ToDo ToDo"}
            </div>
        </nav>
    );
}
