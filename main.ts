// The Worst App Idea Ever Pitched entry (Node 22, standard library only):
// writes one sentence, 148 characters, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The pitch: an on-demand rental marketplace for phone charger cables.
// It sounds like a real startup (per-minute pricing, delivery, a founder's
// certainty) and fails brilliantly three times in one sentence: the price
// is absurd for a cable, the delivery takes longer than the charge would
// last, and the cable fits only the iPhone 4s, a phone nobody owns anymore.
// Specific, funny, and perfectly pointless.
// Verified by running the program: the output is exactly 148 characters,
// one sentence, one line.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "Uber for borrowed phone chargers: rent a stranger's cable for $4.99 a minute, wait 40 minutes for delivery, then discover it only charges iPhone 4s.",
);
