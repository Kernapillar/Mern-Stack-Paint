
import React from "react";
import "./canvas.css"


const Menu = ({setLineColor, setDrawSize, clearCanvas, handleSubmit }) => {
    return (
        <div className="canvas-menu">
            
            <div className="color-pallette">
                <button  className="color-button red" onClick={() => setLineColor("red")}></button>
                <button  className="color-button orange" onClick={() => setLineColor("orange")}></button>
                <button  className="color-button yellow" onClick={() => setLineColor("yellow")}></button>
                <button  className="color-button green" onClick={() => setLineColor("green")}></button>
                <button  className="color-button blue" onClick={() => setLineColor("blue")}></button>
                <button  className="color-button indigo" onClick={() => setLineColor("indigo")}></button>
                <button  className="color-button violet" onClick={() => setLineColor("violet")}></button>
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

            <button className="canvas-submit" onClick={(e)=> handleSubmit(e)}>
                submit picture
            </button>
        </div>
    )
}
export default Menu;