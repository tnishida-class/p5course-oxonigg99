// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;//何回したか数えているもの。0スタートで下にどうやって変化していくか入れる
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;//12345・・て変数が順に変わる。周期的な動き、おきまりcycle=周期の長さ
  // BLANK[1]
  let size= count;
//  if(count>0 && count<50){
//  ellipse(width / 2, height / 2, size^2);
  // fill(255,0,0);//
// }

//  if(count=50){
  //ellipse(width / 2, height / 2, size*2);
  // fill(255,0,0);//
  //}

  //if(count>50 && count<100){
//  ellipse(width / 2, height / 2, (cycle-size)^2);
  // fill(255,0,0);//
//  }
  if(count>0 && count<=40){
  ellipse(width / 2, height / 2, size/2);
   fill(255,0,0);//
 }

  if(count>40 && count<=50){
  ellipse(width / 2, height / 2, 3*(size)^2);
     fill(255,0,0);//
}
if(count>50 && count <=60){
ellipse(width / 2, height / 2, 3*(cycle-size)^2);
   fill(255,0,0);//
}
if(count>60 && count <=100){
 ellipse(width / 2, height / 2, (cycle-size)/2);
   fill(255,0,0);//
}
}
