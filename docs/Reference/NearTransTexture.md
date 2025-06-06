# NearTransTexture

:::warning
NearTransTexture は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

ポリゴンが近接した部分をにじませるようなテクスチャを生成することができるコンポーネント。

キメラの時の後処理や、ケモミミと髪の毛の色合わせなどに使えるかもしれない。

## 属性

- [MainComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent)
- [OwnedComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)
- フェーズ -> [PostProcessing | 後処理](/docs/Reference/General/ExecutionOrder.md#postprocessing--後処理)

## 設定項目

### (Trans)Source(Renderer,MaterialSlot,PropertyName)

それぞれ`レンダラー`と`マテリアルスロット`を指定し、`プロパティネーム`からテクスチャと、そのにじませる元となるポリゴンを指定する設定です。

### (Trans)Target(Renderer,MaterialSlot,PropertyName)

`レンダラー`と`マテリアルスロット`を指定し、`プロパティネーム`からにじませるようなテクスチャを書き込む先のテクスチャを指定し、にじませる対象となるポリゴンを指定する設定です。

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

TexTransTool v0.9.0 から追加された、実験的なコンポーネント。

二つのポリゴンのまとまりから近接した部分を計算し色をコピーすることによって実現されている。
最終的にはテクスチャへの焼きこみになるため、 UV が重なったりしている状況では正しく動作しない。

インターフェースが非常に整っておらず、技術検証に成功して動くようになったレベルのクオリティのコンポーネントで、
高確率でマイグレーションなしでセーブデータが破壊されうる実験的な存在なので使うときはそれを覚悟してから使ってくださいね！
</details>
