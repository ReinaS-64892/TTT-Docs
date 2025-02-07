# LayerMask-UnityTexture2D

:::warning
MultiLayerImageCanvas に関連する機能は実験的です！予告なく機能変更や削除がされる可能性があります。
:::

:::info
`LayerMask-UnityTexture2D` は表示名として `LayerMask` という表記がされることがあります。
:::

## 概要

レイヤーとなるコンポーネントを生成した時、デフォルトで割り当てられていて、これは Unity の Texture2D をそのままマスクとして扱うことのできる、一番標準的なレイヤーマスクになります。

## 設定項目

### Layer Mask Disabled

この項目が有効な場合、[Mask Texture](#mask-texture) が存在していても、レイヤーマスクとしての効力を失います。

### Mask Texture

マスクとして扱われるテクスチャーそれれそのものを割り当てる項目です。

:::info
レイヤーマスクは Alpha チャンネルを使用します。シェーダーとは違い、 R チャンネルを参照しないので注意。
:::
