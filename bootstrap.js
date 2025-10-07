#!/usr/bin/env node
require("dotenv").config();

// ---------- DEBUG (step 1) ----------
console.log("DEBUG: process.env.DATABASE_URL ===>", process.env.DATABASE_URL);
console.log("DEBUG: typeof process.env.DATABASE_URL ===>", typeof process.env.DATABASE_URL);
console.log("DEBUG: process.env.DATABASE_URL length ===>", process.env.DATABASE_URL ? process.env.DATABASE_URL.length : 0);
// ------------------------------------

const { spawn } = require("child_process");
const path = require("path");

// Determine the Medusa CLI path
const medusaPath = path.resolve(
  __dirname,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "medusa.cmd" : "medusa"
);

// Spawn Medusa in develop mode
const medusaProcess = spawn(medusaPath, ["develop"], {
  stdio: "inherit",
  shell: true,
});

// Handle exit
medusaProcess.on("close", (code) => {
  process.exit(code);
});
