---
sidebar_position: 3
---


# AtlasTexture

## 概要

テクスチャの必要な部分のみを集めたテクスチャを作ることでVRAMの削減を実現する、  
アイランド再配置技術と矩形転写(または、UVtoUV の転写技術)を基礎とした [AAO](https://github.com/anatawa12/AvatarOptimizer) に触発されて作られたコンポーネント

## Atlas化される条件

### レンダラー

- 適用時にアクティブであること、ただし [適用時に非アクティブなレンダラーを含める](#適用時に非アクティブなレンダラーを含める)が有効な場合は非アクティブでも対象となる
- tag が EditorOnly ではないこと
- Rendarar の持つ Mesh が存在すること
- Rendarar の持つ Mesh の UV0 が存在すること
- Rendarar の持つマテリアルが一つ以上存在すること
- Rendarar の持つマテリアルに Null が含まれていないこと

### マテリアルが持つテクスチャー

[lilToon](https://lilxyzw.github.io/lilToon/) の場合

- MatCapなどの通常のUVを使用しないテクスチャーではないこと

それ以外のシェーダーは [AtlasShaderSupport](/docs/Reference/AtlasTexture/AtlasShaderSupport) でサポートが追加されていない場合

- Property "_MainTex" のみ

## 設定項目

### ターゲットルート

![TargetRoot](../img/at-TargetRoot.png)

アトラス化されるレンダラーの最大範囲の指定となり、ここに指定した GameObject の子として存在するレンダラーがアトラス化の対象となる可能性があります。

### マテリアルセレクター

![MaterialSelector](../img/at-MaterialSelector.png)

アトラス化の対象の選択、と大きさの優先度を指定できます。

マテリアルがほとんど 「(clone)」 とついていたり、必要なマテリアルが表示されていない場合、「リフレッシュマテリアル」ボタンを使用すると治る場合があります。

### アトラス化設定

![AtlasSetting](../img/at-AtlasSetting.png)

#### アトラステクスチャーサイズ

アトラス化した後のテクスチャのサイズで、横幅と縦幅に使われ、正方形になります。

ただし、アトラス化対象が小さいとき、二のべき乗のステップで上部分が切り取られ横長な長方形になることがあります。そして、切り取られた領域に応じて VRAM 使用量も減少します。

#### パディング

アイランドを再配置するときに、[アイランド](/docs/Reference/Common/Island)同士の間隔を調整する設定

#### 適用時に非アクティブなレンダラーを含める

アトラス化を適用するときに、非アクティブなGameObjectに付いているレンダラーを含めるオプション

アニメーション等でデフォルトでオフなアクセサリーが存在する場合に使用することを推奨

#### 大きさの優先度を強制

通常、場所が足りないときに大きさの優先度を加味して縮小しますが、この項目が有効な場合は場所の不足にかかわらず大きさの優先度を基に強制的に縮小します。

#### マテリアルの結合

アトラス化を適用するときにマテリアルを強制的に結合する機能

有効な時に、追加の項目が表示されます。  
![AtlasMargeMaterialSetting](../img/at-AtlasMargeMaterialSetting.png)

##### プロパティベイク設定

上記マテリアルの結合の時に、マテリアルのプロパティの一部をテクスチャに焼きこむ機能

- None : 何もしない
- Bake : そのプロパティのテクスチャが存在し、プロパティの値に違いがあった場合
- Bake All Property : プロパティの値に違いがあった場合すべて

基本的には推奨は Bake で、Bake All Property は大幅な VRAM の増加を招く可能性があるため取り扱い注意。

##### 結合時マテリアルの参照

結合時にマテリアルの設定を参照できる機能

何も設定されていない場合、アトラス化対象のマテリアルの不定などれか一つが使用されます。

#### テクスチャーを強制的にセットする

アトラス化したテクスチャーをマテリアルに割り当てるとき、すでにテクスチャーが存在する場合にのみ置き換えられるのが通常動作ですが、この機能は既に存在するテクスチャーがなかったとしても強制的に設定する機能

### 実験的機能

:::warning
これらは実験的機能で予告なく削除や変更が行われる可能性があります。
:::

#### アイランド詳細調整

上記:マテリアルによる 大きさ優先度 の調整が行われた後に、[アイランド](/docs/Reference/Common/Island)単位で優先度の調整が行える機能。

アイランドの選択の詳細は[こちら](/docs/Reference/IslandSelector)

#### アイランドリロケーター

制作中です...

#### 元のUVを書き込む

UV1 にアトラス化する前の UV を書き込む機能で、シェーダーで UV1を使用できる機能があるのであれば何かに使えるかもしれません。

#### ピクセルノーマライズ

アイランドの移動をピクセル単位でノーマライズする機能

アトラステクスチャーサイズがアトラス化する対象と比べて十分な大きさがあり、ダウンスケーリングが行われなかった場合に、元のテクスチャーとの見た目の劣化が抑えられる

#### マテリアル結合グループ

マテリアル結合を行うときに、一部のマテリアルを別のマテリアルにマージできる機能

透過が必要な場所にだけ別のマテリアルにマージするなどの使用用途が想定されています。

### テクスチャー詳細設定

テクスチャの詳細な設定を行うための項目です。 [詳細](./TextureFineTuning.md)
