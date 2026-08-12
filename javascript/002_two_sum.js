/**
 * 問題: N個の整数と目標値Tが与えられる。合計がTになる2つの数の
 *       インデックス（0始まり）を1組出力する。
 * 入力:
 *   1行目: 整数 N
 *   2行目: N個の整数（スペース区切り）
 *   3行目: 目標値 T
 * 出力: 条件を満たす2つのインデックスをスペース区切りで1行
 *
 * メモ: Mapに「これまで見た値 -> インデックス」を持たせて1回のループで解く。
 */
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });

const lines = [];
rl.on('line', (line) => lines.push(line));
rl.on('close', () => {
  const nums = lines[1].trim().split(/\s+/).map(Number);
  const target = parseInt(lines[2], 10);

  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      console.log(`${seen.get(complement)} ${i}`);
      return;
    }
    seen.set(nums[i], i);
  }
});
