---
title: TexTransCore の話
description: TexTransTool の依存するパッケージである TexTransCore の成り立ちやその詳細についての話
authors: ReinaSakiria
---

## はじめに

これは私が唐突に [TexTransCore] のことをもう少しコード以上に書き残したものを増やしておいても良いな、と思ったがゆえに書くことにしたブログです。

よかったら見ていってください。

## 事のはじまり

すべては [TTT PSD Importer](https://ttt.rs64.net/docs/Reference/TexTransToolPSDImporter) と [MultiLayerImageCanvas](https://ttt.rs64.net/docs/Reference/MultiLayerImageCanvas) のために始まります。

これらは

「PSD を解析し、TexTransTool の形に調整しながら落とし込み」

「落とし込んだ PSD をレイヤーレベルで再構築し色合成などを行い、ほぼ完全再現する」

ことが出来ます。

ここでは後者に注目しますが、PSD の 再構築・ほぼ完全再現 は [Adobe Photoshop](https://www.adobe.com/jp/products/photoshop.html) と [CLIP STUDIO PAINT](https://www.clipstudio.net/ja/) ぐらいしか行えてないことの多い、それなりに希有なことだと思います。

とくに、 OSS に目を向けるのであれば、多くは PSD の再現性があまり高くありません。(少なくとも私の触れたことのある [GIMP](https://www.gimp.org/) や [Krita](https://krita.org/ja/) などでは)

私は、(当初はできそうだったからですが ... ) アバターの非破壊テクスチャ改変に、PSDのレイヤーを持ち込み、更に高度な色改変を非破壊できることを目標としています。

が、あまり表にしてない 裏のテーマ があります。

それが「この世のアバターのテクスチャ、 PSD という資産を全て __Save__ すること」

私はこれを「レイヤーの編集可能性を保ったまま PSD を再現し、完全オフラインでも動作し、自由のあるコードベースにて実現する」と考えます。

そう考えた時に [TexTransTool] は MIT License にてライセンスされた、自由で完全オフラインでも動作できますが、[TexTransTool] の依存する Unity は「ライセンス認証を持つため完全オフラインにはなれず、不自由 な プロプライエタリ ソフトウェア」になります。

これは ... この裏のテーマを達するためには、非常に邪魔です。

[TexTransTool] が完全に Unity に依存している限り、この裏テーマは達成不可能です。

(また、[Adobe Photoshop](https://www.adobe.com/jp/products/photoshop.html) や [CLIP STUDIO PAINT](https://www.clipstudio.net/ja/) よりも長く生きていられる可能性があることに意味があり、それが裏のテーマを持つ意義でもあるはずですが、それよりも不安定かもしれない Unity に完全に依存してしまっているというのは、あまりに本末転倒な話でもあります。)

## でもどうやって

裏テーマを達するために、[TexTransTool] から、Unity に対する依存を引きがさなければいけないですが、そう簡単にできることではありません。

Unity の外部で処理をして結果の画像だけを Unity に持ち込む、のような形で依存を切り離すのは容易ですが、その当時から [TexTransTool] には Preview があるのでその形での依存の切り離しは非常に厳しい状況です。

外部で処理した画像を Unity に毎度持ち込むようなことをしていれば、Preview の応答速度が大きく落ちてしまいますし、Native DLL も UnityEditor の仕様上扱いづらいため [GPU 上でのメモリ共有](https://blog.rs64.net/posts/unity-to-external-proces-passing-gpu-memory/)も厳しい。

とどのつまり、入力と出力を行い、Unityの外部で処理を行う形では依存の引き剥がしが出来ない、けれど Unity からの依存を引き剥がしたい。

それを満たすためには、完全に Unity の上でも動作できながら、 Unity ではない場所でも動作できる必要がある ...

ならば、画像を処理をする命令自体を抽象化し TTT 独自の画像処理操作を構築し、それを Unity や別の何かにマッピングすればよいということ！

## TexTransCoreEngine

[TexTransTool] の行う処理の多くは GPU で行われていて、 Unity の GPU を使用できる GraphicsAPI はそれなりに高度なAPI になりますが、(同等の抽象度で)そのうえにもう一枚レイヤーを挟むことは出来なくはないでしょう。

それに [TexTransTool] の行う処理の多くは ComputeShader で実現可能なので、ComputeShader に絞った抽象化レイヤーになるので、あまり大掛かりなものにもならないだろうと踏んでいました。

Unity の GraphicsAPI に対する操作を Interface として切り出し、 Unity の RenderTexture や Texture2D などを Interface として取り扱うようにし、最低限その IO を可能にし、ついでに [TexTransTool] で辛かった取り扱いの部分をついでに取り回ししやすくしたり ...

そうして、[ITexTransCoreEngine](https://github.com/ReinaS-64892/TexTransCore/blob/d2d0db32cb60d25bc21b1b56b3c7d2f3a230f3bd/src/TexTransCoreEngine/ITTEngine.cs) という Interface とその周辺の Interface 群を定義し、[TTCEUnity](https://github.com/ReinaS-64892/TexTransTool/blob/a1f3f1e6e77a066b5fd47f2b692e069cf18b8ff0/TTCE-Unity/TTCEUnity.cs) として Unity の実装を作ることで、 Unity の上で動作も出来ながら、 Unity に完全に依存せずに 画像処理を行えるようになりました。

また、その [ITexTransCoreEngine](https://github.com/ReinaS-64892/TexTransCore/blob/d2d0db32cb60d25bc21b1b56b3c7d2f3a230f3bd/src/TexTransCoreEngine/ITTEngine.cs) を (Rust で実装された WebGPU 実装の一つで Firefox に使われているらしい) [wgpu](https://github.com/gfx-rs/wgpu) をベースに実装した [TTCE-Wgpu](https://github.com/ReinaS-64892/TTCE-Wgpu) を作れたため、 Unity の Graphics API を使用せずに画像処理ができるようになりました。

本当に、 Unity の上で動作もできれば、 Unity の外でも動作ができます。

## TexTransCore

そうして、 [TexTransTool]から、 TexTransCoreEngine の部分と、 TexTransCoreEngine に対する操作を行う関数といった、[TexTransTool] の世界の中で完結する部分を切り出したものが [TexTransCore] になります。

TexTransCoreEngine を作った当初ぐらいから [MultiLayerImageCanvas](https://ttt.rs64.net/docs/Reference/MultiLayerImageCanvas) の画像処理を行う実装は [TexTransCore] に移しましたし、 [TexTransTool] v0.9.0 から SimpleDecal などのデカール系の画像処理部分、[TexTransTool] v0.10.0 から AtlasTexture も画像処理部分は [TexTransCore] に実装が移植されています。

いまや [TexTransTool] の主要なコンポーネントの、本当に核心の部分は [TexTransCore] 側に実装があり、頑張れば Unity の外に持ち出しできます。

[MultiLayerImageCanvas](https://ttt.rs64.net/docs/Reference/MultiLayerImageCanvas) に関しては、[TexTransCore] 側に大きく寄せてあるため、動作する環境を整えてあげれば容易に Unity の外に持ち出せるでしょう。

これで 裏テーマ を達成するに大きく邪魔な Unity に対する完全な依存を廃したことになります！

## おわり

いくら、[TexTransTool] の内部で [TexTransCore] によって、Unity への完全依存が消えたとしても、[TexTransTool] を 非破壊ツールとして使うユーザーから見たら、なにも変わらないんですど ...

良くも悪くも、この話はすべて [TexTransTool] の裏側の話になります。目的も 裏のテーマ ですし ... ね

[TexTransCore] は、そんな私の 裏のテーマ　を達成するため、その思惑のために作られた代物です。

C# が読める方で、よかったら [TexTransCore] のソースコードを見ていってください、大量の interface と interface を操作する関数、また GPU で実行する hlsl の集合体です。読むにしては非常に難易度が高いと思いますが、面白いかもしれません ()

でも、[TexTransCore] を作ったのには、裏のテーマ 以外にも、もう少し思惑があるのですが、それはまたいずれ

こんな、読んでも読まなくても [TexTransTool] の使うに特に何も寄与しないブログを最後までお読みいただきありがとうございます。　それでは、またどこかで！

[TexTransCore]: https://github.com/ReinaS-64892/TexTransCore
[TexTransTool]: https://github.com/ReinaS-64892/TexTransTool
