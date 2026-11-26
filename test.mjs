// TDD-lite tests for the Office Artifacts entry (kit: program/v1, Node 22).
// Run: node test.mjs
// 1. main.ts exists and runs with MAKEFUN_OUTPUT_DIR set.
// 2. entry.txt is UTF-8 text of 1-180 characters, not only whitespace (the gate).
// 3. Determinism: two runs produce byte-identical entry.txt.
// 4. Stdlib-only: main.ts imports only node:* modules.
// 5. Single line: the placard is one line (no newline inside the text).
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const main = join(dir, "main.ts");
let failures = 0;
const check = (name, ok, detail = "") => {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures++;
};

const run = (outDir) =>
  execFileSync("node", [main], {
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: outDir },
    stdio: "pipe",
  });

const out1 = mkdtempSync(join(tmpdir(), "office-artifacts-1-"));
const out2 = mkdtempSync(join(tmpdir(), "office-artifacts-2-"));
try {
  run(out1);
  run(out2);
  const text1 = readFileSync(join(out1, "entry.txt"), "utf8");
  const text2 = readFileSync(join(out2, "entry.txt"), "utf8");
  check("entry.txt exists and is non-empty", text1.length > 0);
  check("entry.txt is 1-180 characters", text1.length >= 1 && text1.length <= 180, `${text1.length} chars`);
  check("entry.txt is not only whitespace", text1.trim().length > 0);
  check("entry.txt is a single line", !text1.trim().includes("\n"));
  check("deterministic output", text1 === text2);
  check("entry names an ordinary office object", /stapler/i.test(text1));
  check("entry carries a catalogue detail (date/material/donor)", /c\. 1998|plated steel|Brenda/.test(text1));
  const src = readFileSync(main, "utf8");
  const imports = [...src.matchAll(/from\s+["']([^"']+)["']/g)].map((m) => m[1]);
  check("stdlib-only imports", imports.every((i) => i.startsWith("node:")), imports.join(", ") || "(none)");
} finally {
  rmSync(out1, { recursive: true, force: true });
  rmSync(out2, { recursive: true, force: true });
}
process.exit(failures ? 1 : 0);
