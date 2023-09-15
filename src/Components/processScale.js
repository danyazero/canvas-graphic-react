export function processScale(userScale){
    const scale = (window.innerWidth / 2) / userScale
    return scale;
}

export function convertCords(x, y, scale){
    const nullPointerX = window.innerWidth / 2
    const nullPointerY = window.innerHeight / 2

    const x1 = nullPointerX + (x * scale)
    const y1 = nullPointerY - (y * scale)

    return {x: x1, y: y1}
}