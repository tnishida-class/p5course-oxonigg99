// 小手調べ
function setup(){
  noFill();//この先埋めない
  for(let i = 0; i < 10; i++){
    let r=i*10+10;
    if(i<5){//iが01234のとき
      stroke(0,0,255);//blue
    }
    else{
      stroke(255,0,0);//red
    }
 ellipse(50,50,r);//色は円かくまえ
}
}
