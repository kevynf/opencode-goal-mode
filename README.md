# OpenCode Goal Mode

[中文](README.zh-CN.md) | **English**

A goal-oriented mode built only with OpenCode V2's documented Markdown Agent and Markdown Command formats.

## Install

Send this short structured prompt to OpenCode:

```text
Install OpenCode Goal Mode.

- **Source** https://github.com/kevynf/opencode-goal-mode
- **Read** README.md and the repository's `.opencode/`
- **Scope** project-level or global, as specified by the user
- **Conflicts** stop and report same-named files with different content
- **Verify** run `opencode reload` and `opencode debug agents`
- **Result** confirm that `goal` is a visible `primary` Agent
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

## Boundaries

- Tracks objective, success criteria, constraints, evidence, remaining work, and blockers.
- Continues until completion, pause, cancellation, or a concrete blocker.
- Uses the official prompt sections Harness, Communication, Working in codebases, Delegation, Destructive actions, and Autonomy.
- State remains in the current conversation; there is no cross-session persistence, background continuation, or hard token/cost budget.

## Development

```text
npm ci
npm run check
```

## Official references

- [OpenCode V2 Agents](https://opencode.ai/v2/docs/agents/)
- [OpenCode V2 Commands](https://opencode.ai/v2/docs/commands/)
- [OpenCode V2 Config](https://opencode.ai/v2/docs/config/)
