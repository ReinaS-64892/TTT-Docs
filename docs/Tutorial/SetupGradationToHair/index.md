---
sidebar_position: 3
---

# 髪にグラデーションを追加する

手っ取り早く髪の毛とかにグラデーションを入れたいそんなときに、汎用性と引き換えにグラデーションに特化した デカール(?)、 SingleGradationDecal を使ってみましょう！

## チュートリアル

はじめに、アバターのルートを右クリックしてから、`TexTransTool/TTT SingleGradationDecal` を選択！  
![CreateSingleGradationDecal](img/sgd-CreateSingleGradationDecal.png)

そしたらこのようなインスペクターが表示されるので、グラデーションを入れたい場所のマテリアルを選択します。今回は髪の毛のマテリアルですね！  
![SelectMaterial](img/sgd-SelectMaterial.png)

選択したらこのように真っ白になると思います！　　
![MaterialSelected](img/sgd-MaterialSelected.png)

後ろから見るとしっぽまで白くなっていますね...今回は髪の毛だけにしたいので アイランドセレクター を使用して髪の毛だけの範囲になるようにしましょう！  
![BackSide](img/sgd-BackSide.png)

[アイランドセレクター](/docs/Reference/IslandSelector) と言ってもいろいろなセレクターが存在するのですが...

今回は球体の範囲内に入ったアイランドを選択できる [SphereIslandSelector](/docs/Reference/IslandSelector#boxislandselector--sphereislandselector) を使用しましょう！  
アバターのルートを右クリックしてから、 `TexTransTool/TTT SphereIslandSelector` を選択！  
![CreteSphereIslandSelector](img/sgd-CreteSphereIslandSelector.png)

生成できたらこのように表示されると思います。生成したセレクターを登録しましょう！  
![ViewSphereIslandSelector](img/sgd-ViewSphereIslandSelector.png)
![SetIslandSelector](img/sgd-SetIslandSelector.png)

登録できたら、 SphereIslandSelector を適当に大きさ変えたり動かしたりして、髪の毛だけ白くなるようにしましょう！  
![AdjustSphereIslandSelector](img/sgd-AdjustSphereIslandSelector.png)

これでグラデーションが適用されうる範囲がいい感じになったので、グラデーション自体の調整をしましょう。

位置や回転を調整したり、 グラデーションの長さ を調整して、今回はこのようにしてみました！  
![AdjustSingleGradationDecal](img/sgd-AdjustSingleGradationDecal.png)

最後に、肝心の グラデーション を指定しましょう！ Unity 標準の UI で操作できます。
キーがそれぞれ、上が透明度、下が色を指定するような形でグラデーションを作成できます。
左側が原点、右側が上の方に対応しすることが適当に変更すると理解できるでしょう！
![Gradation](img/sgd-Gradation.png)

それと、合成モードとなる [ブレンドタイプキー](/docs/Reference/Common/BlendTypeKey) も同時に変更しても良いでしょう。
![BlendTypeKey](img/sgd-BlendTypeKey.png)

今回はこのような感じにしてみました！入れたいグラデーションの色や合成、場所などは場合に応じて変わると思うので臨機応変にね！
![Result](img/sgd-Result.png)

最後に、この状態でこのままアップロードすれば VRChat でも使用できることが確認できます。 髪の毛の色に個性を出したいとき時に使ってみてね！

## クレジット

- あまとうさぎ/Milk Re : https://booth.pm/ja/items/2953391
