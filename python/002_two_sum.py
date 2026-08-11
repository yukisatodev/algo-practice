"""
問題: N個の整数と目標値Tが与えられる。合計がTになる2つの数の
      インデックス（0始まり）を1組出力する。
入力:
  1行目: 整数 N
  2行目: N個の整数（スペース区切り）
  3行目: 目標値 T
出力: 条件を満たす2つのインデックスをスペース区切りで1行

メモ: 全探索だとO(N^2)。辞書(dict)に「これまで見た値 -> インデックス」を
      持たせておくと、1回のループ(O(N))で解ける。
"""


def solve():
    n = int(input())
    nums = list(map(int, input().split()))
    target = int(input())

    seen = {}  # value -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            print(seen[complement], i)
            return
        seen[num] = i


if __name__ == "__main__":
    solve()
