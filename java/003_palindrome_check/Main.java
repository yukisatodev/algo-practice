import java.util.Scanner;

/**
 * 問題: 与えられた文字列が回文（前から読んでも後ろから読んでも同じ）かどうかを判定する。
 * 入力: 文字列 S（1行）
 * 出力: 回文なら "Yes"、そうでなければ "No"
 *
 * メモ: StringBuilder.reverse()で反転し、元の文字列と比較する。
 */
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.nextLine().trim();
        String reversed = new StringBuilder(s).reverse().toString();
        System.out.println(s.equals(reversed) ? "Yes" : "No");
    }
}
