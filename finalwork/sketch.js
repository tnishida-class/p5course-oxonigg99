// 最終課題を制作しよう

let x,y,vx,vy,w,h,vw,vh,marioX,marioY,vmarioX,vmarioY
let count,cycle,grabbed,img;
const g = 1; // 重力加速度
const vmarioYMax = 30;

//マリオの画像用意
function preload() {
  img = loadImage('mariolast.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  x =width*4/5;
  y =height/5 ;
  vx = 0;
  vy = 0;
  grabbed = false;

  //心臓関連の設定
  count = 0;
  cycle = 100;
  //marioに関して代入
  marioX=0;
  marioY=height-230;
  vmarioX=2;
  vmarioY=2;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function star(x, y, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x1 = x + cos(theta) * r;
    let y1= y + sin(theta) * r;
    vertex(x1,y1);
  }
  stroke(255,255,0);
  strokeWeight(10);
  fill(255,255,0);
  endShape(CLOSE);

  fill(0);
  textSize(30);
  text('･･', x-15, y+3);
  textSize(10);
  text('∇', x-5, y+10);
}


function heart(w,h,heartR){
  stroke(255,0,0);
  strokeWeight(1);
  fill(255,0,0);
  arc(w, h, 1.5*heartR, 3*heartR,0-QUARTER_PI,(PI-QUARTER_PI),CHORD);
  arc(w, h,3*heartR, 1.5*heartR,HALF_PI,7*PI/4,CHORD);
}

function draw(){
  background(160, 192, 255);

  star(x,y,40)
  if(!grabbed){
    x += vx;
    y += vy;
    if(x < 0 || x > width){ vx = -0.8 * vx; }
    if(y < 0 || y > height){ vy = -0.8 * vy; }
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }

  //マリオ動くようにする
  image(img, marioX, marioY);//マリオ画像
  marioX +=0;
  marioY += vmarioY;
  vmarioY = constrain(vmarioY + g, -vmarioYMax, vmarioYMax);
  if(keyIsDown(LEFT_ARROW)){marioX-=5;}
  if(keyIsDown(RIGHT_ARROW)){marioX+=5;}
  if(marioY>=height-230 &&keyIsDown("A".charCodeAt(0))){vmarioY=-20};//地面にいるときしか飛べない
  if(marioY > height){ vmarioY = 0; }//マリオは画面下で止まる。
  marioX = constrain(marioX, 0, width-200);//画面外に行かないように
  marioY= constrain(marioY, 0, height-230);//埋まらないようにする


  //ここからはマリオの心臓
  w=marioX+100;
  h=marioY+120;
  vw=2;
  vh=2;
  if(dist(marioX,marioY, x, y) <200){count = (count + 10) % cycle;}
  else{count = (count+1) % cycle;}
  stroke(0);
  fill(255,0,0);
  let size= count/2;
  if(count>=0 && count<=40){heart(w, h, size/2+10);}
  if(count>40 && count<=50){heart(w,h, 2*(size)^2);}
  if(count>50 && count <=60){heart(w,h, 2*(cycle/2-size)^2);}
  if(count>60 && count <=100){heart(w,h, (cycle/2-size)/2+10);}
}



//starの機能
function keyPressed(){
  if(key == " "){　// スペースキーを押したらリセット
    x = width*4/5;
    y = height/5 ;
    vx = 0;
    vy = 0;
    grabbed = false;
    marioX=0;
    marioY=height-230
    vmarioX=0;
    vmarioY=0;
  }
}

function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 1000; // distは２点の距離を求める関数
}

function mouseDragged(){
  if(grabbed){
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased(){
  if(grabbed){
    grabbed = false;
    vx =(mouseX - pmouseX)*2;
    vy =(mouseY - pmouseY)*2;
  }
}
