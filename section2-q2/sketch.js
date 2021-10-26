// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();

  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if ((i+j)%2!=0) {//i+tが2でわりきれない。else＝2で割り切れるは白空きなので省略
        fill(128,128,128);//グレー塗りつぶし
        rect(size*i,size*j,size,size);//長方形かく
      }


      if((i+j)%2!=0&&j>=0&&j<3){//↑の条件勝つj：y座標が0，1．2
        fill(255,0,0);//赤塗りつぶし
        ellipse(size*(i+1/2),size*(j+1/2),size*0.8)//中心が四角の真ん中、直径四角の6/7の円
      }

      if((i+j)%2!=0&&j>=5&&j<8){
        fill(0,0,0);
        ellipse(size*(i+1/2),size*(j+1/2),size*0.8)
      }


    }
  }
}
