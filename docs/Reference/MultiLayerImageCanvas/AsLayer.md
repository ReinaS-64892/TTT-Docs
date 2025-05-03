# AsLayer

:::warning
AsLayer は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

単体で動作する TexTransTool のほかコンポーネントを [MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas) のレイヤーとして扱うことができるようにすることが可能な存在。

## 属性

- [SubComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent)
- [AnnotationComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)

## 設定項目

[GeneralCommonLayerSetting](./GeneralCommonLayerSetting.md)の設定を持ちますが、 `As` する対象によっては一部項目が対象側の値を使用することがあります。

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

TexTransTool v0.9.0 にて。

単体動作可能な存在が、都合よくクリッピングをする、される存在にできるのって面白いですよね！

特に [SingleGradationDecal](/docs/Reference/SingleGradationDecal.md) とか [SimpleDecal](/docs/Reference/SimpleDecal) とかがレイヤー動作可能になったりと非常に面白い。
</details>
