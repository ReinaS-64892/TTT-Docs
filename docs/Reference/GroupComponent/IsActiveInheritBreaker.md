# IsActiveInheritBreaker

:::warning
IsActiveInheritBreaker は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

一つ上段またはそれ以上の階層の GameObject が無効化されていたとしても、その GameObject とその下段の範囲の有効無効だけを見て、コンポーネントが動作するか否かに変えることが可能なコンポーネントです。

:::warning
動作有無の基準を変えてしまうため、わかりずらい状態になる可能性も発生します。
このコンポーネントを使用しなくてよいセットアップをすることを推奨します。
:::

## 属性

- [AnnotationComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)

## 影響を与える対象

### 通常コンポーネントすべて

TexTransTool の Phase に属し、ビルド時に主体として動作するコンポーネントの動作可否に影響できます。

### IslandSelector

[IslandSelector](/docs/Reference/IslandSelector) に対して有効無効にて動作可否が発生しますが、それに影響することが可能です。

### AtlasTexture

[AtlasTexture](/docs/Reference/AtlasTexture#適用時に非アクティブなレンダラーを含める) が無効な場合でも、無効なレンダラーを対象にいれるように影響させることが可能です。

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

TexTransTool v0.9.0 にて追加されたコンポーネントで、 プレハブ内に入れた時、例えば衣装とかだった場合に衣装丸ごと無効化した状態でアップロードされることがあるので、そういった時のために追加しました。

このコンポーネントは、純粋に実行有無がわかりづらくなるし、 TTT は複数衣装を切り替える環境を想定した作りではないので使用するときは(普通に削除される可能性もあるので)自己責任でお願いしますね！(まぁこのツールは MIT LIcense でいかなるものも基本的に自己責任だけどね！)
</details>
