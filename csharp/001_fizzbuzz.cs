using System;

/*
 * 問題: 1からNまでの整数を出力する。ただし3の倍数のときは「Fizz」、
 *       5の倍数のときは「Buzz」、両方の倍数のときは「FizzBuzz」を出力する。
 * 入力: 整数 N（1行）
 * 出力: 1行ごとに、対応する値を出力
 */
class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine().Trim());

        for (int i = 1; i <= n; i++)
        {
            if (i % 15 == 0) Console.WriteLine("FizzBuzz");
            else if (i % 3 == 0) Console.WriteLine("Fizz");
            else if (i % 5 == 0) Console.WriteLine("Buzz");
            else Console.WriteLine(i);
        }
    }
}
