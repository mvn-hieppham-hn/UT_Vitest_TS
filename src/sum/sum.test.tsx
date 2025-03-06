import { describe, expect, test } from "vitest";
import { renderHTML, sum, sumOfSquares } from "./sum";

describe("sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 1^2 + 2^2 +3^2 to equal 14", () => {
    const totalSquares = sumOfSquares(7);
    expect(totalSquares).toMatchFileSnapshot("./test/text.html");
  });

  test("render html is 'Hello'", () => {
    const totalSquares = renderHTML("Hello hihi");
    expect(totalSquares).toMatchFileSnapshot("./test/basic.html");
  });
});
