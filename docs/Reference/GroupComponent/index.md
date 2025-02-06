---
sidebar_position: 4
---

# GroupComponent

## 概要

TexTransTool のコンポーネントの[実行順序](/docs/Reference/General/ExecutionOrder)を保証したりするための存在です。

## 保証する範囲

GroupComponent の配下すべてのオブジェクトを保証します。

:::warning
GroupComponent 配下に、GroupComponent を配置した場合、一番上段に存在する GroupComponent の効果が優先され、その配下の GroupComponent は効力を失います。
:::

## 実行順

ヒエラルキーの上から順に実行し、子を持っていた場合その子を実行してから下に実行して行きます。
