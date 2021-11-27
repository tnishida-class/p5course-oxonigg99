function setup() {
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for (let i = 0; i < 10; i++) {scores[i] = random(20, 100);} // 60以上100未満のランダムな数を代入


  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

let start=0//くり返す前は0から(どこに描画されるかはわからない)スタートさせる(繰り返し始めたstartには前のエンドが代入される)
for (let i = 0; i < scores.length; i++) {

 let R =width*0.7;
 let end =start+(scores[i]*TWO_PI)/total ;
 arc(200,200,R,R,start,end,PIE);
 start=end;
  }
}
