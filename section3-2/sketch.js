// テキスト「アニメーションの基本」マリオ
let x, y, vx, vy;
const g = 1; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 30);


  x +=0 ;
  y += vy;
 //vy += g;  //速度＝速度の変化量
  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vy = constrain(vy + g, -vyMax, vyMax); // 速度が大きくなりすぎないように調整 マリオは重力に引っ張られるのはある
//  if(y < 0 || y > height){ vy = 0; }
//  y = constrain(y, 0, height);
if(keyIsDown(LEFT_ARROW)){x-=5;}
if(keyIsDown(RIGHT_ARROW)){x+=5;}
if(y>=height - 10 &&keyIsDown(" ".charCodeAt(0))){vy=-20}//地面にいるときしか飛べない


   //端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }

　// 端の処理パターン (2) 跳ね返る
  //if(x < 0 || x > width){ vx = -1 * vx; }
  if(y > height){ vy = 0; }//マリオは画面下で止まる。
  x = constrain(x, 0, width);//画面外に行かないように
  y = constrain(y, 0, height-10);//埋まらないようにする
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
