using System;
using System.Linq;

/*
 * 問題: 与えられた文字列が回文（前から読んでも後ろから読んでも同じ）かどうかを判定する。
 * 入力: 文字列 S（1行）
 * 出力: 回文なら "Yes"、そうでなければ "No"
 */
class Program
{
    static void Main()
    {
        string s = Console.ReadLine().Trim();
        string reversed = new string(s.Reverse().ToArray());
        Console.WriteLine(s == reversed ? "Yes" : "No");
    }
}
