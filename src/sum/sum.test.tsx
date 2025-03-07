import { describe, expect, it, test, vi } from "vitest";
import { renderHTML, sum, sumOfSquares } from "./sum";
import { afterEach, beforeEach } from "node:test";

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

const businessHours = [9, 17];

function purchase() {
  const currentHour = new Date().getHours();
  const [open, close] = businessHours;
  console.log("currentHour:", currentHour);

  if (currentHour > open && currentHour < close) {
    return { message: "Success" };
  }

  return { message: "Error" };
}

describe("purchasing flow", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  it("allows purchases within business hours", () => {
    // set hour within business hours
    const date = new Date(2000, 1, 1, 13);
    vi.setSystemTime(date);
    console.log("date1:", date);
    console.log("date1:", date.toString);

    // access Date.now() will result in the date set above
    expect(purchase()).toEqual({ message: "Success" });
  });

  it("disallows purchases outside of business hours", () => {
    // set hour outside business hours
    const date = new Date(2000, 1, 1, 19);
    vi.setSystemTime(date);
    console.log("date2:", date);

    // access Date.now() will result in the date set above
    expect(purchase()).toEqual({ message: "Error" });
  });
});
