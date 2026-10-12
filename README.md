# OpenCode Goal Mode

[中文文档](README.zh-CN.md)

A goal-oriented OpenCode V2 mode implemented only with OpenCode's documented Markdown Agent and Markdown Command formats.

## Install

Send this one-line instruction to OpenCode or another coding agent:

```text
Install OpenCode Goal Mode from https://github.com/kevynf/opencode-goal-mode: read README.md and the files under .opencode/, copy .opencode/ into the current project root; if I explicitly request a global installation, copy it into ~/.config/opencode/; if a same-named file differs, stop and report the conflict without overwriting, deleting, or making backups, then run opencode reload and opencode debug agents to verify that goal is a visible primary Agent.
```

Official project layout:

```text
target-project/
└── .opencode/
    ├── agents/goal.md
    └── commands/
        ├── goal.md
        ├── goal-status.md
        ├── goal-pause.md
        ├── goal-resume.md
        └── goal-cancel.md
```

For personal global use, copy the same files into:

```text
~/.config/opencode/agents/
~/.config/opencode/commands/
```

This is OpenCode's documented configuration discovery model. The project does not add an installer, npm package, or plugin.

## Use

```text
/goal Fix the login failure and verify the relevant tests pass
/goal-status
/goal-pause
/goal-resume
/goal-cancel
```

You can also press Tab, select `goal`, and enter the objective directly.

Goal state stays in the current conversation. The mode does not claim cross-session persistence, background continuation, or hard token/cost budgets.

## Official references

- [OpenCode V2 Agents](https://opencode.ai/v2/docs/agents/)
- [OpenCode V2 Commands](https://opencode.ai/v2/docs/commands/)
- [OpenCode V2 Config](https://opencode.ai/v2/docs/config/)

