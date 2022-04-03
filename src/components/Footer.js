import React from "react";
import {Link} from "react-router-dom";
export default function Footer() {
    let defaultStyle = {
        position: "relative",
        width:"100%"
    };
  return (
        <footer className="py-3 my-4" style={defaultStyle}>
            <p className="text-center text-muted">© {(new Date().getFullYear())} ToDo, Sudip</p>
        </footer>
    );
}
