# OpenCode Goal Mode

[中文](README.zh-CN.md) | [English](README.md)

基于 OpenCode V2 官方 Markdown Agent 与 Markdown Command 的目标工作模式。

## 安装

把这段短提示词发送给 OpenCode：

```text
请安装 OpenCode Goal Mode。

- **来源** https://github.com/kevynf/opencode-goal-mode
- **读取** README.zh-CN.md 和仓库中的 `.opencode/`
- **安装范围** 项目级或全局级，按用户指定
- **文件冲突** 同名文件内容不同就停止并报告
- **验证** 运行 `opencode reload` 和 `opencode debug agents`
- **结果** 确认 `goal` 是可见的 `primary` Agent
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

## 能力边界

- 维护目标、成功标准、约束、完成证据、剩余工作和阻塞原因。
- 继续执行直到完成、暂停、取消或具体阻塞。
- 使用官方提示词结构：Harness、Communication、Working in codebases、Delegation、Destructive actions、Autonomy。
- 状态只保存在当前会话，不提供跨会话持久化、后台自动续跑或硬性 token/费用预算。

## 开发检查

```text
npm ci
npm run check
```

## 官方依据

- [OpenCode V2 Agents](https://opencode.ai/v2/docs/agents/)
- [OpenCode V2 Commands](https://opencode.ai/v2/docs/commands/)
- [OpenCode V2 Config](https://opencode.ai/v2/docs/config/)
