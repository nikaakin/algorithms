import { quickSort } from "@/version-2";

export const quick_sort_test = () =>
  test("quick-sort", () => {
    let arr = [1, 3, 4, 2, 21, 1];

    expect(quickSort(arr)).toEqual([1, 1, 2, 3, 4, 21]);

    arr = [];

    expect(quickSort(arr)).toEqual(undefined);

    arr = [1, 2];

    expect(quickSort(arr)).toEqual([1, 2]);

    arr = [2, 1];

    expect(quickSort(arr)).toEqual([1, 2]);

    arr = [1, 3, 4, 2, 21, 1, 0, 100, 2, 2, 4, 1, 1_000_000, 2000, 0];

    expect(quickSort(arr)).toEqual([
      0, 0, 1, 1, 1, 2, 2, 2, 3, 4, 4, 21, 100, 2000, 1_000_000,
    ]);
  });
