<script lang="ts" setup>
const texts = ["grape", "apple", "banana"];

const sortedTexts = computed(() => {
  return getSortedTexts(texts);
});

const getSortedTexts = (texts: string[]) => {
  return texts.sort().join(", ");
};

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe("getSortedTexts", () => {
    it("should return sorted by alphabet and combined texts with comma", () => {
      expect(getSortedTexts(["grape", "apple", "banana"])).toBe(
        "apple, banana, grape"
      );
    });
  });
}
</script>

<template>
  <p>{{ sortedTexts }}</p>
</template>
