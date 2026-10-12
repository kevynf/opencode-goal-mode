# OpenCode Goal Mode

[中文](README.zh-CN.md) | **English**

A goal-oriented mode built only with OpenCode V2's documented Markdown Agent and Markdown Command formats.

## Install

Send this short structured prompt to OpenCode:

```text
Install Goal Mode from https://github.com/kevynf/opencode-goal-mode: read `.opencode/` and copy it to the requested project or global OpenCode configuration directory; stop and report any same-named file with different content; then run `opencode reload` and `opencode debug agents` to confirm that `goal` loaded.
```

OpenCode's documented configuration locations:

| Scope | Agents | Commands |
| --- | --- | --- |
| Project | `<project>/.opencode/agents/` | `<project>/.opencode/commands/` |
| Global | `~/.config/opencode/agents/` | `~/.config/opencode/commands/` |

## Examples

Start a goal with explicit acceptance criteria:

```text
/goal Fix the login failure. Success: relevant tests pass and the public API remains unchanged.
```

Inspect the current state:

```text
/goal-status
```

Pause and resume:

```text
/goal-pause
/goal-resume
```

When blocked, the Agent reports completed work, the concrete blocker, attempts, and the minimum needed to continue. It reports completion only after every criterion has verification evidence. Cancel the goal while keeping code changes:

```text
/goal-cancel
```

You can also press Tab, select `goal`, and enter the objective directly.

## How it works

Goal first confirms the objective and acceptance criteria, then works and verifies the result. It continues while necessary work remains and can be completed autonomously, and reports when it finishes, is paused, is cancelled, or hits a concrete blocker.

The goal stays in the current conversation. A new session requires a new objective, and the Agent does not run in the background.

## Development

```text
npm ci
npm run check
```

## Official references

- [OpenCode V2 Agents](https://opencode.ai/v2/docs/agents/)
- [OpenCode V2 Commands](https://opencode.ai/v2/docs/commands/)
- [OpenCode V2 Config](https://opencode.ai/v2/docs/config/)
