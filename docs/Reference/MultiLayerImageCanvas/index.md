---
sidebar_position: 9
---

# MultiLayerImageCanvas

:::warning
MultiLayerImageCanvas は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::
:::info
内部的な仕組みも含め、すべて開発途中なため実験的なコンポーネントとして扱われます。
:::

## 概要

一般的な画像編集ソフトやお絵かきソフトのキャンバスを再現し、高度な色改変をUnity内で行う  
[SimpleDecal](/docs/Reference/SimpleDecal)のために作られた色合成技術を転用して作られたコンポーネント。

## 属性

- [MainComponent](/docs/Reference/General/ComponentBasicBehavior.md#maincomponent-と-subcomponent)
- [OwnedComponent](/docs/Reference/General/ComponentBasicBehavior.md#ownedcomponent-と-annotationcomponent)
- フェーズ -> [BeforeUVModification | UV変更前](/docs/Reference/General/ExecutionOrder.md#beforeuvmodification--uv変更前)

## レイヤーの定義

- MultiLayerImageCanvas の子のゲームオブジェクトで1階層目であること
  - 2階層目以降は、LayerFolder の子のゲームオブジェクトで1階層目であること
- レイヤーとして動作するコンポーネントが追加されていること

## 設定項目

### TextureSelector

このキャンバスの結果で置き換える対象選択。[詳細](../Common/TextureSelector.md)

---
<details>
  <summary>**ReinaSakiria's-Note**</summary>

コンポーネントは TexTransTool v0.5.0 から [TTT PSD Importer](/docs/Reference/TexTransToolPSDImporter.md) のために追加されました。

このコンポーネントとそれに連なるレイヤー群は、 PSD の完全再現と PSD の再現をするセーブデータを Unity 上で編集をある程度可能にし、それを非破壊でアバターに適用するために作られました。

TexTransTool の順序制御は基本的に上から下ですが、このコンポーネントがレイヤーとして扱う存在は基本的に下から上の順に合成されていくので少し異質ですね。

このコンポーネントとそれに連なるレイヤー群に関しては様々あるんですが ... それは [こっちのノート](/docs/Reference/TexTransToolPSDImporter.md#reinasakirias-note)に書いておきましょう。
</details>
