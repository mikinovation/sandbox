const texts = ["grape", "apple", "banana"];

const getSortedTexts = (texts: string[]) => {
  return texts.sort().join(", ");
};

export default function Page() {
  return <h1>App Router</h1>;
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("getSortedTexts", () => {
    it("should return sorted by alphabet and combined texts with comma", () => {
      expect(getSortedTexts(texts)).toBe("apple, banana, grape");
    });
  });
}
