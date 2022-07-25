import React from "react";
import "./canvas.css"


const Menu = ({setLineColor, setDrawSize }) => {
    return (
        <div className="canvas-menu">
            <label> Color 
                <input type="color" onChange={(e) => {
                    setLineColor(e.target.value);
                }} 
                />
            </label>
            <div className="color-pallette">
                <button onClick={() => setLineColor("red")}>red</button>
                <button onClick={() => setLineColor("orange")}>orange</button>
                <button onClick={() => setLineColor("yellow")}>yellow</button>
                <button onClick={() => setLineColor("green")}>green</button>
                <button onClick={() => setLineColor("blue")}>blue</button>
                <button onClick={() => setLineColor("indigo")}>indigo</button>
                <button onClick={() => setLineColor("violet")}>violet</button>

            </div>
            <label> Pen Size 
                <input type="range" min={3} max={20} defaultValue={10} onChange={(e) => {setDrawSize(e.target.value);
                }} 
                />
            </label>
        </div>
    )
}
export default Menu;