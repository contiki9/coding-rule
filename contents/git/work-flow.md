import {Timeline,Space} from "antd";

# Git のワークフロー

一人での開発の場合、`github flow`を好み、複数人の開発では、`git flow`を好みます。

## 使用するブランチの役割

<Space direction="vertical" size={16}>

<dl class="box">
  <dt>release ブランチ</dt>
  <dd>現在本番環境にリリースされているブランチ</dd>
</dl>
<dl class="box">
  <dt>masterブランチ</dt>
  <dd>常時デプロイ可能なブランチ</dd>
</dl>
<dl class="box">
  <dt>featureブランチ</dt>
  <dd>masterブランチから生やしたブランチ。各 issue,または epic 毎に作る</dd>
</dl>
<dl class="box">
  <dt>topicブランチ</dt>
  <dd>featureブランチから生やしたブランチ。featureブランチにマージされる。</dd>
</dl>
<dl class="box">
  <dt>hotfixブランチ</dt>
  <dd>releaseブランチから生やしたブランチ。緊急対応のときに利用する。</dd>
</dl>

</Space>

## 通常の開発のブランチ管理の流れ

<Timeline>
  <Timeline.Item><code class="language-text">master</code> から <code class="language-text">feature</code> ブランチを切る</Timeline.Item>
  <Timeline.Item><code class="language-text">feature</code> ブランチまたは <code class="language-text">feature</code> ブランチの子ブランチ（topic ブランチ）で作業</Timeline.Item>
  <Timeline.Item>作業完了及びデバッグ完了したら親ブランチ(枝元のブランチ)にプルリクエストを出す</Timeline.Item>
  <Timeline.Item>コードレビューとデバックが終わったらマージ後、<code class="language-text">feature</code> ブランチの削除をして、すぐに <code class="language-text">master</code> に取り込む。</Timeline.Item>
  <Timeline.Item>プロジェクト管理をしている場合はチケットを本番反映済みにする</Timeline.Item>
</Timeline>

## 緊急不具合対応の場合

<Timeline>
  <Timeline.Item><code class="language-text">master</code> から <code class="language-text">hotfix</code> ブランチを生やす。修正の規模が大きい場合は <code class="language-text">hotfix</code> ブランチから <code class="language-text">feature</code> ブランチを生やす</Timeline.Item>
  <Timeline.Item><code class="language-text">feature</code> ブランチで作業完了及びデバッグ完了したら <code class="language-text">hotfix</code> ブランチにプルリクエストを出しレビュアーにマージしてもらう</Timeline.Item>
  <Timeline.Item><code class="language-text">hotfix</code> ブランチを <code class="language-text">release</code> ブランチにマージ。その後、<code class="language-text">release</code> ブランチを <code class="language-text">master</code> ブランチマージする。</Timeline.Item>
</Timeline>

## 基本原則

<Space direction="vertical" size={16}>

<dl class="box-label">
  <dt>機能追加、バグフィックスなどは issue の番号と説明的な名前のブランチ名にして master から作成する</dt>
  <dd>
    <ul>
      <li>
        <code class="language-text">hotfix</code>ブランチの場合は<code class="language-text">hotfix/</code> + <code class="language-text">issue の番号</code> と説明的な名前のブランチ名で命名する</li>
      <li>ブランチ名で複数の単語を使う場合は<code class="language-text">-</code>を使う</li>
      </ul>
  </dd>
</dl>

<dl class="box-label">
  <dt>フィードバックや助言が欲しい時、ブランチをマージしてもよいと思ったときは、Pull Request を作成する</dt>
  <dd>
    <ul>
      <li>フィードバックや助言が欲しい時、または作りかけの Pull Request には[WIP] をつける</li>
      </ul>
  </dd>
</dl>
</Space>

## issue テンプレート

[設定方法](https://docs.github.com/ja/github/building-a-strong-community/configuring-issue-templates-for-your-repository)

### 要望テンプレート

```
# 概要/背景

# 目的

# 得られるもの

# 実装案

# 備考

```

### 不具合テンプレート

[設定方法](https://docs.github.com/ja/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository)

```
# 概要

# 再現手順

# 修正しないとどう困るか

# 原因と思われる部分

# 修正案

# 備考

```

## Pull Request テンプレート

```
<!-- あくまでテンプレートなので必ずしもすべての項目を埋めなくてよい -->

# 概要/対応issue
<!-- 変更の目的 もしくは 関連する Issue 番号 -->

# 変更内容
<!-- ビューの変更がある場合はスクショによる比較などがあるとわかりやすい -->

# 影響範囲
<!-- この関数を変更したのでこの機能にも影響がある、など -->

# 動作要件
<!-- 動作に必要な 環境変数 / 依存関係 / DBの更新 など -->

# 補足
<!-- レビューをする際に見てほしい点、ローカル環境で試す際の注意点、など -->
```
