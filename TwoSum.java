import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

/**
 * 問題: N個の整数と目標値Tが与えられる。合計がTになる2つの数の
 *       インデックス（0始まり）を1組出力する。
 * 入力:
 *   1行目: 整数 N
 *   2行目: N個の整数（スペース区切り）
 *   3行目: 目標値 T
 * 出力: 条件を満たす2つのインデックスをスペース区切りで1行
 *
 * メモ: HashMapに「これまで見た値 -> インデックス」を持たせて1回のループで解く。
 */
public class TwoSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine().trim());
        String[] parts = scanner.nextLine().trim().split("\\s+");
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = Integer.parseInt(parts[i]);
        }
        int target = Integer.parseInt(scanner.nextLine().trim());

        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                System.out.println(seen.get(complement) + " " + i);
                return;
            }
            seen.put(nums[i], i);
        }
    }
}
