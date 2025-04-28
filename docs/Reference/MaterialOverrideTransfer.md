# MaterialOverrideTransfer

:::warning
MaterialOverrideTransfer は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

マテリアルバリアントのオーバーライドを指定した任意のマテリアルに対して、実行時に転送することができるコンポーネントです。

## 属性

- フェーズ -> [MaterialModification | マテリアル変更](/docs/Reference/General/ExecutionOrder.md#materialmodification--マテリアル変更)

## 設定項目

### TargetMaterial

転送対象を指定する項目

### MaterialValiantSource

転送元のバリアントを指定する項目

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

このコンポーネントは、 TexTransTool v0.4.0 から追加された 非常に使いずらい 旧版MaterialModifier の置き換えとして実装されました。

MaterialVariant を新規生成する手間が大きく、使い勝手は 旧版MaterialModifier よりは使い勝手が良いものの、[新版MaterialModifier](/docs/Reference/MaterialModifier.md) が、
その場で通常のマテリアルのインスペクターが表示されてシェーダー差し替えもできるため、ほとんど立場が奪われているコンポーネントです。

[新版MaterialModifier](/docs/Reference/MaterialModifier.md) が完全な上位互換かというと厳密にはそうではない ... 微妙な立ち位置のためしばらくは存在すると思いますが ... いつか削除されるか、一生実験的機能のままである可能性が高い。
</details>
