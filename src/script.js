const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = 600);
const height = (canvas.height = 600);
const spriteW = 575;
const spriteH = 523;

let x = 0;
let y = 1;

const player = new Image();

player.src = "images/shadow_dog.png";

function animate() {
  // clear the area
  context.clearRect(0, 0, width, height);

  //add with  basic shape to area
  //context.fillRect(50, 50, 100, 100);

  //ref
  //context.drawImage(image, sx, sy, sw, sh,dx, dy, dw, dh);

  //add player to area
  context.drawImage(
    player,
    x * spriteW,
    y * spriteH,
    spriteW,
    spriteH,
    0,
    0,
    spriteW,
    spriteH
  );

  requestAnimationFrame(animate);
}

animate();
