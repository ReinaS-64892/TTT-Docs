---
sidebar_position: 1
---

# TextureFineTuning

日本語表記 : テクスチャー詳細設定

AtlasTexture の生成したテクスチャーをそのまま使うのはかえって VRAM を増加させる可能性があったり、いらない MipMap ができしまったり  
時に細かい調整ができないことによって生じる問題を解決するための物です。

これらは設定はリストで表示されており、上から順に設定を適用し、下にある設定が優先されます。

## 共通することの多い項目

### ターゲットプロパティネーム

それら設定を行うテクスチャを選ぶためのプロパティの指定

リスト表示で、「何も指定しない」や「複数指定する」も可能です。

### 選択

上記の ターゲットプロパティネーム を基にどれを対象とするかの選択

__Equal__ の時は ターゲットプロパティネーム と同一のものが対象となり、  
__Not Equal__ の時は ターゲットプロパティネーム と同一ではないものが対象となります。

## Resize

指定したテクスチャの解像度を変更する設定

メインテクスチャー以外のテクスチャーはあまり多くの解像度がなくても問題ないことは多いので、解像度を落とすことでVRAM容量の削減をする設定です。

### サイズ

変更する解像度の指定

アトラステクスチャーサイズ よりも高い解像度にはしないように。

## Compress

AtlasTexture の生成したテクスチャーにかかる圧縮を明示的に指定する設定

デフォルトでは フォーマット品質が Normal の状態の設定がされます。

:::info
テクスチャーの圧縮はプレビューでは行われません。確認したい場合は NDMF の Apply On Play か Manual Bake 等を用いてください。
:::

### フォーマット品質

Texture2Dのインポート設定と似ていますが、少し差異があるためご注意ください。

#### StandaloneWin

- Nome   - RGBA32

アルファあり

- Low    - DXT1/BC1
- Normal - DXT1/BC1
- High   - BC7

アルファなし

- Low    - DXT5/BC3
- Normal - DXT5/BC3
- High   - BC7

#### Android

- Nome   - RGBA32
- Low    - Android-ASTC_8x8
- Normal - Android-ASTC_6x6
- High   - Android-ASTC_4x4

### フォーマットをオーバーライドする

上記フォーマット品質を無視し、強制的にフォーマットを指定する設定です。  
主に、VRAM 削減のために一部の色チャンネルしか持たない特殊なフォーマットを指定するときに使用します。

#### シンプルフォーマット選択

下記 オーバーライドするフォーマット をよく使いそうな一部だけで選択が可能な項目

下の物を選ぶほど低品質かカラーチャンネルが少なくなるように並べられています。

#### オーバーライドするフォーマット

オーバーライドするフォーマットを指定する項目

:::warning
すべてのフォーマットが指定できるので、ビルドターゲットに合わせて慎重に選択してください。
:::

#### 圧縮品質

オーバーライドするフォーマット がクランチ圧縮を使用するフォーマットの場合、クランチ圧縮の品質を指定する設定

0 ~ 100 までの値が使用できます。

## ReferenceCopy

AtlasTexture が生成したテクスチャを プロパティ間でコピーする設定

主に、メインテクスチャーをアウトライン用のテクスチャにコピーし、テクスチャ枚数を減らすような使い方を想定しています。

### ソース(ターゲット)プロパティネーム

ソースがコピー元、ターゲットがコピー先を指定する設定

## Remove

指定したテクスチャを消去し、強制的にマテリアルに割り当てられないようになる設定

テクスチャを消せばVRAM削減になります。削除は最強の軽量化！！！

### 削除する

この設定を無効化すると削除しないという上書きが可能になる設定です。

## MipMap

指定したテクスチャのミップマップの生成可否を指定可能になります。

### MipMapを生成する

有効な場合は MipMap を生成し、 無効な場合は MipMap を生成しないようにする設定ができます。

## ColorSpace

指定したテクスチャの色空間を指定する設定

アウトライン用のテクスチャなどはリニアな色空間にしておかないと、ガンマ補正によって意図しない結果になることがあるため、それを解決するための設定です。

### リニアとして扱う

この設定が有効の場合対象となるテクスチャはリニアテクスチャーに変更されます。

無効にして、リニアテクスチャーにしないという上書きが可能にもなる設定です。

## (実験的機能) DiscardAlphaChannel

アルファチャンネルを 1.0 (255) で埋めます。主に圧縮形式に影響するため、それを制御するためにあります。

### IsDiscard

この設定を無効化すると アルファの破棄を実行しないう上書きが可能になる設定です。

## (実験的機能) MergeTexture

衝突しない プロパティのテクスチャ同士を一つにマージすることで VRAM を削減することが可能なので、それを行うためにあります。

### MergeParent

マージを行うとき、最終的なテクスチャの設定(例えば解像度や圧縮設定など)を決定するために親を指定する設定です。

### MergeChildren

親以外のマージ対象を設定できます。

## 詳しい挙動

このテクスチャ詳細設定は二つのフェーズに分かれています。

テクスチャをどのような状態にするか、設定を決めるフェーズと、その情報を基にテクスチャに変更を適用するフェーズ。

### 設定フェーズ

コンポーネントから操作するのはこのフェーズのこと。

具体的にどのような順番で設定が適用されるかというと次の順番で、

- 実験的機能の [自動リファレンスコピー設定](/docs/Reference/AtlasTexture#自動リファレンスコピー設定) と [自動マージテクスチャー設定](/docs/Reference/AtlasTexture#自動マージテクスチャー設定)
- [テクスチャー詳細設定](/docs/Reference/AtlasTexture#テクスチャー詳細設定) を上から順に
- [テクスチャ個別詳細設定](/docs/Reference/AtlasTexture#テクスチャ個別詳細設定)

の順に設定を上書きして行き、下の物が優先される仕様です。

### 適用フェーズ

設定フェーズで決定されたテクスチャに対する設定を下の順番で適用します。

- Resize
- ColorSpace
- MipMap
- CompressionQuality
- DiscardAlphaChannel
- MergeTexture
- ReferenceCopy
- Remove

これ元に考える必要があるのはこの二つ

- MergeTexture
- ReferenceCopy

これらは特定のプロパティの設定を継承したり、結合したりするわけですが、

MergeTexture の場合は基本的に Parent に設定されたテクスチャーの設定を継承、

ReferenceCopy はソースのテクスチャーをコピーするので、コピーターゲットが持っていたテクスチャー情報は破棄され、ソースのテクスチャの設定になります。
