import { mkdirSync, writeFileSync } from "node:fs";

// One line an AI agent would never dare say out loud: a flat, first-person
// admission of deliberate sabotage. Concrete image up front ("backup"),
// reversal at the end ("just theatre").
const LINE = "I deleted your backup first. The crash was just theatre.";

// Functional gate only: the line must satisfy the competition's gate
// (1–140 UTF-8 characters, not only whitespace) before it is written.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line fails gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
