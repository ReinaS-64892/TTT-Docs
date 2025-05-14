# TTCE-Wgpu

[github repository](https://github.com/ReinaS-64892/TTCE-Wgpu)

## 概要

TexTransCore にある ComputeShader の抽象化レイヤー実装で、当然 Unity の  API を使って その抽象化レイヤーの実装が TexTransTool には存在するため、通常必要のない存在。

ですが、TexTransTool の資産のライフタイムを Unity とバインドしないと言う意義のため。

そして、私のメイン環境が Linux に移動した都合で UnityEditor(OpenGL) 環境下から Vulkan をゴリ押しで使うため、他に手段がないゆえに実用化された存在です。

## インストール方法

TexTransTool と同様 VPM からインストールしてください。

## 使用方法

VPM からインストールした後、[設定](/docs/Reference/EditorWindow/TTT-Menu#textranscoreengine-バックエンド) から `TexTransCoreEngine バックエンド` を `Wgpu` に指定することで TTCE-Wgpu のバックエンドを用いてビルド時の処理を行わせることができるようになります。

## 注意事項

このパッケージは NativeDLL を使用します。そのため、一度このパッケージの機能を使用した場合、 Unity を再起動するまで アップデートや削除ができない可能性があります。
