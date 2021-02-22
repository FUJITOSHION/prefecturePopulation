# 都道府県別人口推移のグラフを表示

チェックボックスがありチェックするとRESASから取得した当道府県ごとの人口の推移を表示します。(複数選択可)

# 環境

nodeのversion

``` bash
$ node -v
v15.3.0
```

## 初期設定

必要なパッケージをインストールします。

``` bash
$ yarn install
```
環境変数をコピーします。

``` bash
$ cp .env.sample .env
```

[RESAS](https://opendata.resas-portal.go.jp/) から取得したAPI KEYを.envを上書きします。

``` env
REACT_APP_RESAS_API_KEI="Your RESAS api key here"
```

以上で環境構築は完了なので、開発サーバーを立てます。

``` bash
yarn start
```

4.linterとprettierとeslint cliにもせってい
5.build
  - netlifyにdeply
  - master更新の旅に


git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch src/api/index.ts" \
  --prune-empty --tag-name-filter cat -- --all
