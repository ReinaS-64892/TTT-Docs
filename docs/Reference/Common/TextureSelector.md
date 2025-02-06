# TextureSelector

[MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas) や [TextureBlender](/docs/Reference/TextureBlender) で対象とするテクスチャーを指定するための物です。

## 設定項目

### セレクターモード

#### Absolute

テクスチャーに対する直接的な参照一つで指定するモード  
非常に簡単に使用でき D&D で使用するときには重宝しますが、ほかツールとの競合が発生する可能性が存在します。

##### SelectTexture

指定するテクスチャーを割り当てる項目です。`Project` から直接 D&D して割り当てるのも良いですが、一つ上に表示されるボタン `OpenSelector` からアバター内のテクスチャーを一覧表示し、[選択が可能なウィンドウ](/docs/Reference/EditorWindow/DomainTextureSelector.md)を出すことができます。

#### Relative

テクスチャーに対して`レンダラー`と`マテリアルスロット`と`プロパティネーム`を使用して、間接的に指定するモード  
簡易的ではないですが、ビルド前に存在しないテクスチャーを指定することが可能で非常にトリッキーなことが可能なモードです。

##### RendererAsPath

間接的にたどる参照となる、`レンダラー`を指定する項目です。

##### SlotAsPath

間接的にたどる参照となる、`マテリアル`(`マテリアルスロット`)を指定するための項目です。

##### PropertyNameAsPath

最終的にその`マテリアル`の、どの`プロパティ`がもつテクスチャーかを指定するための項目です。

##### SelectTexturePreview

その場で、その関節参照をたどった結果が表示されます。

:::info
その関節参照の項目が足りない場合は表示されず、参照した結果が表示されるだけであり、ここに D&D しても何も起こりません。
:::
