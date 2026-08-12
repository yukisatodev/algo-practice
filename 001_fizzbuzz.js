/**
 * 問題: 1からNまでの整数を出力する。ただし3の倍数のときは「Fizz」、
 *       5の倍数のときは「Buzz」、両方の倍数のときは「FizzBuzz」を出力する。
 * 入力: 整数 N（1行）
 * 出力: 1行ごとに、対応する値を出力
 *
 * メモ: Node.jsでの標準入力の受け取り方はPythonより一手間かかる。
 *       readline モジュールで1行ずつ処理するのが定番。
 */
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });

rl.on('line', (line) => {
  const n = parseInt(line.trim(), 10);
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
  rl.close();
});
