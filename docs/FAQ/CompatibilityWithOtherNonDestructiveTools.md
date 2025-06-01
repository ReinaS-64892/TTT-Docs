# 他のツールとの互換性

TexTransTool は NDMF の Plugin として動作する、 OpenSourceSoftware なツールとは可能な限り、互換性を保つようにサポートします。

例えばこれらは開発者の環境に存在するレベルで、互換性がサポートされています。

- [Moduler Avatar](https://modular-avatar.nadena.dev/)
- [AAO: Avatar Optimizer](https://vpm.anatawa12.com/avatar-optimizer)
  - AAO との API 連携も存在します。

ここに乗っていないものであっても、 OSS でかつ NDMF ツールとして動作するものは 互換性サポート対象 です。

:::info
ここで言う OSS は MIT License などの [オープンソースライセンス](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9) の元配布されていることを指します。
:::
:::info
それ自体は OSS であるが、 OSS ではない アセットが必須で、それがなければ動作不可能な場合は、たとえラッパーなどの部位分が OSS であったとしても、互換性のサポート対象外とします。
:::
:::info
部分的に OSS ではない場合(例えば 有料プラン や、特定の機能に別のプロプライエタリなアセットを要求する など) が存在する場合は、 OSS として配布されている機能範囲にのみ、互換性のサポート対象とします。
:::
:::info
公式のパッケージとしては有料なキーとなるものが必要だが、OSS として配布されていて技術者であればロック解除が可能な場合は OSS とし、互換性のサポート対象内とします。
:::

## サポートされているツールの特記事項

### [VRCQuestTools](https://kurotu.github.io/VRCQuestTools/)

VRCQuestTools v2.10.0 またはそれ以上のバージョンとの併用を推奨します。

アバターに [VRCFury](https://vrcfury.com/) のコンポーネントが存在する場合、 VRCQuestTools は互換性のために、初期設定(Auto)では `(NDMF) Transforming Phase` にて動作するようになります。

ですが、TexTransTool としては`非破壊的な変換`の実行を TTT の後に動作することを想定しており、`(NDMF) Transforming Phase`で動作させることは非推奨です。

`非破壊的な変換`を利用する場合は [VRCFury](https://vrcfury.com/)(とそれに連なるコンポーネントを全て) を削除する。
または、問題が発生したら TTT AtlasTexture を Quest向けに調整したものを個別に用意してください。

## 互換性がサポートされていないツール

OSS ではなかったり、NDMF 上で動作しないツールは TexTransTool との互換性を全く持って保証しません。

例

- [VRCFury](https://vrcfury.com/)

## 非推奨なツール

TexTransTool との互換性がないツールです。

### [NDMF Mantis Lod Editor](https://hitsub.booth.pm/items/5409262)

`(NDMF) Optimizing Phase`で動作するべき存在であるはずが Transforming Phase にて動作し、TTT AtlasTexture よりも早く動作し、TTT AtlasTexture の動作を破壊する場合があります。

[NDMF Mantis Lod Editor](https://hitsub.booth.pm/items/5409262) はラッパーでしかなく、核の部分である`Mantis Lod Editor`は 完全なプロプライエタリなソフトウェア なため、サポート対象外であり(開発者が所持していない(購入する意思もない)ためサポートはもとより不可能なので)、正しく`(NDMF) Optimizing Phase`にて動作し非常に高速な [Meshia Mesh Simplification](https://ramtype0.booth.pm/items/6944218) を使用してください。

具体的な内容エラーやワークアラウンドはこのあたりを参照してください。

- https://github.com/hitsub/ndmf-mantis-lod-editor/issues/10
- https://github.com/ReinaS-64892/TexTransTool/issues/750
