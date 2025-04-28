# UVCopy

:::warning
UVCopy は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

指定したメッシュの UV を別のチャンネルの UV にコピーできる存在です。

## 設定項目

### CopySource

コピーする元となる UV チャンネルを指定する項目です。

基本的には UV0 (デフォルトで使用される UV ) を指定することが多いです。

### CopyTarget

コピーする先となる UV チャンネルを指定する項目です。

基本的には UV1 などを指定して、 Shader 側で特殊な扱い方をすることが多いです。

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

TTT v0.10.0 にて追加された、AtlasTexture の WriteOriginalUV の削除に伴って追加されたコンポーネントです。

AtlasTexture よりも先行で動作させることで UV1 にアトラス化する前の UV を書き込んでおくようなことをするためにあります。
</details>
