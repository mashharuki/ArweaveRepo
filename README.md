# ArweaveRepo

Arweave を学習するためのリポジトリです。

## 動かし方

- install

  ```bash
  yarn
  ```

- ファイルアップロード

  ```bash
  yarn sample fileUpload
  ```

  ```bash
  Summary
  All items will be deployed in a single bundle
  Total size: 13.00 Bytes
  Fees: 0.000185021129 + 0.000018502112 (10% arkb fee )
  Total fee: 0.000203523241

  Wallet
  Address: YNxeyvUeQCMOe7wvm6BBeIHRiJGyWAZW7S7-faaS8Z8
  Current balance: 0.050000000000
  Balance after deploy: 0.049796476759
  Files deployed! Visit the following URL to see your deployed content:
  https://arweave.net/Sne6VU7MnIcGlGzGvCt3m0XqDhYBdrnlL4FINm4qhbk
  ```

  [https://arweave.net/Sne6VU7MnIcGlGzGvCt3m0XqDhYBdrnlL4FINm4qhbk](https://arweave.net/Sne6VU7MnIcGlGzGvCt3m0XqDhYBdrnlL4FINm4qhbk)にアクセスすると本当にファイルがデプロイされている。

- SPA のフロントエンドアプリケーションをホスティングする方法

  - フロントエンドのビルド

    ```bash
    yarn myapp build
    ```

  - ビルド成果物のデプロイ

    ```bash
    yarn myapp deploy
    ```

    ```bash
    Summary
    All items will be deployed in a single bundle
    Total size: 202.63 kB
    Fees: 0.000740084516 + 0.000074008451 (10% arkb fee )
    Total fee: 0.000814092967

    Wallet
    Address: YNxeyvUeQCMOe7wvm6BBeIHRiJGyWAZW7S7-faaS8Z8
    Current balance: 0.049814978871
    Balance after deploy: 0.049000885903999994


    Files deployed! Visit the following URL to see your deployed content:
    https://arweave.net/-64xbGEuURj9p66TORn2yKWJJey9aj3fm_QqJlmTEPA
    ```

    [https://arweave.net/-64xbGEuURj9p66TORn2yKWJJey9aj3fm_QqJlmTEPA](https://arweave.net/-64xbGEuURj9p66TORn2yKWJJey9aj3fm_QqJlmTEPA)にアクセスすると SPA のアプリケーションがデプロイされている。

- `aos`を使ってメッセージを送ってみる方法

  ローカルで起動する。

  ```bash
  aos --wallet ./pkgs/sample/keyfile.json
  ```

  ```bash
  default@aos-0.2.1[Inbox:1]> Morpheus = "ajrGnUq9x9-K1TY1MSiKwNWhNTbq7-IdtFa33T59b7s"
  undefined
  default@aos-0.2.1[Inbox:1]> Send({ Target = Morpheus, Data = "Morpheus?" })
  Message added to outbox.
  New Message From ajr...b7s: Data = I am here. You are f
  default@aos-0.2.1[Inbox:2]> Inbox[#Inbox].Data
  I am here. You are finally awake. Are you ready to see how far the rabbit hole goes?
  ```

### 参考文献

1. [Arweave / AO 開発入門](https://github.com/arweavejp/.github/blob/master/docs/quick-start.md)
2. [Arweave/AO リソースまとめ](https://github.com/arweavejp/.github/blob/master/docs/resources.md)
3. [AO Link](https://www.ao.link/)
