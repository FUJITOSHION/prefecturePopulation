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


  - copy .env.sample .env
  - api等
    - https://opendata.resas-portal.go.jp/
    api key を取得し、.envを構築

  - yarn start
4.linterとprettierとeslint cliにもせってい
5.build
  - netlifyにdeply
  - master更新の旅に
