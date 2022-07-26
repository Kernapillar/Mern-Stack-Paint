
import React from "react";
import "./canvas.css"


const Menu = ({setLineColor, setDrawSize, clearCanvas, handleSubmit }) => {
    return (
        <div className="canvas-menu">
            
            <div className="color-pallette">
                <button  className="color-button red" onClick={() => setLineColor("red")}>red</button>
                <button  className="color-button orange" onClick={() => setLineColor("orange")}>orange</button>
                <button  className="color-button yellow" onClick={() => setLineColor("yellow")}>yellow</button>
                <button  className="color-button green" onClick={() => setLineColor("green")}>green</button>
                <button  className="color-button blue" onClick={() => setLineColor("blue")}>blue</button>
                <button  className="color-button indigo" onClick={() => setLineColor("indigo")}>indigo</button>
                <button  className="color-button violet" onClick={() => setLineColor("violet")}>violet</button>
                <label> Color 
                <input type="color" onChange={(e) => {
                    setLineColor(e.target.value);
                }} 
                />
            </label>
            </div>
            <button onClick={() => clearCanvas()}>clear all</button>

            <label> Pen Size 
                <input type="range" min={3} max={20} defaultValue={10} onChange={(e) => {setDrawSize(e.target.value)}} />
            </label>

            <button className="canvas-submit" onClick={()=> handleSubmit()}>
                submit picture
            </button>
        </div>
    )
}
export default Menu;