import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
// Registers jest-dom matchers on Vitest's expect (v6+ auto-extend entrypoint)
import "@testing-library/jest-dom/vitest";

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});