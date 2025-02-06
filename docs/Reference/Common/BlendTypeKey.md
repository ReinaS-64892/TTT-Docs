# BlendTypeKey

日本語表記 : ブレンドタイプキー

一般的な画像編集ソフトやお絵かきツールの合成モードを指す存在

## 合成モード一覧

特殊な色合成をしない系

- Normal-通常
- Dissolve-ディザ合成
- NotBlend-合成なし

暗くする系

- Mul-乗算
- ColorBurn-焼きこみカラー
- LinearBurn-焼きこみ(リニア)
- DarkenOnly-比較(暗)
- DarkenColorOnly-カラー比較(暗)

明るくする系

- Screen-スクリーン
- ColorDodge-覆い焼きカラー
- ColorDodgeGlow-覆い焼き(発光)
- Addition-加算-覆い焼き(リニア)
- AdditionGlow-加算(発光)
- LightenOnly-比較(明)
- LightenColorOnly-カラー比較(明)

ライト系

- Overlay-オーバーレイ
- SoftLight-ソフトライト
- HardLight-ハードライト
- VividLight-ビビッドライト
- LinearLight-リニアライト
- PinLight-ピンライト
- HardMix-ハードミックス

算術系

- Difference-差の絶対値
- Exclusion-除外
- Subtract-減算
- Divide-除算

視覚的な色調置き換え系

- Hue-色相
- Saturation-彩度
- Color-カラー
- Luminosity-輝度

クリスタ式合成モード

- Clip/*

## 合成モードを追加する

:::warning
BlendTypeKey の追加は実験的な機能です！予告なく機能変更や削除がされる可能性があります。
:::

特定の形に HLSL を記述し、拡張子を `.ttblend` として Unity のプロジェクト内に保存すると追加することができます！

### 基本的な記述方式

初めに、コメントとして使われる範囲の場所に、

`BEGIN__TT_COMPUTE_SHADER_HEADER` `END__TT_COMPUTE_SHADER_HEADER`

で囲み必要な情報を記述する必要があります。

`Language`(必須) -> シェーダーの言語をしてする項目ですが、 Unity で使用できる言語は `HLSL` だけなので(ComputeShaderの場合)事実上 `HLSL` 以外の選択肢は存在しません。

`LanguageVersion`(必須) -> 主に[このあたりの物](https://github.com/microsoft/DirectXShaderCompiler/wiki/Language-Versions)を指しますが、Unity で使用できる HLSL バージョンは固定なので事実上 2018 以外の選択肢は存在しません。

`ColorSpace`(必須) -> 色合成を行う色空間を定義します。 `Gamma` か `Linear` が選択可能ですが、特に意味はありません。

`Key`(必須) -> BlendTypeKey となり、プレハブなどのセーブデータに保存されます！ 英数字と `/` だけが使用可能で、一階層以上にしてください。例 `YourNameOrProductName/BlendingName`

`KeyName` -> BlendTypeKey のインスペクター上での表示名を指定できます。存在しない場合は `Key` が表示され、現在指定可能なのは TTT の言語設定の仕様上 `en` と `jp` のみです。

コメントに情報を埋め込んだら最後に、`ColorBlend` という名前の `float4` を二つ引数に持ち、一つの `float4` を返す関数を定義する必要があり、それが色合成の関数となります。

Example ↓

```HLSL
// SimpleAdded.ttblend
// This sample code is license under CC0
/*
BEGIN__TT_COMPUTE_SHADER_HEADER

Language HLSL
LanguageVersion 2018

TTComputeType Blending

ColorSpace Gamma

Key SampleBlend/SimpleAdded

KeyName en SampleBlend/SimpleAdded
KeyName ja サンプルブレンド/シンプル加算

END__TT_COMPUTE_SHADER_HEADER
*/


float4 ColorBlend(float4 BaseColor, float4 AddColor)
{
    return BaseColor + AddColor;
}
```
