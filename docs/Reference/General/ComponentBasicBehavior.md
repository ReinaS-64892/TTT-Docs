---
sidebar_position: 0
---

# コンポーネントの基本挙動

TexTransTool のコンポーネントには全てに共通する挙動や一部の分類のものだけが持つ挙動があります。

## MainComponent と SubComponent

`MainComponent` はそれが主体となって動作するコンポーネントで、[実行フェーズ](/docs/Reference/General/ExecutionOrder#フェーズ)を持ちます。[SimpleDecal](/docs/Reference/SimpleDecal) や [AtlasTexture](/docs/Reference/AtlasTexture) といった通常のコンポーネントが属します。

`SubComponent` はそれが主体として動作ができないコンポーネントを指し、[IslandSelector](/docs/Reference/IslandSelector) などの他 `MainComponent` によって使用されることで動作するコンポーネントが属します。

## OwnedComponent と AnnotationComponent

`OwnedComponent` は、そのコンポーネントが GameObject を占有し、他の `OwnedComponent` を付与できない仕様を持つコンポーネントです。主に [SimpleDecal](/docs/Reference/SimpleDecal) や [AtlasTexture](/docs/Reference/AtlasTexture) といった通常の`MainComponent`や [IslandSelector](/docs/Reference/IslandSelector) といった `SubComponent` も一部 `OwnedComponent` であったります。

`AnnotationComponent` とは、そのコンポーネントが GameObject を占有しなかったり、他 `OwnedComponent` と同時に付与が可能なコンポーネントです。主に [SimpleDecalExperimentalFeature](/docs/Reference/SimpleDecal/SimpleDecalExperimentalFeature) や [AsLayer](/docs/Reference/MultiLayerImageCanvas/AsLayer) などが属していて、`OwnedComponent` に属するコンポーネントに追加の情報を付与したり、`MainComponent` を `SubComponent` として扱うような効果を持つものも存在します。
