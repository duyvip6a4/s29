let arr = [];
let cur = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let vis = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let img1,img2;
function preload(){
  img1 = loadImage('megumi/megumi.png');
  img2 = loadImage('dab/dab.png');
}
//square1
arr[1] = [];
arr[1][0] = [4, 3, 1, 1];
arr[1][1] = [1, 4, 1, 3];
arr[1][2] = [1, 1, 3, 4];
arr[1][3] = [3, 1, 4, 1];
//square2
arr[2] = [];
arr[2][0] = [2, 2, 4, 4];
arr[2][1] = [4, 2, 4, 2];
arr[2][2] = [4, 4, 2, 2];
arr[2][3] = [2, 4, 2, 4];
//square3
arr[3] = [];
arr[3][0] = [4, 2, 2, 4];
arr[3][1] = [2, 4, 4, 2];
arr[3][2] = [4, 2, 2, 4];
arr[3][3] = [2, 4, 4, 2];
//square4
arr[4] = [];
arr[4][0] = [1, 2, 4, 4];
arr[4][1] = [4, 1, 4, 2];
arr[4][2] = [4, 4, 2, 1];
arr[4][3] = [2, 4, 1, 4];
//square5
arr[5] = [];
arr[5][0] = [2, 3, 3, 1];
arr[5][1] = [3, 2, 1, 3];
arr[5][2] = [1, 3, 3, 2];
arr[5][3] = [3, 1, 2, 3];
//square6
arr[6] = [];
arr[6][0] = [4, 4, 3, 4];
arr[6][1] = [3, 4, 4, 4];
arr[6][2] = [4, 3, 4, 4];
arr[6][3] = [4, 4, 4, 3];
//square7
arr[7] = [];
arr[7][0] = [3, 2, 1, 4];
arr[7][1] = [1, 3, 4, 2];
arr[7][2] = [4, 1, 2, 3];
arr[7][3] = [2, 4, 3, 1];
//square8
arr[8] = [];
arr[8][0] = [4, 2, 1, 3];
arr[8][1] = [1, 4, 3, 2];
arr[8][2] = [3, 1, 2, 4];
arr[8][3] = [2, 3, 4, 1];
//square0
arr[0] = [];
arr[0][0] = [4, 2, 3, 2];
arr[0][1] = [3, 4, 2, 2];
arr[0][2] = [2, 3, 2, 4];
arr[0][3] = [2, 2, 4, 3];
//table
let table = [];
table[0] = [0, 0, 0, 0, 0, 0];
table[1] = [0, 0, 0, 0, 0, 0];
table[2] = [0, 0, 0, 0, 4, 2];
table[3] = [0, 0, 0, 0, 3, 2];
table[4] = [0, 0, 0, 0, 0, 0];
table[5] = [0, 0, 0, 0, 0, 0];
//check
let check = [];
check[0] = [-1, -1, -1, -1, -1, -1];
check[1] = [-1, -1, -1, -1, -1, -1];
check[2] = [-1, -1, -1, -1, 0, 0];
check[3] = [-1, -1, -1, -1, 0, 0];
check[4] = [-1, -1, -1, -1, -1, -1];
check[5] = [-1, -1, -1, -1, -1, -1];
let luu, move = 0;
let vtx=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
let vty=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
function setup() {
  createCanvas(700, 500);
}
function init_reg1(x, y) {
  stroke('black');
  fill(255);
  strokeWeight(4);
  rect(x, y, 70, 70);
  strokeWeight(1);
  for (let i1 = 0; i1 < 2; i1++) {
    for (let j1 = 0; j1 < 2; j1++) {
      rect(x + 35 * i1, y + 35 * j1, 35, 35);
    }
  }
}
function prin1(x1, y1, idx) {
  for (let i1 = 0; i1 < 2; i1++) {
    for (let j1 = 0; j1 < 2; j1++) {
      textSize(12);
      textStyle(BOLD);
      fill('black');
      text(
        arr[idx][cur[idx]][i1 * 2 + j1],
        x1 + 35 * j1 + 15,
        y1 + 35 * i1 + 19
      );
    }
  }
}
function puz1(x, y, idx) {
  init_reg1(x, y);
  prin1(x, y, idx);
}
function init_reg2(x, y) {
  stroke('black');
  fill(255);
  strokeWeight(4);
  rect(x, y, 100, 100);
  strokeWeight(1);
  for (let i1 = 0; i1 < 2; i1++) {
    for (let j1 = 0; j1 < 2; j1++) {
      rect(x + 50 * i1, y + 50 * j1, 50, 50);
    }
  }
}
function prin2(x1, y1, idx) {
  for (let i1 = 0; i1 < 2; i1++) {
    for (let j1 = 0; j1 < 2; j1++) {
      textSize(15);
      textStyle(BOLD);
      fill('black');
      text(
        arr[idx][cur[idx]][i1 * 2 + j1],
        x1 + 50 * j1 + 22,
        y1 + 50 * i1 + 27
      );
    }
  }
}
function puz2(x, y, idx) {
  init_reg2(x, y);
  prin2(x, y, idx);
}
//click
function mouseClicked() {
  let ux = mouseX,
    uy = mouseY;
  if (start == 0) {
      // menu
      if (ux >= 150 && ux <= 350 && uy <= 200 && uy >= 160) {
          // play
          start = 1;
      }
      if (ux >= 150 && ux <= 370 && uy <= 275 && uy >= 225) {
          // rule
          start = 2;
      }
      return;
  }
  if (start == 2) {
      // rule
      if (ux >= 10 && ux <= 100 && uy <= 370 && uy >= 340) {
          // back button
          start = 0;
          return;
      }
  }

  for (let i = 1; i <= 8; i++) {
    if (ux >= x[i] && uy >= y[i] && ux <= x[i] + 70 && uy <= y[i] + 70) {
      luu = i;
      move = 1;
      return;
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (ux >= posX[i] && uy >= posY[i] && ux <= posX[i] + 100 && uy <= posY[i] + 100) {
      luu = i;
      move = 1;
      return;
    }
  }
  if (move == 1) {
    posX[luu] = mouseX;
    posY[luu] = mouseY;
    move = 0;
    let Sx = x[luu];
    let Sy = y[luu];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          let cx = 20 + 100 * i;
          let cy = 110 + 100 * j;
          print(cx);
          print(cy);
          let Cx = ux;
          let Cy = uy;
          if (Cx - cx >= 0 && Cx - cx < 25.5 && Cy - cy >= 0 && Cy - cy < 25.5) {
            Sx = cx;
            Sy = cy;
            vtx[luu] = j * 2;
            vty[luu] = i * 2;
            vis[luu] = 1;
            break;
          }
        }
      }
    posX[luu] = Sx;
    posY[luu] = Sy;
    if (vtx[luu] != -1 && vty[luu] != -1) {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          table[vtx[luu] + i][vty[luu] + j] = arr[luu][cur[luu]][i * 2 + j];
          check[vtx[luu] + i][vty[luu] + j] = luu;
        }
      }
      vtx[luu]=-1; vty[luu]=-1;
    }
  }
}
//flip
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    cur[luu] = (cur[luu] + 1) % 4;
  }
}

let x = [0, 390, 490, 350, 450, 550, 350, 450, 550];
let y = [0, 100, 100, 200, 200, 200, 300, 300, 300];
let posX = [0, 390, 490, 350, 450, 550, 350, 450, 550];
let posY = [0, 100, 100, 200, 200, 200, 300, 300, 300];
function rule() {
  background("yellow");
  fill("blue");
  textSize(22);
  text("Ghép các mảnh ghép vào bảng đã cho sao cho 2 số", 330, 150);
  text("bất kì cạnh nhau thuộc 2 mảnh khác nhau đều bằng nhau", 330, 190);
  text("Back", 100, 370);
}
function display() {
  background(220);
  stroke("black");
  fill(255);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      fill(255);
      strokeWeight(4);
      rect(20 + 100 * i, 110 + 100 * j, 100, 100);
      for (let i1 = 0; i1 < 2; i1++) {
        for (let j1 = 0; j1 < 2; j1++) {
          strokeWeight(1);
          rect(20 + 100 * i + 50 * i1, 110 + 100 * j + 50 * j1, 50, 50);
        }
      }
      if (i === 2 && j === 1) {
        for (let i1 = 0; i1 < 2; i1++) {
          for (let j1 = 0; j1 < 2; j1++) {
            textSize(15);
            textStyle(BOLD);
            fill('black');
            text(
              arr[0][cur[0]][i1 * 2 + j1],
              20 + 100 * i + 50 * j1 + 22,
              110 + 100 * j + 50 * i1 + 27
            );
          }
        }
      }
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (luu != i && vis[i] == 0) {
      puz1(x[i], y[i], i);
    } else {
      if (move == 1 && i == luu) {
        puz2(mouseX, mouseY, i);
      } else {
        if (posX[i]>=20 && posX[i]<=320 && posY[i]>=110 && posY[i]<=410) {
          puz2(posX[i], posY[i], i);
        } else {
          puz1(posX[i], posY[i], i);
        }
      }
    }
  }
  let kt = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 1; j < 3; j++) {
      if (check[i * 2][j * 2 - 1] != -1 && check[i * 2][j * 2] != -1) {
        if (table[i * 2][j * 2 - 1] == table[i * 2][j * 2] && table[i * 2 + 1][j * 2 - 1] == table[i * 2 + 1][j * 2]) {
          strokeWeight(6);
          stroke("green");
          line(20 + 100 * j, 110 + 100 * i, 20 + 100 * j, 110 + 100 * (i + 1));
        } else {
          kt = 1;
          strokeWeight(6);
          stroke("red");
          line(20 + 100 * j, 110 + 100 * i, 20 + 100 * j, 110 + 100 * (i + 1));
        }
      }
    }
  }
  for (let i = 1; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (check[i * 2 - 1][j * 2] != -1 && check[i * 2][j * 2] != -1) {
        if (table[i * 2 - 1][j * 2] == table[i * 2][j * 2] && table[i * 2 - 1][j * 2 + 1] == table[i * 2][j * 2 + 1]) {
          strokeWeight(6);
          stroke("green");
          line(20 + 100 * j, 110 + 100 * i, 20 + 100 * (j + 1), 110 + 100 * i);
        } else {
          kt = 1;
          strokeWeight(6);
          stroke("red");
          line(20 + 100 * j, 110 + 100 * i, 20 + 100 * (j + 1), 110 + 100 * i);
        }
      }
    }
  }
  let ktra=0;
  for(let i=0;i<6;i++){
    for(let j=0;j<6;j++){
      if(check[i][j]==-1){
        ktra=1;
      }
    }
  }
  if (kt == 0 && ktra == 0) {
    background(220);
    textSize(50);
    fill("green");
    noStroke();
    text("You win", 300, 300);
    image(img2,250,350);
  }else{
    if(ktra==0){
      background(220);
      textSize(55);
      fill("red");
      noStroke();
      text("You lose", 200, 300);
      image(img1,400,100);
    }
  }
}
let start = 0;
function draw() {
  if(start == 0){
    background(220);
    fill("green");
    textAlign(CENTER, BASELINE);
    text("play", 250, 200);
    textSize(50);
    fill("red");
    text("rule", 250, 275);
  }else{
    if(start == 1){
      display();
    }else{
      rule();
    }
  }
}
