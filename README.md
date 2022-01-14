# CI/CD パイプライン

husky と lint-staged により`git commit`時に prettier と eslint が実行されるように設定しています。
`.lintstagedrc.js`に commit 時に実行されるコマンドが記述されています。

# テストについて

## [Unit Test]

jest を利用予定です。開発者が unit テストも一緒にプルリクエストを投げる予定です。
git push 時にテストに失敗したらはじかれる予定です。husky による導入はまだしていないので concourse で導入する予定です。

`npm run test`により\_\_test\_\_フォルダに書かれた test が実行されます。
snapshot テストは UI に差分がないことを確認するテストのです。（開発初期（あるいはずっと）では不要か？）

## [E2E テスト]

Cypress を利用予定です。

[参考リンク 1](https://nextjs.org/docs/testing#cypress)\
[参考リンク 2](https://docs.cypress.io/)

以下の理由で開発のメインに据えることはないです。[参考](https://zenn.dev/takepepe/articles/testing-with-nextjs)  
開発が落ち着いてきたら数シナリオで実装しても良いかも

- E2E テストは Flaky Test(動いたり動かなかったりする ⇒ 仮想ブラウザでエミュレートするため）になりやすい
- 実行に時間がかかるため
- 開発がある程度完成してからでないとシナリオが描けない

### command

エミュレータを起動します。(default は Electron?)WSL だと起動しません。

```sh
cypress
```

エミュレータを起動せずに e2e テストを実行します。

```
cypress:headless
```

サーバーを立ち上げてから,`cypress:headless` を実行します。

```sh
e2e
```

サーバーを立ち上げてから,`cypress:headless` を実行します。

```
e2e:headless
```

### 主なフォルダ(ファイル)の説明

| 名前                | 説明                                                                                        |
| :------------------ | :------------------------------------------------------------------------------------------ |
| cypress/videos      | テスト実行後にテスト時の動画が保存されます                                                  |
| cypress/screenshots | cy.screenshot()をテストコードとして実行するとスクリーンショットをこのフォルダに保存します。 |
| cypress/integration | テストコードを書きます                                                                      |
