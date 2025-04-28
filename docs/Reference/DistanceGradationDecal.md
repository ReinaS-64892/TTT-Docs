# DistanceGradationDecal

:::warning
DistanceGradationDecal は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

[SingleGradationDecal](/docs/Reference/SingleGradationDecal.md) を距離ベースにしたものです。

## 属性

- フェーズ -> [AfterUVModification | UV変更後](/docs/Reference/General/ExecutionOrder.md#afteruvmodification--uv変更後)
- Can be used [AsLayer](/docs/Reference/MultiLayerImageCanvas/AsLayer.md)

## 設定項目

[SingleGradationDecal](/docs/Reference/SingleGradationDecal.md) と特定二つを除きすべて同じです。

[こちらを参照](/docs/Reference/SingleGradationDecal.md#設定項目)

### グラデーション最小距離

グラデーションの左側を適用する距離の設定です。 0にすることで原点にすることもできます。

### グラデーション最大距離

グラデーションの右側にある距離の設定です。

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

このコンポーネントは TexTransTool v0.9.0 から実験的な機能として追加されました。

SingleGradationDecal を距離ベースに変えただけのものでこれと言って特別なものはないですが、グラデーションのかかる形状が変わります。何か円形状にグラデーションをかけたいときには使えるかもしれないですね。

適当に作ってみただけの物であり、「使用者が少ない」または「いない」場合はしばらくしたら「消えてる」 or 「完全放置」になる可能性が高いです。
</details>
