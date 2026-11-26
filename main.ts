// Office Artifacts: The One-Line Placard Contest
// u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
//
// Writes a single-line museum placard for an ordinary office object,
// treated as an ancient artifact, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib-only, deterministic: the same placard every run.
// The output dir comes from MAKEFUN_OUTPUT_DIR (default /output); the
// entry text below is written verbatim, with no trailing newline, so the
// file is exactly the placard — 163 UTF-8 characters, inside the gate's
// 1-180 range.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The placard (163 characters, one line, deadpan curator voice), built in
// three label-craft beats: catalogue date + material, a named donor with a
// concrete number, and the twist landing in the last clause.
const ENTRY =
  "Stapler, plated steel, c. 1998. Gift of Brenda in Payroll, who bound 11,000 invoices with it before retiring. It jammed once, in 2004, and has never been forgiven.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
