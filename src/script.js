const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = 600);
const height = (canvas.height = 600);
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
  context.drawImage(player, 0, 0, 200, 200, 0, 0, width, height);

  requestAnimationFrame(animate);
}

animate();
