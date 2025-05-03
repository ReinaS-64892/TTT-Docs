---
sidebar_position: 7
---

# SelectiveColoringAdjustmentLayer

:::warning
SelectiveColoringAdjustmentLayer は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

一般的な画像編集ソフトの 特定色域の選択の色調補正 と対応するものです

## 属性

- [SubComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent)
- [OwnedComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)

## 設定項目

[GeneralCommonLayerSetting](./GeneralCommonLayerSetting.md)の設定を持ちます。

Vector4 がそれぞれ CMYK を -1 ~ 1 の範囲で調整する設定項目で

- Reds
- Yellows
- Greens
- Cyans
- Blues
- Magentas
- Whites
- Neutrals
- Blacks

の9個があります。

### IsAbsolute

絶対的か相対的の選択
