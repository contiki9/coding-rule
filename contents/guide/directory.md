<h2>基本ルール</h2>
 <small>ビルドする前提です<br/>CMSやフレームワークを使う場合は公式の推奨に従います</small>

<h3>ページ関連</h3>

- `scr/pages`の中に入れる ※デプロイ方法がややこしくなる場合はこの限りではない
- `category.html`などではなく、`category/index.html`のようになるべく `index.html` とする

<h3>画像、CSS、JavaScript、Font関連</h3>

- `scr/assets`の中で管理する。
- ↑ の直下には`images`,`css`,`js`,`font`のフォルダに分けて管理します。
  - ※`css`としているが`scss`なども格納されます。`scss`,`sass`などで命名に迷いが出るのを避けるため`css`とします。

<h2>ソースの詳細</h2>

<h3>imagesの場合</h3>

- `images`の直下には`common`,`pages`,`icon`,`banner`のフォルダに分けて管理します。

<h3>CSS（SCSS）の場合</h3>

- `css`の直下には`base`,`config`,`pages`,`component`に分かれます。
  - `vendor`などは作らずになるべく`node_module`から読み込みます。
- 最終的に`style.scss`で集約してコンパイルする形にします。
- 特定のページや要素にしか配置

<h3>JavaScript</h3>

最近は `Vue`,`Angular`,`React` といった JS フレームワークを使うことが多く、フレームワークに準じます。

※どれも`import`を活用する方法が多く、`vendor`などのディレクトリをつくらず管理するようにします。
