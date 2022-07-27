
import React from "react";
import "./canvas.css"


const Menu = ({setLineColor, setDrawSize, clearCanvas, handleSubmit }) => {

    

    return (
        <div className="canvas-menu">
            
            <div className="color-pallette">
                <button  className="color-button red" onClick={(e) => {e.preventDefault(); setLineColor("red")}}></button>
                <button  className="color-button orange" onClick={(e) => {e.preventDefault(); setLineColor("orange")}}></button>
                <button  className="color-button yellow" onClick={(e) => {e.preventDefault(); setLineColor("yellow")}}></button>
                <button  className="color-button green" onClick={(e) => {e.preventDefault(); setLineColor("green")}}></button>
                <button  className="color-button blue" onClick={(e) => {e.preventDefault(); setLineColor("blue")}}></button>
                <button  className="color-button indigo" onClick={(e) => {e.preventDefault(); setLineColor("indigo")}}></button>
                <button  className="color-button violet" onClick={(e) => {e.preventDefault(); setLineColor("violet")}}></button>
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