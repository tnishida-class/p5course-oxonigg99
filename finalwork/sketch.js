// 最終課題を制作しよう

// テキスト「インタラクティブなアニメーション」円をつかんで投げる
let x, y, vx, vy,w,h,vw,vh;
let count;
let cycle;
let grabbed; // 円をつかんでいるかどうかを記憶するために使う変数

function setup(){
  createCanvas(windowWidth, windowHeight);
  x =width*4/5;
  y =height/5 ;
  vx = 0;
  vy = 0;
  grabbed = false;
  star(x,y, 40);
}

//marioの画像を乗せたいんだが
//let img;
//function preload() {
//  img = loadImage('assets/mariomini.jpg');
//}
//function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
//  image(img, 0, windowHeight);
//}


function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y= cy + sin(theta) * r;
    vertex(x,y);
  }//ニコちゃんマークの顔入れたいけど
  endShape(CLOSE);
}

function draw(){
  background(160, 192, 255);
  star(x,y, 30);
  stroke(255,255,0)
  fill(255,255,0)
  if(!grabbed){ // つかんでいないときだけアニメーションさせる
    x += vx;
    y += vy;
    if(x < 0 || x > width){ vx = -0.8 * vx; }
    if(y < 0 || y > height){ vy = -0.8 * vy; }
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }


}

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
    vx = mouseX - pmouseX;
    vy = mouseY - pmouseY;
  }
}


//★と○があたったら○がドキドキするようにしたい？以下引用ｘ、ｙ、をw,hに変えてみた
//let count;
//let cycle;
//let w,h,vw,vh;

//function setup(){
//  createCanvas(200, 200);
//  count = 0;//何回したか数えているもの。0スタートで下にどうやって変化していくか入れる
//  cycle = 100;
//  w=width/2
//  h=height/2
//  vw=2
//  vh=2
//}
//
//function draw(){
//background(160, 192, 255)

//  if(keyIsDown(" ".charCodeAt(0))){
//  count = (count + 3 ) % cycle;//12345・・て変数が順に変わる。周期的な動き、おきまりcycle=周期の長さ
//  }
//  else{count = (count+1) % cycle;}

//  let size= count;
//  if(count>=0 && count<=40){  ellipse(w, h, size/2+10);}
//  if(count>40 && count<=50){ellipse(w,h, 2*(size)^2);}
//  if(count>50 && count <=60){ellipse(w,h, 2*(cycle-size)^2);}
//　if(count>60 && count <=100){ellipse(w,h, (cycle-size)/2+10);}
//　fill(255,0,0);//

}









function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
