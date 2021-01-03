import { Alert,Space } from 'antd'

# ディレクトリ の命名について

<h2>基本ルール</h2>
<div>
 <small>ビルドする前提です<br/>CMSやフレームワークを使う場合は公式の推奨に従います</small>
</div>

<Space direction="vertical" size={16} style={{marginTop:'16px'}}>

<dl class="box-label">
  <dt>ページ関連</dt>
  <dd>
    <ul>
      <li><code class="language-text">scr/pages</code>の中に入れる ※デプロイ方法がややこしくなる場合はこの限りではない</li>
      <li><code class="language-text">category.html</code>などではなく、<code class="language-text">category/index.html</code>のようになるべく <code class="language-text">index.html</code> とする</li>
    </ul>
  </dd>
</dl>
</Space>

<Space direction="vertical" size={16} style={{marginTop:'16px'}}>

<dl class="box-label">
  <dt>画像、CSS、JavaScript、Font関連</dt>
  <dd>
    <ul>
      <li><code class="language-text">scr/assets</code>の中で管理する。</li>
      <li>↑ の直下には<code class="language-text">images</code>,<code class="language-text">css</code>,<code class="language-text">js</code>,<code class="language-text">font</code>のフォルダに分けて管理します。
        <ul>
          <li>
          <small>※<code class="language-text">css</code>としているが<code class="language-text">scss</code>なども格納されます。<code class="language-text">scss</code>,<code class="language-text">sass</code>などで命名に迷いが出るのを避けるため<code class="language-text">css</code>とします。</small></li>
        </ul>
      </li>
    </ul>
  </dd>
</dl>
</Space>

<h2>ソースの詳細</h2>

<Space direction="vertical" size={16} style={{marginTop:'16px'}}>

<dl class="box-label">
  <dt>imagesの場合</dt>
  <dd>
    <ul>
      <li>
        <code class="language-text">images</code>の直下には<code class="language-text">common</code>,<code class="language-text">pages</code>,<code class="language-text">icon</code>,<code class="language-text">banner</code>のフォルダに分けて管理します。
      </li>
    </ul>
  </dd>
</dl>
</Space>

<Space direction="vertical" size={16} style={{marginTop:'16px'}}>

<dl class="box-label">
  <dt>CSS（SCSS）の場合</dt>
  <dd>
    <ul>
      <li>
        <code class="language-text">css</code>の直下には<code class="language-text">base</code>,<code class="language-text">config</code>,<code class="language-text">pages</code>,<code class="language-text">component</code>に分かれます。
        <ul>
          <li><code class="language-text">vendor</code>などは作らずになるべく<code class="language-text">node_module</code>から読み込みます。</li>
        </ul>
      </li>
      <li>最終的に<code class="language-text">style.scss</code>で集約してコンパイルする形にします。</li>
    </ul>
  </dd>
</dl>
</Space>

<Space direction="vertical" size={16} style={{marginTop:'16px'}}>

<dl class="box-label">
  <dt>JavaScript</dt>
  <dd>
    <ul>
      <li>最近は <code class="language-text">Vue</code>,<code class="language-text">Angular</code>,<code class="language-text">React</code> といった JS フレームワークを使うことが多く、フレームワークに準じます。</li>
      <li><small>※どれも<code class="language-text">import</code>を活用する方法が多く、<code class="language-text">vendor</code>などのディレクトリをつくらず管理するようにします。</small></li>
    </ul>
  </dd>
</dl>
</Space>
