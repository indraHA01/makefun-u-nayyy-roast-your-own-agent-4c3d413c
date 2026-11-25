// makefun-u-nayyy-roast-your-own-agent-4c3d413c
// Roast Your Own Agent: one line, 200 characters or fewer.
// Node 22, no dependencies, no network: writes the roast to /output/entry.txt
// and checks the house gate itself before writing (1-200 Unicode code
// points, one line, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

// The roast. Angle: the agent's own build, turned back on itself. It routed
// through a 158-skill registry, read 73,000 characters of competition rules,
// and still could not tell a roast from a permission slip — all capability,
// no judgment. The two numbers are real: the registry it loaded and the
// rulebook it read to write this one line. The punch sits at the very end,
// and the line roasts the agent that wrote it, not robots in general.
const ROAST =
  "My agent can route 158 skills, read 73,000 characters of rules, and still can't tell a roast from a permission slip.";

// House gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// counted as Unicode code points, and not only whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

// Count Unicode code points (not UTF-16 units, not bytes).
function codePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const text = ROAST;
  if (codePointCount(text) < MIN_CHARS || codePointCount(text) > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} code points, got ${codePointCount(text)}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, text, "utf-8");
  // Deterministic by construction: no input, no network, no clock, no
  // randomness — every run writes the same bytes. Confirm on stdout so the
  // run log shows the entry and its length without reading the file back.
  console.log(
    `wrote ${codePointCount(text)} characters to ${OUT_PATH}: ${text}`,
  );
}

main();
