import { React, useState, useEffect, useRef } from "react";
import Menu from './canvas_menu';
import "./canvas.css"
// import * as S3 from 'aws-sdk/clients/s3';

const img = new Image();
img.crossOrigin="anonymous"
img.crossOrigin="anonymous"
let loaded = false
let count = 1

function CanvasComponent(props) {
    // console.log("CANVAS Props",props)
    const canvasElement = useRef(null);
    const canvasContext = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineColor, setLineColor] = useState("black");
    const [drawSize, setDrawSize] = useState(5);

    //see lines 46-47 for loading the image on the canvas to draw over 
    // console.log("loaded",loaded)
    const history = []
    
    
    
    useEffect(() => {
        const canvas = canvasElement.current;
        // console.log("canvas", canvas)
        // console.log("canvas typeof", typeof canvas)
        // console.log("canvaselement", canvasElement.current)
        // console.log("canvaselement", typeof canvasElement.current)

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

    if (props.parentURL ){
        // console.log("HI")
        // window.img = img        
        img.onload = () => {  setTimeout(() => { canvasContext.current.drawImage(img, 0, 0)  }, 10); } 
        // // stalling for fraction of second async makes it so it doesn't glitch on loading
        // window.img.crossOrigin = "anonymous"
        // window.img.crossorigin = "anonymous"
        img.src=`${props.parentURL}`
        // console.log(`${props.parentURL}`)
        // console.log("console img src",img.src=`${props.parentURL}?${count}`)
        // img.src=`${props.parentURL}?${count}`
        // console.log("console img src",img.src=`${props.parentURL}?${count}`)

        count += 1
        // console.log("count is rediculout", count)
        // img.src = `https://crossorigin.me/${props.parentURL}`

        // loaded = true
        // console.log("loaded after",loaded)
    }
    
    const start = (e) => {
        canvasContext.current.beginPath();
        canvasContext.current.moveTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
            );
        setIsDrawing(true)
    }


        
    // async function loadImage(url) {
    //     const response = await fetch(url);
    //     const blob = response.ok && await response.blob();
    //     return createImageBitmap(blob);
    // }

    // loadImage("https://mernstackpaint.s3.us-west-1.amazonaws.com/1658975615541").then((imagefetch) => { canvasContext.current.drawImage(imagefetch, 0, 0);
    // });



        
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
        // console.log(canvasElement.current.toDataURL('image/svg'))
    }

    // console.log("THIS IS THE CANVAS PROPS", props)
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