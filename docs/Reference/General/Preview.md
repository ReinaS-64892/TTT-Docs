---
sidebar_position: 3
---

# プレビュー

:::warning
VRChatAvatar の環境で、 NDMF が存在する場合は、こちらの [NDMF Preview](/docs/Reference/General/NDMFPreview.md) を参照してください。  
これらの項目は NDMF Preview が使用される場合使用され無い機能についてのリファレンスです。
:::

TexTransTool のコンポーネントにおいて、一時的にそのコンポーネントの実行結果を適用する機能

## 注意点

- 複数のコンポーネントのプレビューを同時に行いたい場合は、TexTransGroup を用いる必要があります。
- SimpleDecal などが使用する、元のテクスチャーへのアクセスが行われないため、場合によっては低画質になります。
  - 特にテクスチャーの Alpha Is Transparency が有効化されていない場合、異なる結果になる場合があります。
