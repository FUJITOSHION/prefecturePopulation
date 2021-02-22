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
$ yarn start
```

## linter

このプロジェクトではeslintとprettierとstylelintを導入しています。

CLIから以下のように使用します。

``` bash
$ yarn lint
yarn run v1.22.10
$ yarn typecheck && run-p lint:*
$ tsc -p . --noEmit
$ eslint src --ext .ts,.tsx,.jsx
$ stylelint 'src/**/*.css'
✨  Done in 8.78s.
```

自動修正は以下のようにします。

``` bash
$ yarn fix
yarn run v1.22.10
$ run-p fix:*
$ prettier '**/*.{ts,tsx,js,jsx,json,css}' --write
$ yarn lint:eslint --fix
$ yarn lint:stylelint --fix
$ eslint src --ext .ts,.tsx,.jsx --fix
$ stylelint 'src/**/*.css' --fix
...
✨  Done in 7.60s.
```

# 本番環境

netlifyを使用してデプロイしています。-> [人口推移アプリ](https://poplulation-prefecture.netlify.app/)

master更新のたびに自動で更新されます。

