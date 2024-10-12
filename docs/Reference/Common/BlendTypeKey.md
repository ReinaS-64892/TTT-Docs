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

## 合成モードを追加する

:::warning
BlendTypeKey の追加は実験的な機能です！予告なく機能変更や削除がされる可能性があります。
:::

特定の形に HLSL を記述し、拡張子を `.ttblend` として Unity のプロジェクト内に保存すると追加することができます！

### 基本的な記述方式

初めに、コンパイラ指令 `#pragma` にいくつかの情報を記述する必要があります。

`HLSL_Version`(必須) -> 主に[このあたりの物](https://github.com/microsoft/DirectXShaderCompiler/wiki/Language-Versions)を指しますが、Unity で使用できる HLSL バージョンは固定なので事実上 2018 以外の選択肢は存在しません。

`ColorSpace`(必須) -> 色合成を行う色空間を定義します。 `Gamma` か `Linear` が選択可能で、関数に渡ってくる色の値がそれぞれに補正されたものになります。

`Key`(必須) -> BlendTypeKey となり、プレハブなどのセーブデータに保存されます！

`KeyName_*` -> BlendTypeKey のインスペクター上での表示名を指定できます。存在しない場合は `Key` が表示され、現在指定可能なのは TTT の言語設定の仕様上 `en` と `jp` のみです。

コンパイラ指令を書き終えたら最後に、`ColorBlend` という名前の `float4` を二つ引数に持ち、一つの `float4` を返す関数を定義する必要があり、それが色合成の関数となります。

Example ↓

```HLSL
// SimpleAdded.ttblend
// This sample code is license under CC0
#pragma HLSL_Version 2018
#pragma ColorSpace Gamma
#pragma Key "SampleBlend/SimpleAdded"
#pragma KeyName_en "SampleBlend/SimpleAdded"
#pragma KeyName_jp "サンプルブレンド/シンプル加算"


float4 ColorBlend(float4 BaseColor, float4 AddColor)
{
    return BaseColor + AddColor;
}
```
