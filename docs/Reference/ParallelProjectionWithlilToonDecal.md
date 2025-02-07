# ParallelProjectionWithlilToonDecal

:::warning
ParallelProjectionWithlilToonDecal は実験的なコンポーネントです！予告なく機能変更や削除がされる可能性があります。
:::

## 概要

UV1~3 に書き込み、 lilToon の Decal化 設定を使用することで、VRAM の増加と引き換えに高品質な並行投影デカールを実現できるコンポーネント。

## 属性

- フェーズ -> [MaterialModification | マテリアル変更](/docs/Reference/General/ExecutionOrder.md#materialmodification--マテリアル変更)

## 設定項目

### MainSetting

#### TargetMaterial

Decal を追加する対象となるマテリアルを設定する項目です。アバターで使用されている物を指定することを推奨します。

#### DecalTexture

Decal として追加したいテクスチャーを設定する項目です。ここに割り当てられたテクスチャーがそのままマテリアルに設定されるので、 VRAM の増加量に一番大きく響くので気を付けましょう。

### lilToonSetting

lilToon の設定がそのまま露出しています。

[ここを参照](https://lilxyzw.github.io/lilToon/ja_JP/color/maincolor_layer.html)してください。

### WriteSetting

#### WriteUVTarget

どの UV に書き込むかが指定できますが、他の何らかの存在と衝突しないUVに書き込むように設定しましょう。

#### ReplaceTextureTarget

Texture の 2nd か 3rd を選択することができます。他の何らかの存在と衝突しないように設定しましょう。

#### IslandSelector

デカールが反映されるアイランドを選択するための IslandSelector を設定する項目です。

コンテキストメニューから生成した場合、 AimIslandSelector がデフォルトで生成されて割り当てられた状態になります。

## ReinaSakiria's-Note

これは TexTransTool v0.9.0 から 実験的機能として追加されたコンポーネントです。

[PR-#851](https://github.com/ReinaS-64892/TexTransTool/pull/851) にて作っては見たもの、このコンポーネントはテクスチャに対する編集は何一つ行われておらず、 TTT のテクスチャの改変という領域を大幅に逸脱していて、 [Issue-#850](https://github.com/ReinaS-64892/TexTransTool/issues/850) と一緒に別のツールに切り離すべきだと思っています。

誰かマテリアルやメッシュを編集してシェーダーのためにいい感じの設定をする非破壊ツールを作ってこのコンポーネントを持って行ってくれる人が現れてくれることを願っています。
