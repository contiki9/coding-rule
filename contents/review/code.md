import {Space} from "antd";

# Pull Request 時のレビューについて

## コメントの残し方

レビューをいうのは意図と違った受け取り方をされやすいものなので、温度感をコメントで補うようにしています。

<Space direction="vertical" size={16}>

<dl class="box">
  <dt>[MUST]</dt>
  <dd>絶対直してほしいなというときに付けます。強い指摘になるので、言葉遣いには少し気をつけます。</dd>
</dl>

<dl class="box">
  <dt>[IMO] （In my openion の略です）</dt>
  <dd>自分ならこうするかな〜？、自分はこう思うのだけどどうだろう？というときに使います。</dd>
</dl>

<dl class="box">
  <dt>[NITS] （Nits Pick の略）</dt>
  <dd>強制ではないが細かい指摘や、軽い修正をして欲しいときに使います。</dd>
</dl>

<dl class="box">
  <dt>[Q] （Question の略）</dt>
  <dd>ここわからないでの教えて！という時に付けます。実装で不明瞭だった点や、そもそも自分の知らないことについて聞いたりします。</dd>
</dl>
</Space>
