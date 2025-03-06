function decrement(id) {

    const ele = document.getElementById(id);
    const eleText = ele.innerText;
    const eleNum = parseInt(eleText);

    if (eleNum - 1 === -1) {
        alert("ar niche jaio na")
        return
    }

    const finalRes = eleNum - 1;
    ele.innerText = finalRes;
}
function increment(id) {

    const ele = document.getElementById(id);
    const eleText = ele.innerText;
    const eleNum = parseInt(eleText);
    const finalRes = eleNum + 1;
    ele.innerText = finalRes;
}
function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let  i=0; i<6; i++)
    {
        const randomChar = letters[Math.round(Math.random()*16)]
        color+=randomChar
    }
    return color;
    
}