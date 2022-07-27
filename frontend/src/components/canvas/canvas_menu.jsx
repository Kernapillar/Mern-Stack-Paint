
import React from "react";
import "./canvas.css"


const Menu = ({setLineColor, setDrawSize, clearCanvas, handleSubmit }) => {

    

    return (
        <div className="canvas-menu">
            
            <div className="color-palette">
                <button  className="color-button red" onClick={(e) => {e.preventDefault(); setLineColor("red")}}></button>
                <button  className="color-button orange" onClick={(e) => {e.preventDefault(); setLineColor("orange")}}></button>
                <button  className="color-button yellow" onClick={(e) => {e.preventDefault(); setLineColor("yellow")}}></button>
                <button  className="color-button green" onClick={(e) => {e.preventDefault(); setLineColor("green")}}></button>
                <button  className="color-button blue" onClick={(e) => {e.preventDefault(); setLineColor("blue")}}></button>
                <button  className="color-button indigo" onClick={(e) => {e.preventDefault(); setLineColor("indigo")}}></button>
                <button  className="color-button violet" onClick={(e) => {e.preventDefault(); setLineColor("violet")}}></button>
                <label> Color &nbsp;
                <input type="color" onChange={(e) => {
                    setLineColor(e.target.value);
                }} className="color-changer"
                />
            </label>
            </div>


            <label> Pen Size &nbsp;
                <input type="range" min={3} max={20} defaultValue={10} onChange={(e) => {setDrawSize(e.target.value)}} className="pen-size-scroll"/>
            </label>
            <button onClick={() => clearCanvas()} className="canvas-button">clear all</button>

        </div>
    )
}
export default Menu;