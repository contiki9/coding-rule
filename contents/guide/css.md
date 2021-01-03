import {Space} from "antd";

# CSS の命名について

- class 名はデザインから決めるのではなく、「何処で」「何を表現」するのかを端的な名前で表す。
- 単語をつなぐ場合は`-`を用いる
- component の Class には接頭語`.c-*`を用いる
- Wrapper 層にあたる CSS には接頭語`.w-*`を用いる
- Layout 層にあたる CSS には接頭語`.l-*`を用いる
- utility にあたる CSS には接頭語`.u-*`を用いる

## SCSS

<Space direction="vertical" size={16}>

<dl class="box-label">
  <dt>Mixin</dt>
  <dd>
    <ul>
    <li>自作した mixin は<code class="language-text">src/assets/css/config/</code>の中で<code class="language-text">_mixin.scss</code>を作りまとめる。
      <ul>
        <li>接頭語<code class="language-text">mx-*</code>をつける</li>
    </ul>
    </li>
    </ul>
  </dd>
</dl>

<dl class="box-label">
  <dt>Extend</dt>
  <dd>
    <ul>
      <li>自作した extend は<code class="language-text">src/assets/css/config/</code>の中で<code class="language-text">_extend.scss</code>を作りまとめる。
        <ul>
          <li>extend は接頭語<code class="language-text">ex-*</code>をつける</li>
          <li><code class="language-text">_extend.scss</code>の中には元のスタイルを CSS に出さないようにプレイスホルダーセレクタ<code class="language-text">%</code>を利用して書く。</li>
        </ul>
      </li>
    </ul>
  </dd>
</dl>
</Space>

## その他

<Space direction="vertical" size={16}>
<dl class="box-label">
  <dt>禁止事項</dt>
  <dd>
    <ul>
      <li><code class="language-text">id</code>要素をセレクタにして style を当てるのを禁止</li>
    </ul>
  </dd>
</dl>
</Space>
