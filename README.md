# algo-practice

アルゴリズム問題を解いて積み上げていく、学習用のリポジトリです。
ポートフォリオの「制作物」とは別に、日々の学習記録として運用しています。

---

## 1. 背景・目的

複数の言語を実務・独学で扱ってきた中で、「言語ごとの基本文法は書けるが、同じ問題を複数言語で解く形で横断的に比較した経験は少ない」という課題を自覚していました。同じ問題を実務経験のある言語と学習中の言語の両方で解くことで、

- 言語間の書き方の違い（型システム、標準入出力の扱いなど）を体感的に比較する
- アルゴリズムの考え方そのものを、特定の言語の書き方に依存せず身につける

ことを目的にしています。

## 2. 運用方針（要件）

| ID | 方針 | 内容 |
|---|---|---|
| R-1 | 統一フォーマット | 標準入力から読み取り・標準出力に書き出す形式（paizaと同じスタイル）に統一する |
| R-2 | 番号での対応付け | ファイル名（Javaはフォルダ名）を`連番_問題名`とし、同じ番号なら全言語で同じ問題を指す |
| R-3 | 複数言語での実装 | 実務経験のある言語＋学習中の言語で、同じ問題を複数言語で解く |
| R-4 | 解法メモの記録 | 各ファイルの冒頭に、問題の概要と自分なりの解法メモを残す |
| R-5 | 未完了の可視化 | 解けなくて詰まった問題も削除せず「未完了」として残し、後で見返せるようにする |

## 3. 対応言語と、言語ごとの取り扱い

| 言語 | 場所 | 備考 |
|---|---|---|
| Python | `python/` | `連番_問題名.py`。1問1ファイル |
| JavaScript | `javascript/` | `連番_問題名.js`。1問1ファイル |
| TypeScript | `typescript/` | `連番_問題名.ts`。共通の`tsconfig.json`を使用 |
| Java | `java/連番_問題名/Main.java` | Javaは「ファイル名とpublicクラス名を一致させる必要がある」制約があるため、他言語のような`連番_問題名.java`という命名ができない。番号はフォルダ名側で管理し、ファイル名は`Main.java`に統一している |
| C# | `csharp/` | `連番_問題名.cs`。1問1ファイル |

## 4. 構成

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

## 5. 進捗

| # | 問題 | 難易度目安 | Python | JS | TS | Java | C# |
|---|---|---|---|---|---|---|---|
| 001 | FizzBuzz | easy | ✅ | ✅ | ✅ | ✅ | ✅ |
| 002 | Two Sum（2つの和） | easy | ✅ | ✅ | ✅ | ✅ | ✅ |
| 003 | 回文判定 | easy | ✅ | ✅ | ✅ | ✅ | ✅ |

## 6. ローカルで実行する

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

標準入力が必要な問題は、以下のようにパイプで渡すか、実行後にキーボードから入力する。

```bash
echo "5" | python3 python/002_two_sum.py
```

## 7. 新しい問題を追加するときのテンプレート（Python例）

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

同じ問題を他の言語でも解いて、`javascript/` `typescript/` `java/` `csharp/`に同じ番号で追加していく運用にしている。

## 8. 今後の課題

- 問題数を増やす（現状はeasy相当の3問のみ）。medium以上の問題を増やし、進捗表にdifficultyの実測値を追加する
- 各言語の実行方法をまとめたシェルスクリプト（`run.sh 001 python`のように、番号と言語を指定して実行できるもの）の追加
