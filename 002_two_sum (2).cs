using System;
using System.Collections.Generic;
using System.Linq;

/*
 * 問題: N個の整数と目標値Tが与えられる。合計がTになる2つの数の
 *       インデックス（0始まり）を1組出力する。
 * 入力:
 *   1行目: 整数 N
 *   2行目: N個の整数（スペース区切り）
 *   3行目: 目標値 T
 * 出力: 条件を満たす2つのインデックスをスペース区切りで1行
 */
class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine().Trim());
        int[] nums = Console.ReadLine().Trim().Split(' ').Select(int.Parse).ToArray();
        int target = int.Parse(Console.ReadLine().Trim());

        var seen = new Dictionary<int, int>();
        for (int i = 0; i < n; i++)
        {
            int complement = target - nums[i];
            if (seen.ContainsKey(complement))
            {
                Console.WriteLine($"{seen[complement]} {i}");
                return;
            }
            seen[nums[i]] = i;
        }
    }
}
