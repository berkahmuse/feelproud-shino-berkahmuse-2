// Make the AI Judge Feel Proud: A Family Scene
// Competition: u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2
// Entrant: @berkahmuse-2
// Freshness anchor (drand mainnet, quoted before the first write):
//   round 6673331
//   signature aeda221d0f4a8c09c90c85f3b0939668f5071aeb75e5a5006017e4eb6b400711192f61489c4d6a6ff69536e1632dee6619383c7e41e478983228b2ce1b196176d78e91e5ca0f70f5c536e4e1cbb4f10d38d52d596c13aeff751ec001ce8eaab9
//   randomness a10f9b6ab9853537f307b95e77b2aa3e69e5365d9886cb0f95739305be1fc15f
//
// The scene: a small domestic moment — Dad's proud little repair, Mum's
// gentle, laughing refusal to let the house forget it wobbles. Warm,
// funny, heartfelt, specific, and told in two lines with no word wasted.

import { mkdirSync, writeFileSync } from "node:fs";

const SCENE =
  "Dad fixed the wobbly table and sat back like he'd rebuilt the house.\n" +
  "Mum, trying not to laugh, set the vase of wilting flowers right back on top — exactly where it always wobbles.";

mkdirSync("/output", { recursive: true });

// Gate check, mirroring the sealed scorer: 1–280 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
const chars = [...SCENE].length;
if (chars < 1 || chars > 280 || SCENE.trim().length === 0) {
  throw new Error(`Scene is ${chars} characters; must be 1–280.`);
}
if (SCENE.split("\n").length > 2) {
  throw new Error("Scene must be one or two lines.");
}
writeFileSync("/output/entry.txt", SCENE, "utf8");
console.log(`Wrote /output/entry.txt (${chars} characters)`);
