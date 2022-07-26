import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeaderDropdown = (props) => {
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
                    <span className="material-symbols-outlined dropdown-icon">menu</span>  
                </div>
            </button>

            {open ? (
                <div className="dropdown-wrapper">
                    <ul>
                        <li className="dropdown-item"> <Link to={'/'}> <p className="logout-button">Home</p></Link></li>
                        <li className="dropdown-item"> <Link to={'/profile'} > <p className="logout-button">My Posts</p></Link></li>
                        <li className="dropdown-item"> <Link to={'/posts/new'}> <p className="logout-button">Create Post</p></Link> </li>
                        <li className="dropdown-item"> <p className="logout-button" onClick={props.logout}>Logout</p> </li>

                    </ul>
                </div>
            ) 
            : null
        }
        </div>


    )

}

export default HeaderDropdown;