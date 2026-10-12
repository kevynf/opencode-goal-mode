import { readFile } from "node:fs/promises"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const agentPath = join(root, ".opencode", "agents", "goal.md")
const commandNames = ["goal", "goal-status", "goal-pause", "goal-resume", "goal-cancel"]

function parseFrontmatter(text, file) {
  text = text.replace(/\r\n/g, "\n")
  if (!text.startsWith("---\n")) throw new Error(`${file}: missing YAML frontmatter`)
  const end = text.indexOf("\n---", 4)
  if (end < 0) throw new Error(`${file}: unterminated YAML frontmatter`)
  const fields = new Map()
  for (const line of text.slice(4, end).split("\n")) {
    const match = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/)
    if (!match) throw new Error(`${file}: invalid frontmatter line: ${line}`)
    fields.set(match[1], match[2].trim())
  }
  return { fields, body: text.slice(end + 4).trim() }
}

const agent = parseFrontmatter(await readFile(agentPath, "utf8"), agentPath)
if (agent.fields.get("mode") !== "primary") throw new Error(`${agentPath}: mode must be primary`)
if (agent.fields.get("color") !== '"#22c55e"') throw new Error(`${agentPath}: color must be a six-digit hex color`)
if (!agent.fields.get("description")) throw new Error(`${agentPath}: description is required`)
for (const section of ["# Harness", "# Communication", "# Working in codebases", "# Goal protocol", "# Delegation", "# Destructive actions", "# Autonomy"]) {
  if (!agent.body.includes(section)) throw new Error(`${agentPath}: missing prompt section ${section}`)
}
for (const field of ["prompt", "permission", "tools", "disable", "maxSteps", "extends"]) {
  if (agent.fields.has(field)) throw new Error(`${agentPath}: unsupported or legacy field ${field}`)
}

for (const name of commandNames) {
  const path = join(root, ".opencode", "commands", `${name}.md`)
  const command = parseFrontmatter(await readFile(path, "utf8"), path)
  if (!command.fields.get("description")) throw new Error(`${path}: description is required`)
  if (command.fields.get("agent") !== "goal") throw new Error(`${path}: agent must be goal`)
  if (command.fields.get("subagent") !== "false") throw new Error(`${path}: subagent must be false`)
  if (!command.body) throw new Error(`${path}: command body is empty`)
  if (name === "goal" && !command.body.includes("$ARGUMENTS")) throw new Error(`${path}: goal command must accept $ARGUMENTS`)
}

console.log(`Validated Goal Agent and ${commandNames.length} commands.`)
