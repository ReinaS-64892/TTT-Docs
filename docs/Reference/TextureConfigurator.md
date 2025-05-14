# TextureConfigurator

:::warning
TextureConfigurator は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

テクスチャーの解像度やMipMapの制御などによる VRAM削減 を、非破壊的に行うために作られたコンポーネントです。

## 属性

- [MainComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent)
- [OwnedComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)
- フェーズ -> [Optimizing | 最適化](/docs/Reference/General/ExecutionOrder.md#optimizing--最適化)

## 設定項目

### TargetTexture

設定対象の選択。[詳細](/docs/Reference/Common/TextureSelector)

### OverrideTextureSettings

テクスチャの解像度やMipMapの使用有無を置き換えるかどうか(設定するか否か)の項目です。

### TextureSize

設定するテクスチャの解像度を指定する項目、2のべき乗の値のみ入力可能です。

:::warning
特定の解像度に変更するという動作をします。なので元々の設定より大きい値を設定した場合には、無意味に拡大されてしまうので気を付けましょう。
:::

### MipMap

MipMapを使用するか否かの設定です。

:::warning
頂点シェーダが使用するような マスク系(例えば 輪郭線の幅 用のマスクなど)の場合は消した方が良い場合もありますが、通常のテクスチャの場合は外すことによるデメリットも大きいので、外す際は良く調べてから設定しましょう。
:::

### OverrideCompression

テクスチャの圧縮設定を置き換えるかどうかの(設定するか否か)項目です。

### Compress

[こちら](/docs/Reference/AtlasTexture/TextureFineTuning#compress)を参照してください。

:::tip
プラットフォームに応じてフォーマットを細かく指定したい場合は、[VRCQuestTools](https://kurotu.github.io/VRCQuestTools/ja/) の [Platform GameObject Remover](https://kurotu.github.io/VRCQuestTools/ja/docs/references/components/platform-gameobject-remover/) などを使用することを推奨します。
:::

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

この コンポーネントは TexTransTool v0.7.0 から追加されたコンポーネント。

このコンポーネントは何がしたいかというと ...  アトラス化するにしても使用率は普通に高い、だけど圧縮設定や解像度の調整の詰めが甘いアセットに対して、非破壊で解像度や圧縮設定を設定しなおすために作ったコンポーネントです。

行いたいことが非常に単純故、あまり遠くない未来に実験的である扱いを外したいですね！

ですが、 TTT v0.9.0 開発時点(2025年02月06日)では TTT 内にダウンスケールに関するサブシステムがまだ整っておらず、そのあたりが整った先になりそうですね ...
</details>
