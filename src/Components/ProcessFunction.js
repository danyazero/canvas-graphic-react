import {convertCords} from "./processScale.js";

function calculateFunction(x) {
    return Math.cos(x * x) / (x + 1);
}

export function findFunctionPoints(xStart, xEnd, step, scale) {
    let cords = []
    console.log("start " + xStart + ", " + xEnd)
    for (let x = xStart; x <= xEnd; x += step) {
        const y = calculateFunction(x);
        cords.push(convertCords(x, y, scale))
    }
    console.log("end")
    return cords;
}