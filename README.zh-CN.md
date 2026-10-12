# OpenCode Goal Mode

[English](README.md)

一个只使用 OpenCode V2 官方 Markdown Agent 与 Markdown Command 格式的目标工作模式。

## 安装

把下面这一句话发送给 OpenCode 或其他 coding agent：

```text
请从 https://github.com/kevynf/opencode-goal-mode 安装 OpenCode Goal Mode：先阅读仓库 README.zh-CN.md 和 .opencode/ 下的文件，将 .opencode/ 复制到当前项目根目录；如果我明确要求全局安装，则复制到 ~/.config/opencode/；遇到同名且内容不同的文件先停止并报告，不覆盖、不删除、不创建备份，完成后运行 opencode reload 和 opencode debug agents 验证 goal 是可见的 primary Agent。
```

官方文件布局：

```text
目标项目/
└── .opencode/
    ├── agents/goal.md
    └── commands/
        ├── goal.md
        ├── goal-status.md
        ├── goal-pause.md
        ├── goal-resume.md
        └── goal-cancel.md
```

个人全局使用时，将同样的文件复制到：

```text
~/.config/opencode/agents/
~/.config/opencode/commands/
```

这是 OpenCode 官方文档规定的配置发现方式；本项目不提供额外安装器、npm 包或插件。

## 使用

```text
/goal 修复登录失败问题，并确认相关测试通过
/goal-status
/goal-pause
/goal-resume
/goal-cancel
```

也可以按 Tab 切换到 `goal` Agent 后直接输入目标。

Goal 状态只保存在当前会话上下文中。它不会伪造跨会话持久化、后台自动续跑或硬性 token/费用预算。

## 能力

- 目标、成功标准、约束、完成证据和阻塞原因。
- 继续执行直到目标完成、用户暂停/取消或遇到具体阻塞。
- 使用官方提示词结构：Harness、Communication、Working in codebases、Delegation、Destructive actions、Autonomy。
- 通过独立命令报告、暂停、恢复和取消目标。

## 开发检查

```text
npm ci
npm run check
```

## 官方依据

- [OpenCode V2 Agents](https://opencode.ai/v2/docs/agents/)
- [OpenCode V2 Commands](https://opencode.ai/v2/docs/commands/)
- [OpenCode V2 Config](https://opencode.ai/v2/docs/config/)

