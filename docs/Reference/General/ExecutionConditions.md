---
sidebar_position: 0
---

# 実行条件

TexTransTool のコンポーネントは条件によっては実行されないようにできます。

## 条件

- 付与された GameObject が ヒエラルキー的に見て 有効 であること
- 付与された GameObject が ヒエラルキー的に見て EditorOnly タグではないこと (NDMF ビルド時のみ)
- 付与された GameObject の親に TexTransTool のコンポーネントが存在しないこと

## 例外

TexTransTool のコンポーネントであったとしても、 [IslandSelector](/docs/Reference/IslandSelector) や [MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas) などの一部のコンポーネント群はそれぞれ特有の条件を持つことや [PhaseDefine](/docs/Reference/GroupComponent/PhaseDefine) などの一部コンポーネントは TTT のコンポーネントの親に存在していても子となるコンポーネントの動作を無効化しません。
