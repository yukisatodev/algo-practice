# algo-practice

アルゴリズム問題を解いて積み上げていく、学習用のリポジトリです。
ポートフォリオの「制作物」とは別に、日々の学習記録として運用しています。

## 方針

- 1問1ファイル（Javaのみ1問1フォルダ）で、標準入力から読み取り・標準出力に書き出す形式（paizaと同じスタイル）に統一
- 実務経験のある言語 + 学習中の言語で、同じ問題を複数言語で解く
- 各ファイルの冒頭に、問題の概要と自分なりの解法メモを残す
- 解けなくて詰まった問題も、`- 未完了` として残しておく（後で見返すため）

## 対応言語

- **Python** — `python/`
- **JavaScript** — `javascript/`
- **TypeScript** — `typescript/`
- **Java** — `java/`
- **C#** — `csharp/`

## 構成

```
algo-practice/
  python/
    001_fizzbuzz.py
    002_two_sum.py
    003_palindrome_check.py
  javascript/
    001_fizzbuzz.js
    002_two_sum.js
    003_palindrome_check.js
  typescript/
    001_fizzbuzz.ts
    002_two_sum.ts
    003_palindrome_check.ts
    tsconfig.json
  java/
    001_fizzbuzz/Main.java
    002_two_sum/Main.java
    003_palindrome_check/Main.java
  csharp/
    001_fizzbuzz.cs
    002_two_sum.cs
    003_palindrome_check.cs
```

ファイル名は `連番_問題名` で言語間を統一しています。同じ問題番号なら、どの言語でも同じ問題です。

## 進捗

| # | 問題 | 難易度目安 | Python | JS | TS | Java | C# |
|---|---|---|---|---|---|---|---|
| 001 | FizzBuzz | easy | ✅ | ✅ | ✅ | ✅ | ✅ |
| 002 | Two Sum（2つの和） | easy | ✅ | ✅ | ✅ | ✅ | ✅ |
| 003 | 回文判定 | easy | ✅ | ✅ | ✅ | ✅ | ✅ |

## ローカルで実行する

```bash
# Python
python3 python/001_fizzbuzz.py

# JavaScript
node javascript/001_fizzbuzz.js

# TypeScript（事前に tsc -p typescript/tsconfig.json でコンパイル）
node typescript/dist/001_fizzbuzz.js

# Java（フォルダごとコンパイル）
javac java/001_fizzbuzz/Main.java -d java/001_fizzbuzz
java -cp java/001_fizzbuzz Main

# C#
mcs csharp/001_fizzbuzz.cs -out:csharp/001_fizzbuzz.exe
mono csharp/001_fizzbuzz.exe
```

標準入力が必要な問題は、以下のようにパイプで渡すか、実行後にキーボードから入力してください。

```bash
echo "5" | python3 python/002_two_sum.py
```

## 新しい問題を追加するときのテンプレート（Python例）

```python
"""
問題: (問題の概要を1〜2行で)
入力: (入力の形式)
出力: (出力の形式)
"""

def solve():
    # 標準入力を読む
    ...
    # 処理
    ...
    # 標準出力に書く
    print(...)


if __name__ == "__main__":
    solve()
```

同じ問題を他の言語でも解いて、`javascript/` `typescript/` `java/` `csharp/` に同じ番号で追加していく運用にしています。
