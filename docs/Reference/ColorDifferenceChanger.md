# ColorDifferenceChanger

:::warning
ColorDifferenceChanger は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

[VRC Color Changer](https://pukorufu.booth.pm/items/6519471) からインスパイアされて作られたコンポーネント

代表色と目標色を決め、その色の差分を全体に適用することで目的のに近づける色調補正が可能で、[AsLayer](/docs/Reference/MultiLayerImageCanvas/AsLayer.md) を用いることで、色調補正系のレイヤーになることもできる。

## 属性

- フェーズ -> [PostProcessing | 後処理](/docs/Reference/General/ExecutionOrder.md#postprocessing--後処理)
- Can be used [AsLayer](/docs/Reference/MultiLayerImageCanvas/AsLayer.md)

## 設定項目

### TargetTexture

色調補正を行う対象を選択することができる設定。

[詳細はこちら](/docs/Reference/Common/TextureSelector)

### DifferenceSourceColor

代表色なる色を設定する項目です。

ここに設定した色が基準となります。

### TargetColor

変えたい色を設定する項目。

ここに設定した色と代表色を比較し、その差分が適用されます。
