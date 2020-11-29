"use strict";

let canvasWidth = 800;
let canvasHeight = 600;

let sourceX = 520;
let sourceY = 120;
let marioWidth = 18;
let marioHeight = 18;

let marioX = 10;
let marioY = 50;

let marioSpeedX = 5;
let marioSpeedY = 0;

window.onload = function() {

  let sheet = new Image();   // maak nieuw img element

  let canvas = document.getElementById("mario");
  let ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false; // voorkom antialias effect

  var gameLoop = function(){
    // maak canvas leeg
    ctx.fillStyle = "#9999ee";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    marioX += marioSpeedX;
    marioY += marioSpeedY;

    if(marioX > canvasWidth){
      marioX = 0;
    }

    // teken
    ctx.drawImage(sheet, sourceX, sourceY, marioWidth, marioHeight, marioX, marioY, 64, 64);

    // blijf loopen...
    requestAnimationFrame(gameLoop);
  }

  // als spritesheet is geladen, start dan gameloop
  sheet.addEventListener('load', function(){
    requestAnimationFrame(gameLoop);
  }, false);

  // zet bronbestand van plaatje. De browser begint na dit commando
  // naar het plaatje te zoeken en zal proberen het te laden. als dat gelukt is
  // wordt de event handler op regel 45 aangeroepen
  sheet.src = 'img/sheet.png';
};
