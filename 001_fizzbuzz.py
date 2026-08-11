"""
問題: 1からNまでの整数を出力する。ただし3の倍数のときは「Fizz」、
      5の倍数のときは「Buzz」、両方の倍数のときは「FizzBuzz」を出力する。
入力: 整数 N（1行）
出力: 1行ごとに、対応する値を出力

メモ: 15の倍数から先に判定すると、条件分岐がシンプルになる。
"""


def solve():
    n = int(input())
    for i in range(1, n + 1):
        if i % 15 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)


if __name__ == "__main__":
    solve()
