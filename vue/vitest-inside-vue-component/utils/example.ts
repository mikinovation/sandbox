const add = (a: number, b: number): number => a + b;

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("add", () => {
    it("should add two numbers", () => {
      expect(add(1, 2)).toBe(3);
    });
  });
}
