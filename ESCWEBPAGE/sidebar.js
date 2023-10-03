// let adjust = document.getElementById("adjust");
// let position;
// adjust.addEventListener("mousedown", onmousedown, true);
// adjust.addEventListener("mouseup", onmouseup, true);
// adjust.addEventListener("mousemove", function (e) {
//   e.preventDefault();
//   // console.log("sddf")
//   if (isdown) {
//     // position=adjust.offsetX-e.clientX;
//     position = e.clientX - e.offsetX;
//     console.log(position);
//   }
//   // let transform = 'translate(' + position + 'px,' + 0 + 'px)';
//   // adjust.style.transform = transform;
//   adjust.style.left = position;
// });

// // function drag(e){
// //     e.preventDefault();

// // }
// let offset;
// let isdown = false;
// let x;
// function onmousedown(event) {
//   // let x=event.screenX;
//   // console.log(x)
//   // adjust.style.left=x;
//   isdown = true;
//   x = adjust.offsetX;
//   console.log(x);
//   console.log(event.clientX);
//   console.log(event.screenX);
//   console.log(event.offsetX);
// }
// function onmouseup() {
//   isdown = false;
// }

// const draggable = document.getElementById("adjust");
// let isDragging = false;
// let offsetX = 0;

// draggable.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   offsetX = e.clientX - draggable.getBoundingClientRect().left;
//   draggable.style.cursor = "grabbing";
// });

// document.addEventListener("mousemove", (e) => {
//   if (isDragging) {
//     const newX = e.clientX - offsetX;
//     draggable.style.left = `${newX}px`;
//   }
// });

// document.addEventListener("mouseup", () => {
//   if (isDragging) {
//     isDragging = false;
//     draggable.style.cursor = "grab";
//   }
// });

const draggable = document.getElementById("adjust");
let content = document.getElementById("content");
let sidebar = document.getElementById("sidebar");
// sidebar.style.width=300px;
console.log(sidebar);
console.log(content);
console.log(draggable);
let isDragging = false;
let startX, startLeft;

draggable.addEventListener("mousedown", (e) => {
  console.log("1");
  isDragging = true;
  startX = e.clientX;
  //   console.log(startX);
  startLeft = parseFloat(getComputedStyle(draggable).left) || 0;
  draggable.style.transition = "none";
});

document.addEventListener("mousemove", (e) => {
  console.log("2");
  if (!isDragging) return;
  const offsetX = e.clientX - startX;
  //   console.log(offsetX);
  //   console.log(startLeft);
  //   console.log(e.offsetX);
  const newLeft = startLeft + offsetX;

  let width1 = getComputedStyle(sidebar).width;
  //   console.log(width1);

  let width2 = getComputedStyle(content).width;
  let z = parseInt(width2) - newLeft;
  console.log(z);

  // ............
  if (newLeft >= 0) {
    console.log("xx");
    draggable.style.left = newLeft + "px";
    // content.style.width = `${width2 - newLeft}px`;
    // content.style.left = newLeft + "px";
    content.setAttribute("style", `width:${newLeft}px`);
  } else if (newLeft < 0) {
    let a = newLeft;
    console.log(parseInt(width1) - 5);
    draggable.style.left = newLeft + "px";
    sidebar.setAttribute("style", `width:${newLeft}px`);
  }
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    draggable.style.transition = ""; // Re-enable transitions when dragging ends
  }
});
