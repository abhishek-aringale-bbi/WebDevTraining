let adjust=document.getElementById("adjust");
let position;
adjust.addEventListener("mousedown", onmousedown,true);
adjust.addEventListener("mouseup", onmouseup,true);
adjust.addEventListener("mousemove",function(e){
    e.preventDefault();
    // console.log("sddf")
    if(isdown){
        // position=adjust.offsetX-e.clientX;
        position=e.clientX-e.offsetX;
        console.log(position)
    }
    // let transform = 'translate(' + position + 'px,' + 0 + 'px)';
        // adjust.style.transform = transform;
        adjust.style.left=position;

});

// function drag(e){
//     e.preventDefault();

// }
let offset;
let isdown=false;
let x;
function onmousedown(event){
    // let x=event.screenX;
    // console.log(x)
    // adjust.style.left=x;
    isdown=true;
    x=adjust.offsetX;
    console.log(x);
    console.log(event.clientX)
    console.log(event.screenX)
    console.log(event.offsetX)
}
function onmouseup(){
    
    isdown=false;
}
