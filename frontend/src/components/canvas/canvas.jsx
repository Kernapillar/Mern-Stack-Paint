import { React, useState, useEffect, useRef } from "react";
import Menu from './canvas_menu';
import "./canvas.css"
// import * as S3 from 'aws-sdk/clients/s3';

function CanvasComponent() {
    const canvasElement = useRef(null);
    const canvasContext = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineColor, setLineColor] = useState("black");
    const [drawSize, setDrawSize] = useState(5);

    const history = []


    useEffect(() => {
        const canvas = canvasElement.current;
        const ctx = canvas.getContext("2d");
        
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = 1;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = drawSize;
        canvasContext.current = ctx;
    }, [lineColor, drawSize]);

    const clearCanvas = () =>  {
        canvasContext.current.fillStyle = "white"
        canvasContext.current.clearRect(0, 0, canvasElement.current.width, canvasElement.current.height)
        canvasContext.current.fillRect(0, 0, canvasElement.current.width, canvasElement.current.height)
    }

    const start = (e) => {
        canvasContext.current.beginPath();
        canvasContext.current.moveTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        setIsDrawing(true)
    }

    const stop = (e) => {
        canvasContext.current.closePath();
        setIsDrawing(false);
    }
 
    const draw = (e) => {
        if (!isDrawing) {
            return;
        } 
        canvasContext.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        canvasContext.current.stroke();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(canvasElement.current.toDataURL('image/svg'))
    }


    return (
        <div className="canvas-element">
            <Menu className="canvas-menu" setLineColor={setLineColor} setDrawSize={setDrawSize} clearCanvas={clearCanvas}
            handleSubmit={handleSubmit}/>
            <canvas className="draw-area" id="canvas-page-element"
            onMouseDown={start} 
            onMouseUp={stop} 
            onMouseMove={draw}
            ref={canvasElement}
            width={'945px'}
            height={'558px'}/>
        </div>
    )
}

export default CanvasComponent;