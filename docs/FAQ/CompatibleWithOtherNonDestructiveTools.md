# 他のツールとの互換性

TexTransTool は NDMF の Plugin として動作する、 OpenSourceSoftware なツールとは可能な限り、互換性を保つようにサポートします。

例えばこれらは開発者の環境に存在するレベルで、互換性がサポートされています。

- [Moduler Avatar](https://modular-avatar.nadena.dev/)
- [AAO: Avatar Optimizer](https://vpm.anatawa12.com/avatar-optimizer)
  - AAO との API 連携も存在します。

ここに乗っていないものであっても、 OSS でかつ NDMF ツールとして動作するものは 互換性サポート対象 です。

## サポートされているツールの特記事項

### [VRCQuestTools](https://kurotu.github.io/VRCQuestTools/)

VRCQuestTools は [VRCFury](https://vrcfury.com/) との互換性のために、初期設定では (NDMF) Transforming Phase にて動作します。

ですが、 Quest 向けへの変換は TexTransTool としては TTT の後に動作することを想定していて、Transforming Phase にて VQT を動作させることは TTT としては非推奨です。

Quest への変換を利用する場合は [VRCFury](https://vrcfury.com/) を削除し VQT の [NDMF変換フェーズ](https://kurotu.github.io/VRCQuestTools/ja/docs/references/components/avatar-converter-settings#ndmf%E5%A4%89%E6%8F%9B%E3%83%95%E3%82%A7%E3%83%BC%E3%82%BA) を Optimizing にするか、 TTT AtlasTexture を PC 向けとは別の設定を作る必要が発生する場合があります。

## 互換性がサポートされていないツール

OSS ではなかったり、NDMF 上で動作しないツールは TexTransTool との互換性を全く持って保証しません。

例

- [VRCFury](https://vrcfury.com/)

## 非推奨なツール

TexTransTool との互換性がないツールです。

### [NDMF Mantis Lod Editor](https://hitsub.booth.pm/items/5409262)

NDMF の Optimizing Phase で動作するべき存在であるはずが Transforming Phase にて動作し、TTT AtlasTexture よりも早く動作し、デバッグ不可能なメッシュを生成し TTT AtlasTexture の動作を破壊します。

プロプライエタリなソフトウェアであるため、サポートは不可能です。 正しく Optimizing Phase にて動作する [Meshia Mesh Simplification](https://ramtype0.booth.pm/items/6944218) を使用してください。

具体的な内容エラーやワークアラウンドはこのあたりを参照してください。

- https://github.com/hitsub/ndmf-mantis-lod-editor/issues/10
- https://github.com/ReinaS-64892/TexTransTool/issues/750
