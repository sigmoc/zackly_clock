# zackly_clock
ざっくり時計 V1.2 -- ざっくりとした現在時刻を表示する  
inspired by 所ジョージさんのDAITAI時計

change log:
## V1.2
 - 背景画像を使用可能とする  
 　htmlファイルと同じ階層に、`zackly_light_bg.jpg`(ライトモード用)、および`zackly_dark_bg.jpg`（ダークモード用）を置けば、それを背景に使用できる  
 　URLパラメータ `BG=(1|0)` で背景使用を指定可能
 - 背景画像の例（あくまで「ひとつのsample」）として象印さんのサイト`https://www.zojirushi.co.jp/life/garary/download/`から拝借した花柄ポットの絵を追加  
 　実際に使用する方は、各自、copyright的に大丈夫なモノを使ってねw

## V1.1
 - URLのパラメータから初期状態を設定可能とする  
 　`? 12h=(1|0) & dark=(1|0) & SP=(1|0) & size=20...150`  
 　同じパラメータを複数個書いたら後勝ち。`size`はselectの選択肢にある数字のみ有効
 - GreaseMonkeyを使ってブラウザの隅っこにざっくり時計を表示するユーザースクリプトを追加

## V1.0
 - First release on April 1, 2021.
