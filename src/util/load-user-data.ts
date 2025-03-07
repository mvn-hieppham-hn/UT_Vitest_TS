interface User {
  username: string;
  name: string;
  projects: string[];
  coolness?: number;
  favoriteFood: string;
  snacks: boolean;
}
async function loadUser(username: string): Promise<User | undefined> {
  const users: User[] = [
    {
      username: "antfu7",
      name: "Anthony",
      projects: ["vitest", "vite"],
      coolness: 100,
      favoriteFood: "sushi",
      snacks: true,
    },
    {
      username: "jlengstorf",
      name: "Jason",
      projects: ["burgers", "cheese"],
      favoriteFood: "pizza",
      snacks: true,
    },
  ];

  return users.find((user) => user.username === username);
}

export async function loadUserData(username: string) {
  const user = await loadUser(username);

  if (!user) {
    throw new Error("no user found");
  }

  user.coolness = username === "antfu7" ? 100 : -1;

  return user;
}
