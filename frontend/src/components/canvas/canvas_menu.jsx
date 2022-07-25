import React from "react";

const Menu = ({setLineColor, setDrawSize }) => {
    return (
        <div className="canvas-menu">
            <label> Color 
                <input type="color" onChange={(e) => {
                    setLineColor(e.target.value);
                }} 
                />
            </label>
            <label> Pen Size 
                <input type="range" min={3} max={20} onChange={(e) => {setDrawSize(e.target.value);
                }} 
                />
            </label>
        </div>
    )
}
export default Menu;