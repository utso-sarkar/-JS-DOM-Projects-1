// create on load hand

window.onload= ()=> {
    main();
};
function main(){
    const root =document.getElementById('root');
    const btn =document.getElementById('Change-color');
    btn.addEventListener('click',function(){
        const colorChange =generateRgbColor();
        root.style.backgroundColor= colorChange;
    });

}

// random color generator function
function generateRgbColor(){
    const red =Math.floor(math.random()*255);
    const green =Math.floor(math.random()*255);
    const blue =Math.floor(math.random()*255);


    return`rgb(${red},${green},${blue})`
}