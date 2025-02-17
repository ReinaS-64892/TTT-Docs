# TTTImportedLayerMask

:::warning
MultiLayerImageCanvas に関連する機能は実験的です！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

[TTT PSD Importer](/docs/Reference/TexTransToolPSDImporter.md) などのインポーター経由でインポートされた Unity の Texture2D ではないものを LayerMask として扱うための存在。

## 設定項目

基本は [LayerMask-UnityTexture2D](/docs/Reference/MultiLayerImageCanvas/LayerMask/LayerMask-UnityTexture2D.md) と同じですが、 `Mask Texture` が Texture2D ではない独自のオブジェクトが割り当てれるようになっています。
