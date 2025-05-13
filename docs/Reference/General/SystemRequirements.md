# システム要件

- UnityEditor が動作可能な環境であること
- ComputeShader が動作する GraphicsAPI が提供されていること ( OpenGL を除く )
  - (windows) DirectX 11 (機能レベル 11) 以上を実装する GPU がある環境 (例えば RTX 2060SP, RTX 3060)
  - (linux) vulkan を実装する GPU がある環境 (例えば RX 6700XT)
  - (Mac) Metal が動作する環境 (開発者による検証は行われていません。)
  - (windows or linux)(noGPU) LLVMpipe などにより Vulkan の実装がある環境

## Editor の必須要件

TexTransTool は OpenGL をサポートしません。

Linux 環境では VRCSDK によって OpenGL に固定されますが、それを[破壊](https://github.com/KisaragiEffective/VulkanOnUnity)するか、起動オプションを使用し Vulkan の使用を強制してください！

それ以外の環境では、

- (Windows) 特記事項はありません。
- (Mac) Metal を使用してください。誤って OpenGL にしないように気をつけてください。

## OpenGL の非推奨について

現状 Linux 環境にて`NVIDIA`や`AMD-Radeon`のGPUにおいて TexTransTool の使用に耐えれる OpenGL Driver 実装が見つかっていないためサポートできません。

ただし、`LIBGL_ALWAYS_SOFTWARE` にて使用可能な Software OpenGL Driver では正常に動作することが確認されています。

Linux 以外の環境ではテストすらもなされていないため、 Linux の例もありサポートされていません。
