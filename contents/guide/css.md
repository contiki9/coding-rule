# CSS の命名について

- class 名はデザインから決めるのではなく、「何処で」「何を表現」するのかを端的な名前で表す。
- 単語をつなぐ場合は`-`を用いる
- component の Class には接頭語`.c-*`を用いる
- Wrapper 層にあたる CSS には接頭語`.w-*`を用いる
- Layout 層にあたる CSS には接頭語`.l-*`を用いる
- utility にあたる CSS には接頭語`.u-*`を用いる

<h3>Mixin,Extendについて（SCSS）</h3>

- 自作した mixin は`src/assets/css/config/`の中で`_mixin.scss`を作りまとめる。
  - mixin は接頭語`mx-*`をつける
- 自作した extend は`src/assets/css/config/`の中で`_extend.scss`を作りまとめる。
  - mixin は接頭語`ex-*`をつける
  - `_extend.scss`の中には元のスタイルを CSS に出さないようにプレイスホルダーセレクタ`%`を利用して書く。

### その他注意

- `id`要素をセレクタにして style を当てるのを禁止
