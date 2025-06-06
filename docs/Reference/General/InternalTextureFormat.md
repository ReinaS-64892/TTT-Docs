# 内部レンダーテクスチャーフォーマット

TexTransTool のテクスチャ処理にあたって、内部で使用されるフォーマットの設定です。

:::info
最終的に圧縮されたフォーマットになった場合、VRAM の使用量はそのフォーマットの品質に依存するためこの設定は最終的なアバターの VRAM には影響しません。
:::
:::warning
TexTransTool 以外のツールが、TexTransTool が処理した後のテクスチャーに対して変更を与えうる状況が存在する場合、 `Byte : 8bit - 符号なし整数` 以外に設定しないでください！
`Byte : 8bit - 符号なし整数` 以外の値を指定した場合、一時的にアバターに割り当てられるテクスチャーは Unity とからは linear な扱いになり、他のツールはそのテクスチャーを正しく取り扱えない可能性が高く、白飛びしてしまったりするため正常な結果が得られません！
:::

以下のような選択肢があります。

## Byte : 8bit - 符号なし整数

この選択肢がデフォルト設定で、0~255 の 256段階の表現が可能な、一番処理時のメモリ消費量が少ないフォーマットです。

## UShort : 16bit - 符号なし整数

16bit 符号なし整数、メモリ消費量が増える代わりに品質が向上します。

## Half : 16bit - 符号あり浮動小数点

16bit 符号あり浮動小数点、 16bit 符号なし整数とメモリ消費量は同じですが、HDR Textureを正しく扱える ... かもしれません。

## Float : 32bit - 符号あり浮動小数点

32bit 符号あり浮動小数点、使用できる中で最大のメモリ消費量の代わりに品質が一番高いフォーマットです。ほとんどの場合で過剰な品質のため非推奨です。

:::warning
`Float - 32bit signed float` は非常にメモリ消費量が多いため、非常にメモリ消費量の多いコンポーネントをビルドした時に、最悪の場合 PC がクラッシュすることがあります。
PC の性能に自信がない場合は絶対に使用しないことを推奨します。
:::
