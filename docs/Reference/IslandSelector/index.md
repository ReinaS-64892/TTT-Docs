# IslandSelector

## 概要

[SimpleDecal](/docs/Reference/SimpleDecal) や [AtlasTexture](/docs/Reference/AtlasTexture)で、アイランド単位で何かを行うための、アイランドの選択用コンポーネント。

:::info
IslandSelector は通常(付与されている GameObjectを)無効化すると 何も選択していない IslandSelector としての振る舞いをするようになります。
:::

## 選択コンポーネント

### BoxIslandSelector & SphereIslandSelector

それぞれボックスとスフィアの形状で、3D空間上の頂点を基にアイランドを選択します。

#### IsAll

通常 アイランドの持つ頂点が一つでも範囲に入っているときにアイランドが選択されますが、  
有効な時は、アイランドの持つ頂点すべてが範囲に入っている時にアイランドが選択されます。

### PinIslandSelector

一直線に伸びる Pin に貫通したポリゴンを持つ Island を選択します。

#### Island Selector Range

Pin の長さになります。貫通させ過ぎないように気を付けましょう

:::info
旧バージョンでは RayCastIslandSelector という名前でした。
:::

## 論理演算子

論理演算子系コンポーネントは、子 GameObject の IslandSelector を上から順に読み取り、演算を適用します。

### IslandSelectorAND

アイランドの選択で AND演算 を行います。

[RendererIslandSelector](#rendererislandselector) と [SubMeshIslandSelector](#submeshislandselector) で AND 演算を行い、特定のサブメッシュに属するアイランドを選択したりする。
のようなことを想定しています。

### IslandSelectorOR

アイランドの選択で OR演算 を行います。

アイランドの選択を束ねるような使用用途を想定しています。

### IslandSelectorNOT

アイランドの選択で NOT演算 を行います。

:::info
IslandSelectorNOT は、子のGameObject 1番目だけを読み取り、2番目以降は使用されません。
:::

特定の場所のアイランド以外すべての選択や、すべての選択を行うことを想定しています。

:::tip
子の GameObject が存在しなかった場合、すべての Island が選択されます。何かに使える ... かもしれませんね。
:::

### IslandSelectorXOR

アイランドの選択で XOR演算 を行います。

非常にトリッキーな選択ができる ... かもしれません。

## 実験的なIslandSelector

:::warning
以下の IslandSelector は実験的な IslandSelector です！予告なく機能変更や削除がされる可能性があります。
:::

### RendererIslandSelector

指定したレンダラーに属するアイランドを選択します。

IslandSelectorAND などと合わせて、特定の選択を指定のレンダラーの Island だけにするような使い方ができます。

#### Renderer List

ここに追加されたレンダラーがアイランド選択の対象となります。

### SubMeshIndexIslandSelector

アイランドの属するサブメッシュインデックスを基にアイランドを選択します。

#### Select Sub Mesh Index

サブメッシュのインデックスを指定する項目で、0から始まります。

### IslandSelectorLink

子として持つ IslandSelector の選択を特定の基準で拡大選択できる IslandSelector です。

以下の四つが存在します。

- RendererIslandSelectorLink (同一レンダラーのアイランド)
- MaterialIslandSelectorLink (同一マテリアルのアイランド)
- SubMeshIndexIslandSelectorLink (同一サブメッシュインデックスを持つアイランド)
- SubMeshIslandSelectorLink (同一レンダラーでかつ、同一サブメッシュを持つアイランド)

:::info
IslandSelectorNOT と同様、子のGameObject 1番目だけを読み取り、2番目以降は使用されません。
:::

### AimIslandSelector

3D空間上で、特定の座標から特定の方向に対して、 Ray を飛ばして一番手前にあったポリゴンを持つ Island を選択することができる IslandSelector です。

#### エイム開始(エイム終了)ボタン

エイムを開始した時、アクティブな SceneView に対して AimIslandSelector が追従します。

:::tip
有効な時に常時追従ではないですが、Unity のショートカット `Ctrl+Shift+F`(`Align with view`) でも同様のことが可能です。
:::

### MaterialIslandSelector

指定したマテリアルに属する Island を選択することができる IslandSelector です。

#### Materials

その指定したいマテリアルを入れることが可能なリストです。

## ReinaSakiria's-Note

元々 IslandSelector の原型は IslandCulling という、SimpleDecal に TexTransTool v0.3.0 から追加された機能でした。

これは SimpleDecal の枠の中で線を動かしを動かし、当たったポリゴンを持つ Island にだけ、デカールを適用するという物。

SimpleDecal の Island 単位の範囲制限は非常に便利でしたが、枠の中という制約は非常に面倒で自由度が低かったため、これを(TTT v0.7.0 にて)汎用 Island 選択ツールとして切り離したものが IslandSelector です。

これによって [AtlasTexture](/docs/Reference/AtlasTexture) が Island 選択を基に調節をさらに細かくできる実験的機能が実現出来たり、 [SingleGradationDecal](/docs/Reference/SingleGradationDecal.md) がそれをほぼほぼ前提とすることで単純なインターフェースで済むようになりました。やったね！
