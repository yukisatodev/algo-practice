/**
 * 問題: N個の整数と目標値Tが与えられる。合計がTになる2つの数の
 *       インデックス（0始まり）を1組出力する。
 * 入力:
 *   1行目: 整数 N
 *   2行目: N個の整数（スペース区切り）
 *   3行目: 目標値 T
 * 出力: 条件を満たす2つのインデックスをスペース区切りで1行
 */
import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin });
const lines: string[] = [];

rl.on('line', (line: string) => lines.push(line));
rl.on('close', () => {
  const nums: number[] = lines[1].trim().split(/\s+/).map(Number);
  const target: number = parseInt(lines[2], 10);

  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      console.log(`${seen.get(complement)} ${i}`);
      return;
    }
    seen.set(nums[i], i);
  }
});
