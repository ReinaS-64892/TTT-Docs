---
sidebar_position: 2
---

# ITTShaderTextureUsageInformation

:::warning
ITTShaderTextureUsageInformation は実験的な機能です！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

[AtlasTexture](/docs/Reference/AtlasTexture) に、メインテクスチャー以外の、アトラス化可能なテクスチャーを明示するための API 。

その API の形は AAO の持つ [UVUsageCompatibilityAPI](https://github.com/anatawa12/AvatarOptimizer/blob/6a63910a423d5b7d73e726fcccb4940716f5ee0d/API-Editor/UVUsageCompabilityAPI.cs) と とほぼ同一で、AAO 向けの実装の引数を差し替えるだけで ITTShaderTextureUsageInformation として動作させることも可能です。

実装する場合は ここらへんのソースコードを参考にしてください！

- https://github.com/Rei
- naS-64892/TexTransTool/blob/5dfa65b2ef36723a7c2a19744f97c2a9f9c9fc4c/Runtime/TextureAtlas/ShaderTextureUsageInformation/TTShaderTextureUsageInformationRegistry.cs
- https://github.com/ReinaS-64892/TexTransTool/blob/5dfa65b2ef36723a7c2a19744f97c2a9f9c9fc4c/Runtime/TextureAtlas/ShaderTextureUsageInformation/MaterialInformationTranslator.cs
- https://github.com/ReinaS-64892/TexTransTool/blob/5dfa65b2ef36723a7c2a19744f97c2a9f9c9fc4c/Runtime/TextureAtlas/AAOCode/ShaderInformation.Liltoon.cs
