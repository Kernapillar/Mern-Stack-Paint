import React from "react";
import "./canvas.css"


const Menu = ({setLineColor, setDrawSize, clearCanvas }) => {

    const colorsArr = ['white','red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black']
    
    return (
        <div className="canvas-menu">
            <div className="color-palette">
                {colorsArr.map((color => 
                <button  className={`color-button ${color}`} onClick={(e) => {e.preventDefault(); setLineColor(color)}}></button>))}
                <label> Color &nbsp;
                    <input type="color" onChange={(e) => {
                        setLineColor(e.target.value)}} className="color-changer"/>
                </label>
            </div>
            <label> Pen Size &nbsp;
                <input type="range" min={3} max={20} defaultValue={10} onChange={(e) => {setDrawSize(e.target.value)}} className="pen-size-scroll"/>
            </label>
            <button onClick={(e) => {e.preventDefault(); clearCanvas()}} className="canvas-button">clear all</button>
        </div>
    )
}
export default Menu;