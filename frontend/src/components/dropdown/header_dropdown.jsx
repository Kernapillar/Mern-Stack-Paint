import React from "react";
import { useState, useEffect, useRef } from "react";


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
            <span class="material-symbols-outlined">menu</span>  </button>

            {open ? (
                <div className="dropdown-wrapper">
                    <ul>
                        <li className="dropdown-item"> <p className="logout-button" onClick={props.logout}>Log Out</p> </li>
                    </ul>
                </div>
            ) 
            : null
        }
        </div>


    )

}

export default HeaderDropdown;