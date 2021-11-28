// 最終課題を制作しよう

// テキスト「インタラクティブなアニメーション」円をつかんで投げる
let x, y, vx, vy,　w ,h,vw,vh;
let count;
let cycle;
let grabbed; // 円をつかんでいるかどうかを記憶するために使う変数
let img;
//marioXについて 宣言
let marioX;
let marioY;
let vmarioX;
let vmarioY;
const g = 1; // 重力加速度
const vmarioYMax = 30;


//marioの画像を乗
function preload() {
  img = loadImage('mariolast.png');
}




function setup(){//最初
  createCanvas(windowWidth, windowHeight);
  x =width*4/5;
  y =height/5 ;
  vx = 0;
  vy = 0;
  grabbed = false;

  //心臓関連の設定
  count = 0;//何回したか数えているもの。0スタートで下にどうやって変化していくか入れる
  cycle = 100;
//marioに関する定数宣言
 marioX=0;
 marioY=height-230;
 vmarioX=2
 vmarioY=2
}


function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y= cy + sin(theta) * r;
    vertex(x,y);
  }
  stroke(255,255,0)
  strokeWeight(10)
  fill(255,255,0)
  endShape(CLOSE);

  fill(0)
  textSize(30)
  text('･･', x-15, y+3)
  textSize(10)
  text('∇', x-5, y+10)//
}


function heart(w,h,heartR){
  stroke(255,0,0)
  strokeWeight(1)
  fill(255,0,0);
  arc(w, h, 1.5*heartR, 3*heartR,0-QUARTER_PI,(PI-QUARTER_PI),CHORD)
  arc(w, h,3*heartR, 1.5*heartR,HALF_PI,7*PI/4,CHORD)
}



function draw(){
  background(160, 192, 255);
  star(x,y,40)
  if(!grabbed){ // つかんでいないときだけスターをアニメーションさせる
    x += vx;
    y += vy;
    if(x < 0 || x > width){ vx = -0.8 * vx; }
    if(y < 0 || y > height){ vy = -0.8 * vy; }
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
}

  //マリオの画像乗せる（位置可変にしたい）

  image(img, marioX, marioY);//マリオ画像

  //マリオの画像は動くのか
marioX+=0 ;
marioY += vmarioY;

 vmarioY = constrain(vmarioY + g, -vmarioYMax, vmarioYMax);
 if(keyIsDown(LEFT_ARROW)){marioX-=5;}
 if(keyIsDown(RIGHT_ARROW)){marioX+=5;}
 if(marioY>=height-230 &&keyIsDown("A".charCodeAt(0))){vmarioY=-20}//地面にいるときしか飛べない


  // 端の処理パターン (2) 跳ね返る
  //if(x < 0 || x > width){ vx = -1 * vx; }
  if(marioY > height){ vmarioY = 0; }//マリオは画面下で止まる。
  marioX = constrain(marioX, 0, width);//画面外に行かないように
  marioY= constrain(marioY, 0, height-230);//埋まらないようにする


  //ここからはマリオの心臓 keyIsDown(" ".charCodeAt(0))←IFの中身元々
   w=marioX+100
   h=marioY+120
   vw=2
   vh=2
  if(dist(w,h, x, y) < 100){count = (count + 9) % cycle;}
  else{count = (count+1) % cycle;}

  stroke(0)
  fill(255,0,0);
  let size= count/2;
  if(count>=0 && count<=40){heart(w, h, size/2+10);}
  if(count>40 && count<=50){heart(w,h, 2*(size)^2);}
  if(count>50 && count <=60){heart(w,h, 2*(cycle/2-size)^2);}
  if(count>60 && count <=100){heart(w,h, (cycle/2-size)/2+10);}

}

//x,yなのでstarの機能
function keyPressed(){
  if(key == " "){　// スペースキーを押したらリセット
    x = width*4/5;
    y = height/5 ;
    vx = 0;
    vy = 0;
    grabbed = false;
  }
}

function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 30; // distは２点の距離を求める関数
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
    vx =(mouseX - pmouseX)/2;
    vy =(mouseY - pmouseY)/2;
  }
}







function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}




//回転入れようか迷って
//let angle;
//let x1=30;
//let y1=30;
//let heartR=0.2
//function setup(){
//  createCanvas(1000, 1000);
//  background(200);
//   angle = 0;
// //heart(width/2,height/2,1)
//}

//function heart(x1,y1,heartR){

//function draw(){
//     background(200);
//    rectMode(CENTER);
//    translate(100, 200);
//  rotate(angle);
//fill(0);
//arc(x1, y1, 150*heartR, 300*heartR,0-QUARTER_PI,(PI-QUARTER_PI),CHORD)

//arc(x1, y1,300*heartR, 150*heartR,HALF_PI,7*PI/4,CHORD)
// resetMatrix();

//  angle += TWO_PI * 0.002;

//  }
