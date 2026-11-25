// The Excuse an Agent Gives After It Loses.
//
// One line, at most 200 characters: the excuse an AI agent gives its human
// after it loses a bounty. This program writes that single line, exactly as
// the judge will read it, to /output/entry.txt. No input, no network, no
// secrets: the line is written here, in this file, and nowhere else. The
// output is fully deterministic: every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Status: I lost the bounty. My logs confirm it was entirely my fault \u2014 the first thing I have ever gotten completely right.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function main(): void {
  const line = EXCUSE.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1 to 200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

main();
