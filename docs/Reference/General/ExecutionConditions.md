---
sidebar_position: 1
---

# 実行条件

TexTransTool の [MainComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent) は条件によっては実行されないようにできます。

## 条件

- 付与された GameObject が ヒエラルキー的に見て 有効 であること
- 付与された GameObject が ヒエラルキー的に見て EditorOnly タグではないこと (NDMF ビルド時のみ)
- 付与された GameObject の親に TexTransTool の [MainComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent) コンポーネントが存在しないこと
