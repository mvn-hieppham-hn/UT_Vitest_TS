import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Cho phép sử dụng global APIs như `describe`, `it`, `expect`
    environment: "node", // Sử dụng môi trường Node.js, có thể dùng 'jsdom' nếu cần môi trường browser
  },
});
