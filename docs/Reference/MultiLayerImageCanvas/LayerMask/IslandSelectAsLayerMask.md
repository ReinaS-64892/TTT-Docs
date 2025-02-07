# IslandSelectAsLayerMask

:::warning
MultiLayerImageCanvas に関連する機能は実験的です！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

[IslandSelector](/docs/Reference/IslandSelector) で選択されたアイランドをそのままマスクとしてラスタライズし、レイヤーマスクとして使用することができるレイヤーマスクです。

## 設定項目

### Island Selector

マスクにしたい [IslandSelector](/docs/Reference/IslandSelector) を割り当てる項目です。

### Mask Padding

[SimpleDecal](/docs/Reference/SimpleDecal) の 詳細設定の[パディング](/docs/Reference/SimpleDecal#パディング) と全く同じ意味で、どれくらい広めにマスクを塗るかを指定する項目です。
