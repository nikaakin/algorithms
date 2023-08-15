import { binary_search } from "@/version-1";

export const binary_search_test = () =>
  describe("test binary search algorithm.\n\t arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420]", () => {
    const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    test("value = 69", () => expect(binary_search(arr, 69)).toEqual(true));
    test("value = 1336", () => expect(binary_search(arr, 1336)).toEqual(false));
    test("value = 69420", () =>
      expect(binary_search(arr, 69420)).toEqual(true));
    test("value = 69421", () =>
      expect(binary_search(arr, 69421)).toEqual(false));
    test("value = 1", () => expect(binary_search(arr, 1)).toEqual(true));
    test("value = 0", () => expect(binary_search(arr, 0)).toEqual(false));
  });
