import { loadUserData } from "./load-user-data";
import { describe, test, expect, vi } from "vitest";

vi.mock("./load-user-data", () => {
  return {
    loadUserData() {
      return {
        coolness: -1,
        favoriteFood: "boiled spinach",
        name: "Alan",
        projects: [],
        snacks: false,
        username: "testuser",
      };
    },
  };
});

describe("loadUsersDetails", () => {
  test("loads user data as expected", async () => {
    const user = await loadUserData("antfu7");

    expect(user).toMatchSnapshot(`
    {
      "coolness": -1,
      "favoriteFood": "pizza",
      "name": "Jason",
      "projects": [
        "burgers",
        "cheese",
      ],
      "snacks": true,
      "username": "antfu7",
    }
    `);
    // expect(user).toEqual({
    //   username: "antfu7",
    //   name: "Anthony",
    //   projects: ["vitest", "vite"],
    //   coolness: 100,
    // });
  });

  test("sets coolness level appropriately", async () => {
    const jason = await loadUserData("jlengstorf");
    const anthony = await loadUserData("antfu7");

    expect(jason.coolness).toBe(-1);
    expect(anthony.coolness).toBe(100);
  });

  test("throws an error for nonexistent users", async () => {
    expect(async () => await loadUserData("fakeuser")).rejects.toThrowError();
  });
});
