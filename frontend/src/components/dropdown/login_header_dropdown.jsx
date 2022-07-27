import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const LoginDropdown = (props) => {
    const [open, setOpen] = useState(false);
    const container = useRef(null)

    const clickOutside= (e) => {
        if(container.current && !container.current.contains(e.target)){
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", clickOutside);
        return () => {
            document.removeEventListener("click", clickOutside);
        };
    });

    return (

        <div className="dropdown-container" ref={container}>
            <button className="dropdown-button" onClick={() => setOpen(!open)}>
                <div className="dd-button">
                    <span className="material-symbols-outlined">menu</span>  
                </div>
            </button>

            {open ? (
                <div className="dropdown-wrapper">
                    <ul>
                        <li className="dropdown-item"> <Link to={'/about'}> <p className="logout-button">About</p></Link></li>
                        <li className="dropdown-item"> <Link to={'/login'}> <p className="logout-button">Login</p></Link> </li>
                        <li className="dropdown-item"> <Link to={'/signup'}><p className="logout-button">Sign Up</p></Link> </li>


                    </ul>
                </div>
            ) 
            : null
        }
        </div>


    )

}

export default LoginDropdown;