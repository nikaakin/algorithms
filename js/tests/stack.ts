import { Stack } from "@/version-1";

export const stack_test = () =>
  describe("testing stack.", () => {
    let stack = new Stack(null);

    test("returns undefined on pop if stack is empty", () => {
      const result = stack.pop();

      expect(result).toBeUndefined();
    });

    test("test push and peek", () => {
      stack.push(2);
      const result = stack.peek();

      expect(result).toEqual(2);
    });

    test("test pop with node in stack", () => {
      const result = stack.pop();

      expect(result).toEqual(2);
    });

    test("pushing multiple nodes", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.peek()).toEqual(3);
    });

    test("popping multiple nodes", () => {
      const result = stack.pop();

      expect(result).toEqual(3);
    });

    test("popping all nodes", () => {
      const result1 = stack.pop();
      const result2 = stack.pop();
      const result3 = stack.pop();

      expect(result1).toEqual(2);
      expect(result2).toEqual(1);
      expect(result3).toBeUndefined();
    });
  });
