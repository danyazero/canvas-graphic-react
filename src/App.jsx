import './App.css'
import {Circle, Line} from "react-konva";
import {Canvas} from "./Components/Canvas.jsx";
import {findFunctionPoints} from "./Components/ProcessFunction.js";
import {processScale} from "./Components/processScale.js";
import {useEffect, useState} from "react";

function App() {

    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [scale, setScale] = useState(6)

    useEffect(() => {
        setScale(Math.max(Math.abs(parseInt(start)), Math.abs(parseInt(end))))
    }, [start, end])

  return (
    <>
        <div className={"inputs"}>
            <p>Ліва границя: </p>
            <input placeholder={"Left border"} value={start} onChange={(event) => setStart(event.target.value)}/>
            <p>Права границя: </p>
            <input placeholder={"Right border"} value={end} onChange={(event) => setEnd(event.target.value)}/>
            <p>Масштаб: </p>
            <input type={"number"} value={scale} onChange={(event) => setScale(parseInt(event.target.value))}/>
        </div>
        <Canvas>
            <Line
                x={0}
                y={0}
                points={[window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight]}
                tension={0.5}
                stroke="black"
            />

            <Line
                x={0}
                y={0}
                points={[0, window.innerHeight / 2, window.innerWidth, window.innerHeight / 2]}
                tension={0.5}
                stroke="black"
            />

            {start && end ? findFunctionPoints(parseFloat(start), parseFloat(end), 0.001, processScale(scale)).map((element, index) => <Circle key={"point_" + index} x={element.x} y={element.y} radius={4} fill="green"/> ) : <></>}
        </Canvas>
    </>
  )
}

export default App
