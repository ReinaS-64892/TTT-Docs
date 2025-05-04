# TTT Menu

## 概要

TexTransTool の Config やその他様々な操作を行える拡張ウィンドウです。

`Tools/TexTransTool/Menu` から開くことが可能です。

## Config

TexTransTool の いくつかの挙動に関わる設定項目を変更できます。

## Global Settings

これらの設定は その Unity Project だけでなく他の Unity Project と設定値を共有します。

### Language

言語設定です。 コンポーネントのインスペクターや、出力されるエラーメッセージなどが指定した言語になります。

:::info
TexTransTool は 日本語(ja-JP) と 英語(en-US) のみサポートします。それ以外の言語については、追加可能な API があるのでほか言語を追加したい方は [こちら](https://github.com/ReinaS-64892/TexTransTool/blob/5dfa65b2ef36723a7c2a19744f97c2a9f9c9fc4c/Editor/PublicAPI/TexTransToolExternalLocalize.cs) をご参照ください。
:::

## Project Settings

ここの設定は、その Unity Project でのみ設定値が影響します。

### [内部レンダーテクスチャーフォーマット](/docs/Reference/General/InternalTextureFormat)

TexTransTool がテクスチャを処理、加工する時に使用するレンダーテクスチャのフォーマットが指定可能な設定で、下の物(bit 数が大きい物) のほうが高精度な結果になりますが、その代わり TexTransTool の実行時に使用する VRAM や RAM などの使用量が 4倍、16倍 などになります。

:::info
一部の PSD などで 8bit では精度が足らない場合があり、 VRAM や RAM に余裕があるのであれば `UShort : 16bit - 符号なし整数` に上げると改善しますが、 VRAM や RAM に余裕がないのであれば、この設定は変更しないことを推奨します。
:::
:::info
最終的に圧縮されたフォーマットになった場合、VRAM の使用量はそのフォーマットの品質に依存するためこの設定は最終的なアバターの VRAM には影響しません。
:::
:::warning
TexTransTool 以外のツールが、TexTransTool が処理した後のテクスチャーに対して変更を与えうる状況が存在する場合、 `Byte : 8bit - 符号なし整数` 以外に設定しないでください！
`Byte : 8bit - 符号なし整数` 以外の値を指定した場合、一時的にアバターに割り当てられるテクスチャーは Unity とからは linear な扱いになり、他のツールはそのテクスチャーを正しく取り扱えない可能性が高く、白飛びしてしまったりするため正常な結果が得られません！
:::

### Experimental

実験的な機能を有効化したりすることができる設定です。通常必要がなければこれらの設定は変更しないことを推奨します。

#### TexTransCoreEngine バックエンド

TexTransCoreEngine と言う TexTransTool の内部で使用されている ComputeShader の抽象化レイヤーの実装を選択することができる設定です。

現状 `Unity` と `Wgpu` が選択可能ですが、 `Wgpu` は [TTCE-Wgpu](/docs/FAQ#ttce-wgpu-って何) Package がプロジェクトにインストールされていないと選択しても `Unity` で動作するようになっています。

## Debug

ここにある項目は、ReinaSakiria がデバッグように使用しているものであり、全て使用するときには注意してください。そしてそれら項目は、通常余儀なく変更される可能性が高いため気をつけてください。

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

v0.10.0 から作られた EditorWindow で、今まで MenuItem にあったものをすべてここに集約した形になります。

今後ここにちょっと便利な Utility を追加しようかなとも考えています。
</details>
