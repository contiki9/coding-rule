import { Alert,Space } from 'antd'

<h2>画像のルールについて</h2>

<h2>命名の法則</h2>

- 画像のファイル名は`どこにある` `何`の順番で明記する
  - `どこにある`の順番はページを見て特定しやすい部分の順で明記する。
- 単語をつなぐ際は `-` を用いる

<h3>例</h3>

<Space size={8*2}>
    <Alert message="card-head-close-button.png" type="success" showIcon />
    <Alert message="head-card-close_button.png" type="error" showIcon />
</Space>

<h2 style="margin-top:32px">アイコンについて</h2>

アイコンは原則 SVG を利用します。

アイコンフォントを使う場合は計画を立てた上で統合管理します。（最初からフォントにはしない）
