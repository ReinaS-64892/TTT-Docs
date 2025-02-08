# アセット配布に関して

TexTransTool は配布したいアセットのカラーバリエーションを手軽に変えたり、テクスチャの軽量化をしたり、模様や柄などを後から変えたりするのに役に立つことがあります。
そんな、 TexTransTool に依存するアセットを配布する際の推奨事項や作り方についての軽い解説です。

## TexTransTool 正式配布ページに誘導

TexTransTool は MIT License であるため、アセットに TexTransTool を同梱することは(MIT License を守っていれば)許可されています。ですが、古いバージョンや意図しないバージョンのインストールを引き起こしたり、場合によってはプロジェクトに TexTransTool が複数存在してしまい壊れることもあり得ます。

TexTransTool 正式な配布ページとしてはこれらが存在します。

- 公式サイト https://ttt.rs64.net/
- BOOTH https://rs-shop.booth.pm/items/4833984

これらのサイトへと誘導し、 VPM での導入を誘導してください。

## TexTransTool のバージョンを明記

TexTransTool v0.x.x は特に、バージョンごとにセーブデータのマイグレーションが必要にあることがあります。(v1.x.x になったとしても、実験的機能を用いていた場合はその機能自体が消失、大幅な仕様変更やマイグレーションの存在しないセーブデータへの破壊的変更が発生する場合があります。)

バージョンが明記されていないことによって、そのアセットを使用する人に混乱をもたらすことがあり、絶対に

__そのアセットを作成するのに使用した TexTransTool のバージョンを明記してください__ 。

## ケース別のアセット配布にあたって

これらは、開発者が想定している範囲の配布アセットについての手引きのようなものです。

### シンプルな専用テクスチャー

特定アバター向けの(PNG 一枚などの)専用テクスチャーを D&D で導入できる Prefab を作ることが可能です。

基本的なセットアップ方法は、[専用テクスチャを導入する](/docs/Tutorial/SetupExclusiveTexture.md)を参照してください。それを基に作った GameObject (+ [TTT TextureBlender](/docs/Reference/TextureBlender.md)) を Prefab にすることで D&D で導入可能な専用テクスチャのセットアップになります。

### セットアップされたデカール

特定アバター向けに、追加のディティールを SimpleDecal を用いて簡単に導入できる Prefab を作ることが可能です。

基本的なセットアップ方法は[シンプルなデカールを貼り付ける](/docs/Tutorial/SetupSimpleDecal.md)を参考にしてください。

SimpleDecal は複数の方法でアバターのレンダラーを指定することができますが、 D&D で導入できるようにしたい場合は使用できる方法が限られます。具体的には [レンダラー選択モード-Manual](/docs/Reference/SimpleDecal#レンダラー選択モード-manual) は使用できません。この選択モードは SimpleDecal などの単体プレハブにした時点でセットアップが一部切れてしまいます。

基本 [レンダラー選択モード-Auto](/docs/Reference/SimpleDecal#レンダラー選択モード-auto) を使用し、マテリアルベースでフィルタリングをかけたり(マテリアルでのフィルタリングは導入先のマテリアルが置き換わっているなどの状態によっては導入できない場合が発生するため注意)、 IslandSelector 等を用いて、単体プレハブにしたのち、(場合によってはそのアバターや衣装のデフォルトのプレハブに) D&D して正しく動作するかを確認してください。

ちなみに [SingleGradationDecal](/docs/Reference/SingleGradationDecal.md) の場合でもおおむね同様です。

:::tip
複数のデカールを一つのプレハブに入れた状態にしておくと一括でデカールを導入することが可能になり、その中の階層やデカールの命名を整えておくと、一括で入れた後に個別にデカールを無効化したり有効化したりすることがユーザーにしやすくなるのでおすすめです。
:::

### アトラス化セットアップ

マテリアルが置き換えられてい特定のアバターや衣装向けに [AtlasTexture](/docs/Reference/AtlasTexture) を用いた軽量化セットアップ Prefab を作ることが可能です。

基本的なセットアップ方法は [アトラス化でテクスチャーメモリを削減する](/docs/Tutorial/ReductionTextureMemoryByAtlasing.md) を参考にしてください。

D&D でその [AtlasTexture](/docs/Reference/AtlasTexture) のセットアップを使用するにあたってこれといった注意事項はありません。

### 実験的機能を用いたテクスチャー設定のセットアップ

テクスチャが置き換えられていない特定のアバターや衣装向けに [TextureConfigurator](/docs/Reference/TextureConfigurator.md) を用いた軽量化セットアップ Prefab を作ることが可能です。

基本的なセットアップ方法は [テクスチャの設定でテクスチャーメモリを削減する](/docs/Tutorial/ReductionTextureMemoryByTextureSetting.md) を参考に、 D&D でその [TextureConfigurator](/docs/Reference/TextureConfigurator.md) のセットアップを使用するにあたってこれといった注意事項はありません。

### 実験的機能を用いた高度な専用テクスチャー

これは、アバターや衣装が PSD を同梱する際に `.meta` ファイルも同梱していて、 Unity 内で PSD への参照ができる場合に限られますが、[TTT PSD Importer](/docs/Reference/TexTransToolPSDImporter.md)と  [MultiLayerImageCanvas](/docs/Reference/MultiLayerImageCanvas) を用いた改変は Prefab Variant として、元々の PSD を同梱せずに配布することが可能です。

基本的なセットアップ方法は [PSDを使ってテクスチャ改変](/docs/Tutorial/TextureModificationUsingByPSD) を参考に、 D&D でそのセットアップを使用するにあたって、 [AsLayer](/docs/Reference/MultiLayerImageCanvas/AsLayer.md) を用いていた場合に D&D で使用できなくなるケースがあるので注意してください。

:::tip
そうした高度な専用テクスチャーが配布されることを想定したいアセット制作者は、PSD を Unity プロジェクトに入れ、 `.meta` ファイルを生成させて、それを `.unitypackage` に入れるのではなく、今まで通り配布する zip の PSD を入れていた場所に、`.meta` と共にファイルを同梱してください。
:::
