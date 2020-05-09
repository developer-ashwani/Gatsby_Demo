import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
 
const footer = () => {
    return (
        <footer className=" pt-4 mt-5 mb-2">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-12 mt-md-0 mt-3">

                        <h3 className="">Medium</h3>
                        <p> © {new Date().getFullYear()}, Medium | All Rights Reserved </p>
                    </div>
                </div>
                <IconContext.Provider value={{  size: "2em", className: "mr-4 mb-3" }}>
                    <div>
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </IconContext.Provider>
                <hr className="d-md-none">
                </hr>
                <div className="row text-center">
                    <div className="col-md-6 text-md-left">
                        <span className="mr-3"> Home </span>
                        <span className="mr-3"> Contact</span>
                        <span className="mr-3"> About</span>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <span className="mr-3"> Privacy Policy </span>
                        <span className="mr-3"> Terms of Services</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default footer;
