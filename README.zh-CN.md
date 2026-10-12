# OpenCode Goal Mode

[English](README.md) | 中文

基于 OpenCode V2 官方 Markdown Agent 与 Markdown Command 的目标工作模式。

## 安装

把这段短提示词发送给 OpenCode：

```text
请从 https://github.com/kevynf/opencode-goal-mode 安装 Goal Mode：读取仓库中的 `.opencode/`，按指定范围复制到项目或全局 OpenCode 配置目录；遇到内容不同的同名文件就停止并报告；完成后运行 `opencode reload` 和 `opencode debug agents`，确认 `goal` 已加载。
```

OpenCode 官方配置发现位置：

| 范围 | Agent | Commands |
| --- | --- | --- |
| 项目 | `<项目>/.opencode/agents/` | `<项目>/.opencode/commands/` |
| 全局 | `~/.config/opencode/agents/` | `~/.config/opencode/commands/` |

## 使用示例

开始目标：

```text
/goal 修复登录失败问题；成功标准：相关测试通过，且不改变公开 API
```

查看状态：

```text
/goal-status
```

暂停并继续：

```text
/goal-pause
/goal-resume
```

遇到阻塞时，Goal Agent 报告已完成内容、具体阻塞、已尝试方法和继续所需的最小信息。满足全部成功标准后，先给出验证证据，再报告完成。取消目标并保留代码改动：

```text
/goal-cancel
```

也可以按 Tab 选择 `goal` 后直接输入目标。

## 工作方式

Goal 会先确认目标和验收标准，再执行和验证。只要还有能自主完成的必要工作，它就会继续；完成、暂停、取消或遇到实际阻塞时会说明当前结果。

目标记录只存在当前对话里。重新开启会话后需要重新提供目标，也不会在后台自动运行。

## 开发检查

```text
npm ci
npm run check
```

## 官方依据

- [OpenCode V2 Agents](https://opencode.ai/v2/docs/agents/)
- [OpenCode V2 Commands](https://opencode.ai/v2/docs/commands/)
- [OpenCode V2 Config](https://opencode.ai/v2/docs/config/)
