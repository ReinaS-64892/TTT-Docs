# MaterialModifier

:::warning
MaterialModifier は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

指定したマテリアル(複製)のインスペクターを表示し、そこから編集した情報を Override として、差分としてコンポーネントに保持しておき、実行時にその差分を適用することのできるコンポーネントです。

## 属性

- [MainComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent)
- [OwnedComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)
- フェーズ -> [MaterialModification | マテリアル変更](/docs/Reference/General/ExecutionOrder.md#materialmodification--マテリアル変更)

## 設定項目

### TargetMaterial

非破壊で編集したいマテリアルを指定する項目で、ここに指定したマテリアル(複製)のインスペクターが表示され、実際に編集するような形で差分を記録し、実行時にその差分を適用することができます。

### Overrides:~

マテリアルのインスペクターにて編集されたときに表示されるようになる、差分の実体です。

#### Is Override Shader

この項目が有効な場合 [Override Shader](#override-shader) にシェーダーが上書きされます。

#### Override Shader

[Is Override Shader](#is-override-shader) が有効な場合に、上書きするシェーダーです。

#### Is Override Render Queue

この項目が有効な場合 [Override Render Queue](#override-render-queue) に Render Queue が上書きされます。

#### Override Render Queue

[Is Render Queue](#is-override-render-queue) が有効な場合に、上書きするシェーダーです。

#### OverrideProperties

各プロパティに対する差分それそのものであり、実行時にこのリストの差分を適用します。


---
<details>
  <summary>**ReinaSakiria's-Note**</summary>


このコンポーネント(新版MaterialModifier)は TexTransTool v0.9.0 から追加されました。

旧版MaterialModifier は私(Reina_Sakiria) が作った物ですが、この 新版MaterialModifier は [PR](https://github.com/ReinaS-64892/TexTransTool/pull/788) の提供によって追加されました。

PR の時点では `MaterialConfigurator` という名前でしたが、紆余曲折(目的自体は 旧版MaterialModifier と同一だったというのも)あって 旧版MaterialModifier から名前を継承する形になっています。

旧版MaterialModifier のプロパティ名を調べないと何にもできない非常に使いずらい仕様とは違って、マテリアルの本物のインスペクターが描画されるようになっており、非常に使い勝手の良いコンポーネントでかつ、現時点である程度完成していると思うので、あんまり遠くないうちに 実験的な扱いを外したいとも考えています。

これはちょっとした余談ですが、そのマテリアルの本物のインスペクターを描画する都合で、そのマテリアルの持つインスペクターが重いと当然重たくなってしまうので、私のような人が使用している lilToon のインスペクターが重たいって話から、[lilToon へ PR](https://github.com/lilxyzw/lilToon/pull/244) を投げるなどがありました。

この PR がマージされた lilToon v1.9.0 を導入しておくと MaterialModifier 上で操作するときも高速になるのでアップデート推奨です！
</details>
