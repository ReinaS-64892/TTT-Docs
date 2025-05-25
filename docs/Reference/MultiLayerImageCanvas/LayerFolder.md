---
sidebar_position: 1
---

# LayerFolder

:::warning
LayerFolder は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

一般的な画像編集ソフトのフォルダーやレイヤーグループなどと対応する物です。

## 属性

- [SubComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent)
- [OwnedComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)

## 設定項目

[GeneralCommonLayerSetting](./GeneralCommonLayerSetting.md)の設定を持ちます。

### PassThrough

一般的な画像編集ソフトの通過に該当する機能

:::info
Clipping と PassThrough を同時に有効化した場合の挙動はクリップスタジオペイントに習い、 PassThrough が無効化されます。
:::
