# SimpleDecalExperimentalFeature

:::warning
SimpleDecalExperimentalFeature は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 属性

- [SubComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent)
- [AnnotationComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)

## 概要

SimpleDecal に実装された 実験的な機能を呼び出すことができる設定項目を追加するコンポーネントです。

SimpleDecal の付与された GameObject に AddComponent することで設定可能になります。

## 設定項目

### OverrideDecalTextureWithMultiLayerImageCanvas

[MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas) の内容をそのまま [デカールテクスチャー](#デカールテクスチャー) として使用できる機能

### 深度デカール

デカールを張る方向から`一番手前の部分`にのみデカールが張られるようにできる、とても実験的な機能です。

#### 深度反転

深度判定を反転し、`一番手前だけ`を`後ろ側になった場所すべて`にします。

デカールを使って影のような表現が可能になります。
