# OpenCode Goal Mode

语言：**中文** · [English](README.md)

基于 OpenCode V2 官方 Markdown Agent 与 Markdown Command 的目标工作模式。

## 安装

把这段短提示词发送给 OpenCode：

```text
来源：https://github.com/kevynf/opencode-goal-mode
任务：安装 Goal Mode
范围：复制仓库 .opencode/ 到当前项目；只有我明确要求时才安装到 ~/.config/opencode/
规则：读取 README.zh-CN.md；同名文件内容不同就停止并报告，不覆盖、不删除、不备份
验收：运行 opencode reload 和 opencode debug agents，确认 goal 是可见的 primary Agent
```

这是 OpenCode 官方文件发现方式：

```text
项目级：<项目>/.opencode/agents/ 和 <项目>/.opencode/commands/
全局级：~/.config/opencode/agents/ 和 ~/.config/opencode/commands/
```

本项目不需要 npm、npx、插件或安装脚本。

## 使用示例

开始一个目标：

```text
/goal 修复登录失败问题；成功标准：相关测试通过，且不改变公开 API
```

查看状态：

```text
/goal-status
```

暂停后继续：

```text
/goal-pause
/goal-resume
```

遇到阻塞时，Goal Agent 应报告：已完成内容、具体阻塞、已尝试方法和继续所需的最小信息。满足全部成功标准后，必须给出验证证据再报告完成。取消目标但保留代码改动：

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

