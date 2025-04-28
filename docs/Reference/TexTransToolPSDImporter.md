---
sidebar_position: 8
---

# TexTransToolPSDImporter

:::warning
TexTransToolPSDImporter は実験的な機能です！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

[PSD](https://www.adobe.com/devnet-apps/photoshop/fileformatashtml/) を ScriptedImporter を使用し、[MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas) とそれに連なるレイヤーとしてインポートする機能。

## 使い方

.psd のファイルを Unity にインポートし、インスペクターの上部のほうにある Importer の選択で、 `net.rs64.TexTransTool.MultiLayerImage.Importer.TexTransToolPSDImporter` を選択することで使用できます。

## インポート可能なレイヤー

現在これらのレイヤーがインポート可能です。

- [ラスターレイヤー](/docs/Reference/MultiLayerImageCanvas/RasterImportedLayer)
- [レイヤーフォルダー](/docs/Reference/MultiLayerImageCanvas/LayerFolder)
- [べたぬりレイヤー](/docs/Reference/MultiLayerImageCanvas/SolidColorLayer)
- [色調・彩度 調整レイヤー](/docs/Reference/MultiLayerImageCanvas/HSLAdjustmentLayer)
- [色調・彩度・明度 調整レイヤー(クリスタ)](/docs/Reference/MultiLayerImageCanvas/HSVAdjustmentLayer.md)
- [レベル調整レイヤー](/docs/Reference/MultiLayerImageCanvas/LevelAdjustmentLayer)
- [選択的色域調整レイヤー](/docs/Reference/MultiLayerImageCanvas/SelectiveColoringAdjustmentLayer)

エクスポートするアプリケーションで互換性を保持する設定などが有効な場合、これら以外のレイヤーがラスターレイヤーとしてインポートできることがあります。

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

この機能は TexTransTool v0.5.0 から追加されました。

そもそもなぜ、ただの非破壊系ツール(TTT は厳密には非破壊系ツールではないが...)がこんなことを始めたのか ...

ことの発端は、 SimpleDecal の 色合成機能に始まります。その時の私(Reina_Sakiria)は これを適当に使ってレイヤー合成すれば PSD ぐらいなら再現できるんじゃないか ... ? とかなり安易な考えをしていました。

でも、その時の私は PSD の中身を何も知らず、「中身がわかれば実現できそうだなぁ」程度に考えていて、その話を [あの人](https://github.com/bdunderscore) にした時、 PSD の仕様書のリンクを渡されました。私は何にも調べてなかったから知らなかったのですが、(非常に古く不正確なものであったけれど)PSD の仕様書は存在し、公開されていたようです。

ならできるじゃん！っと考え始めたこれが、ある種の地獄への入り口でした。

治安のいい PSD の内部構造を解析できるパーサー早く二日で完成した物の、大変なのはパーサーでは全くなく。色合成や色調調整、レイヤーフォルダーなどの複雑奇怪な仕様を持ったペイントツールの合成エンジンの再現でした。

そんな地獄のさなか、私が持っていた VRChat 向けアセットの PSD を様々再現をさせ、検証し改善し続け、フォトショへの対応実装の完成度がだいぶ良くなり、その影響で TTT 内で使用できる色合成は フォトショの物と全く同じ演算式が使用できる環境にもなりました。  
(このいろいろなアセットの PSD の検証には、[あの人](https://github.com/bdunderscore) からのアセットの提供(ギフト)もいくつかあり、再現性に大きく影響する重要なケースもあり、今の PSD 再現度に大きく貢献していて、本当に感謝しています。)

様々な PSD を対応していった中、クリスタ製の PSD の再現度が低いことにも気づきました。

どうやらクリスタはフォトショとは違ったアルファ合成式を用いているようで、フォトショの再現した色合成では完全な再現ができず、ネットを調べまわって、アルファブレンドとして紹介されているわけではない、[クリスタの加算の演算式](https://qiita.com/kerupani129/items/215b1f973672452f2d2f#3-clip-studio-paint-%E3%81%A7%E3%81%AE%E5%BC%8F-%E6%8E%A8%E5%AE%9A)の一部分がアルファブレンドの物だと決め打ちで適用してみたら完全再現できたため、今はクリスタの PSD の再現度においてはほかツールの追随を許さない再現度になっていると思います。

時に、治安の悪い PSD に破壊されることもありましたが、TexTransTool は基本いかなる PSD にすべて対応します。
このインポーターと再現するための実装は、ペイントツールでは実現不可能な、いかなるペイントツールの PSD も再現することと、その再現実装を用いて、非破壊で高度な PSD を取り回し、強力な利便性を実現することです。

そのため、 このインポーターとその再現実装([MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas))で再現出来なかった PSD は私(Reina_Sakiria)に連絡するか私がそれを検証できるような状態にしてくれると非常に助かります。
</details>
