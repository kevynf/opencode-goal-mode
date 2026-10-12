import test from "node:test"
import assert from "node:assert/strict"
import { execFile } from "node:child_process"
import { promisify } from "node:util"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const execFileAsync = promisify(execFile)
const root = join(dirname(fileURLToPath(import.meta.url)), "..")

test("repository validation passes", async () => {
  const { stdout } = await execFileAsync(process.execPath, [join(root, "scripts", "validate.mjs")], { cwd: root })
  assert.match(stdout, /Validated Goal Agent and 5 commands\./)
})
