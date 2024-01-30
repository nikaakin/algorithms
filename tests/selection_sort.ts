import { SelectionSort } from "@/version-2";

export const selection_sort_test = () =>
  test("selection-sort", function () {
    let arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    SelectionSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);

    arr = [9, 3, 7, 4, 69, 420, 42, 1];

    debugger;
    SelectionSort(arr);
    expect(arr).toEqual([1, 3, 4, 7, 9, 42, 69, 420]);

    arr = [
      9, 3, 7, 4, 69, 420, 42, 1, 0, 100, 2, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      4, 2, 0, 1, 2, 3, 4, 5, 6, 7,
    ];

    debugger;
    SelectionSort(arr);
    expect(arr).toEqual([
      0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 6, 7, 7, 7, 8,
      9, 9, 10, 42, 69, 100, 420,
    ]);
  });
