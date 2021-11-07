//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;
let count;
let x,y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  x=random(0,width)
  y=random(0,height)
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  //　b.size=random(1,40);
  }
}
　 count = (count+1) % cycle;
  if(count>0 && count<20){
    ellipse(x,y,)
  }




function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
 const r = random(10,30)
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size:r, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
