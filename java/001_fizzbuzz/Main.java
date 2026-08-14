import java.util.Scanner;

/**
 * 問題: 1からNまでの整数を出力する。ただし3の倍数のときは「Fizz」、
 *       5の倍数のときは「Buzz」、両方の倍数のときは「FizzBuzz」を出力する。
 * 入力: 整数 N（1行）
 * 出力: 1行ごとに、対応する値を出力
 *
 * メモ: Javaはファイル名とpublicクラス名を一致させる必要がある。
 *       そのため、番号はフォルダ名(001_fizzbuzz/)側で管理している。
 */
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine().trim());

        for (int i = 1; i <= n; i++) {
            if (i % 15 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }
}
