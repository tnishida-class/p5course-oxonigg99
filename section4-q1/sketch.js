// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;

  let px, py; // 線を引くために一つ前の点を覚えておく変数

  for(let i = 0; i < scores.length; i++){
  //  if(i>0){
  //    px=(i-1)*width/scores.length
  //    py=scores[i-1]*height/100
  //    strokeWeight(2)
  //    line(px+dx/2,py,i*dx+dx/2,scores[i]*height/100);
  //    strokeWeight(10);//点だけ太くするやり方がわかりません:strokeWeight → line → strokeWeight → point とすればOKです
  //    point(px+dx/2, py);
  //  }
    if(i>=0){
      px=i*width/scores.length
      py=scores[i]*height/100
      strokeWeight(2)
      line(px+dx/2,py,(i+1)*dx+dx/2,scores[i+1]*height/100);
      strokeWeight(10);//点だけ太くするやり方がわかりません:strokeWeight → line → strokeWeight → point とすればOKです
      point(px+dx/2, py);
    }
//    if(i==scores.length-1){
//      strokeWeight(10)
//     point((i+1)*dx+dx/2,scores[i+1]*height/100)
   //}
    // BLANK[1]
  }
}
