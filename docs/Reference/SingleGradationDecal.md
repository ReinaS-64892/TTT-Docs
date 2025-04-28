# SingleGradationDecal

## 概要

髪の毛にメッシュを入れるとき、グラデーションテクスチャーを作成する手間を省き、もっと高度な色や透明度の指定を行うために作られたコンポーネント

## 属性

- フェーズ -> [AfterUVModification | UV変更後](/docs/Reference/General/ExecutionOrder.md#afteruvmodification--uv変更後)
- Can be used [AsLayer](/docs/Reference/MultiLayerImageCanvas/AsLayer.md)

## 設定項目

### レンダラー設定

[SimpleDecal](/docs/Reference/SimpleDecal)の[レンダラー設定](/docs/Reference/SimpleDecal#レンダラー設定)と共通です。 [参照](/docs/Reference/SimpleDecal#レンダラー設定)

### グラデーション設定

グラデーションそれそのものや、グラデーションの長さ、範囲外の扱いなどにかかわる設定です。

#### グラデーションの長さ

トランスフォームのスケールと対応し、グラデーションの長さとなります。

:::warning
この項目は操作した瞬間、その`GameObject`が持つ`Transform`のローカルスケールを上書きします。
:::

#### グラデーション

グラデーション、Unityの持つUIで任意のグラデーションを設定できます。

`SingleGradationDecal` がデフォルト状態で、縦になっているときの場合、グラデーションの左側が 下 、グラデーションの右側が 上 に対応します。

:::tip
この Unity の グラデーション は、UnityEditor の標準機能として、プリセットとして保存したり引き出したりすることが可能です。
これは `Create New Library ...` から、プリセットライブラリを作成し `Location` を `Project Folder` にすることで、誰かに容易に渡すことも可能になります。

ちなみに `Preferences Folder` に生成された物(`.gradients`)であっても、プロジェクト内に入れることでプリセットとして選択可能になったり、それをそのまま誰かに渡すことも可能です。
:::

#### 透明度

グラデーションの持つ透明度に乗算する形でグラデーションを全体的に薄くしたりすることができます。

基本的な色合いの調整は[グラデーション](#グラデーション)で行った後、少し全体的に透明度を調整したいときに使うことを想定しています。

#### グラデーションのクランプ

グラデーションの長さを超過している、グラデーションの範囲外は、通常グラデーションの末端の値で塗りつぶされますが、この設定は超過した位置にある場所にグラデーションを適用しないようにできます。

### デカール設定

その他、デカールとして動作するにあたって必要になる設定です。

#### アイランドセレクター

グラデーションの適用範囲を、[レンダラー設定](#レンダラー設定) にて絞り切れない場合に [アイランドセレクター](/docs/Reference/IslandSelector) を用いて、アイランド単位でマスクすることができます。

髪の毛の特定の房にのみグラデーションを適用したり等、細かい制御が行える機能です。

#### ブレンドタイプキー

グラデーションを元のテクスチャと合成するときの色合成を指定でき、グラデーションを鮮やかに入れたいときなどに非常に重要な設定です。

[詳細はこちら](/docs/Reference/Common/BlendTypeKey)

#### ターゲットプロパティネーム

[SimpleDecal](/docs/Reference/SimpleDecal#ターゲットプロパティネーム) と同じ `レンダラー`が持つ`マテリアル`のどのプロパティが持っている物にデカールを貼り付けるかに影響する設定です。

ターゲットプロパティネームについての[詳細はこちら](/docs/Reference/Common/TargetPropertyName)

#### 詳細設定

[SimpleDecal](/docs/Reference/SimpleDecal)の[詳細設定](/docs/Reference/SimpleDecal#詳細設定)と共通です。 [参照](/docs/Reference/SimpleDecal#詳細設定)

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

このコンポーネントは、[SimpleDecal](/docs/Reference/SimpleDecal) にて行われていた、グラデーションの適用をもっと簡単に(そして手っ取り早く)するために作成し、TTT v0.7.0 から追加されました。

[SimpleDecal](/docs/Reference/SimpleDecal) から二次元となる画像の貼り付け機能を剥ぎ取り、グラデーションの一軸にのみ絞り、グラデーションを手っ取り早く導入することを目的とし、非常にシンプルかつ単純なコンポーネントとして設計されています。

対比として見ると [SimpleDecal](/docs/Reference/SimpleDecal) は汎用性、`SingleGradationDecal` はグラデーションに特化、という形になっていますね！

[SimpleDecal](/docs/Reference/SimpleDecal) のようなボックスの範囲内というような指定ができず、最初から持つ制御が少ないという特徴あり、その時ある程度技術ができていた  [アイランドセレクター](/docs/Reference/IslandSelector) に範囲してをすべて依存するような設計のため、これを高度に使いこなすのであれば、 [アイランドセレクター](/docs/Reference/IslandSelector) の習熟はかなり必須なものになってしまったとも思います。  
ですがその設計によって、少ない設定項目で高い拡張性を持つ範囲指定ができるようになったため、それもそれでよかったかなと 私(Reina_Sakiria)は思います。

ちなみに、この `SingleGradationDecal` はマテリアル指定で大雑把な指定を行いますが、この仕組みはデカールを完全にモジュールとして切り離すことを可能にするという気づきをもたらし、 TTT v0.9.0 から [SimpleDecal](/docs/Reference/SimpleDecal) もマテリアルベースで大雑把な指定を行えるように逆輸入(それと共通化)が起きてたりもします。
</details>
