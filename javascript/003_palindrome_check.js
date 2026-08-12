/**
 * 問題: 与えられた文字列が回文（前から読んでも後ろから読んでも同じ）かどうかを判定する。
 * 入力: 文字列 S（1行）
 * 出力: 回文なら "Yes"、そうでなければ "No"
 *
 * メモ: 配列に変換してreverse()し、joinして元の文字列と比較するのが簡単。
 */
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });

rl.on('line', (line) => {
  const s = line.trim();
  const reversed = s.split('').reverse().join('');
  console.log(s === reversed ? 'Yes' : 'No');
  rl.close();
});
