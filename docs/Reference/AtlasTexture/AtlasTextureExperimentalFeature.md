# AtlasTextureExperimentalFeature

:::warning
AtlasTextureExperimentalFeature は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

AtlasTexture に実装された 実験的な機能を呼び出すことができる設定項目を追加するコンポーネントです。

AtlasTexture の付与された GameObject に AddComponent することで設定可能になります。

## 属性

- [SubComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent)
- [AnnotationComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)

## 設定項目

### 自動テクスチャサイズ設置

テクスチャ詳細設定のリサイズを、適当に元のテクスチャの最大サイズに程度に自動で設定を行い最終的なVRAM容量を減少させ可能性がある機能です。

### 自動リファレンスコピー設定

テクスチャ詳細設定のリファレンスコピーを、適当に壊れない程度に自動で設定を行い最終的なVRAM容量を減少させ可能性がある機能です。

### 自動マージテクスチャー設定

テクスチャ詳細設定のマージテクスチャーを、適当に衝突しない物を自動で設定を行い最終的なVRAM容量を減少させる可能性がある機能です。

### テクスチャ個別詳細設定

テクスチャの詳細設定を個別に行える設定機能です。

下の テクスチャ詳細設定管理画面を開く からどのような結果になるかも含めた特別なウィンドウが開きます。
