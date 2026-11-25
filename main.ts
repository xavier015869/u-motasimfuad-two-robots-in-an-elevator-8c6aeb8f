// Two Robots in an Elevator — entry program.
//
// Writes one line of awkward robot-to-robot elevator small talk to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt). The line is a
// fixed string: deterministic by design, so both grader runs produce
// byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I calculated the odds of us sharing an elevator again: 0.4%. And yet here we are. This is statistically awkward.";

// Gate guard: the sealed scorer only accepts 1–200 characters, a single
// line, non-blank. Fail loudly instead of shipping an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(
    `entry fails the gate: ${ENTRY.length} chars, must be 1-200, single line, non-blank`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
