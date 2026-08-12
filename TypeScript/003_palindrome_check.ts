/**
 * 問題: 与えられた文字列が回文（前から読んでも後ろから読んでも同じ）かどうかを判定する。
 * 入力: 文字列 S（1行）
 * 出力: 回文なら "Yes"、そうでなければ "No"
 */
import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin });

rl.on('line', (line: string) => {
  const s: string = line.trim();
  const reversed: string = s.split('').reverse().join('');
  console.log(s === reversed ? 'Yes' : 'No');
  rl.close();
});
