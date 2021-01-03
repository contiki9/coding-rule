import { Alert,Space } from 'antd'

# 画像のルールについて

<h2>命名の法則</h2>

<Space direction="vertical" size={16}>
<dl class="box-label">
  <dt>命名</dt>
  <dd>
    <ul>
      <li>
      <p>単語をつなぐ際は <code class="language-text">-</code> を用いる。<code class="language-text">_</code>は使用しない</p>
      <Space size={8*2}>
        <Alert message="card-head-close-button.png" type="success" showIcon />
        <Alert message="card-head-close_button.png" type="error" showIcon />
      </Space>
      </li>
      </ul>
  </dd>
</dl>
</Space>

## アイコン

<Space direction="vertical" size={16}>

<dl class="box-label">
  <dt>拡張子</dt>
  <dd>
    <ul>
      <li>アイコンは原則 SVG を利用します。</li>
      <li>アイコンフォントを使う場合は計画を立てた上で統合管理します。（最初からフォントにはしない）</li>
      </ul>
  </dd>
</dl>
</Space>
