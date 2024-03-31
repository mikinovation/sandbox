import { format } from "date-fns";
import { describe } from "vitest";

export const formatDate = (date: Date): string => {
  return format(date, "MM dd, yyyy");
};

if (import.meta.vitest) {
  const { it, expect, vi } = import.meta.vitest;

  vi.setSystemTime(new Date("2024-03-26T00:00:00.000Z"));

  describe("formatDate", () => {
    it("formats the date correctly", () => {
      expect(formatDate(new Date())).toBe("03 26, 2024");
    });
  });
}
