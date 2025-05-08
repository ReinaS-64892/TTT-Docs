---
sidebar_position: 11
---

# ColorizeLayer

:::warning
ColorizeLayer は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

GIMP の着色 と同じ効果を持つレイヤー。

元の色の、 Luminance をいい感じに引き継ぎ、色相と彩度を置き換えます。

## 属性

- [SubComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent)
- [OwnedComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)

## 設定項目

[GeneralCommonLayerSetting](./GeneralCommonLayerSetting.md)の設定を持ちます。

### Color

着色する色です。キャンバスのの輝度をいい感じに引き継ぎ、この色に近い色になります。
