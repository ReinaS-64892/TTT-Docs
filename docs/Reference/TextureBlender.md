# TextureBlender

## 概要

画像編集ソフトのレイヤー機能のように、テクスチャーを合成することができ、非破壊での専用テクスチャの導入が可能なコンポーネント。

## 属性

- [MainComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent)
- [OwnedComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)
- フェーズ -> [BeforeUVModification | UV変更前](/docs/Reference/General/ExecutionOrder.md#beforeuvmodification--uv変更前)
- Can be used [AsLayer](/docs/Reference/MultiLayerImageCanvas/AsLayer.md)

## 設定項目

### ターゲットテクスチャー

合成対象のテクスチャーを選択する項目です。

[詳細はこちら](/docs/Reference/Common/TextureSelector)

### ブレンドテクスチャー

重ねる画像を設定する項目です。

そのアバター専用のテクスチャなど、 UV のあったものを割り当ててください。

### カラー

画像に乗算で色を調整できる項目です。

:::info
数値をそのまま乗算するだけであり、ペイントツールの合成モードの乗算とは異なるなる挙動をします。
:::
:::tip
ブレンドテクスチャーが存在しない場合は、カラーの色がそのままブレンドテクスチャーになります。色合成をベースにその場で色改変したいときに便利かもしれません。
:::

### ブレンドタイプキー

[ブレンドテクスチャー](#ブレンドテクスチャー) をどのような色合成で対象となるテクスチャと合成するかを設定できる項目です。

専用テクスチャの場合は、特定の合成モードで合成する必要がある場合に設定することが必要になります。

[詳細はこちら](/docs/Reference/Common/BlendTypeKey)

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

このコンポーネントは、[SimpleDecal](/docs/Reference/SimpleDecal) を作った時に、ついでに追加した 色合成機能 をそれ単体で切り出して使えるようにした物です。

出来そうだったから作った以外の設計思想は特になく、ただテクスチャを一枚、色合成しつつ重ねるだけ。

この非常に単純なことが可能であるがゆえに、 TexTransTool v0.1.0 に追加されて以来、一番機能変更がなされていない、 TTT の数少ない非常に安定したコンポーネントです。(私(Reina_Sakiria)が忘れていたがために、安定したコンポーネントという扱いになったのは TTT v0.9.0 からになりますが ...)
ある意味、作者から忘れ去られたコンポーネント言うのは一定の安定性を持つのかもしれませんね ... ?

このコンポーネントの機能はこれ以上変わることはないでしょう、非常にシンプルかつ単純で一つの事しかできないですが、それがこのコンポーネントの良いところでもあると思います。

それに、さらに高度なことをしたいのであれば、上位互換の [MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas) もありますから。
</details>
