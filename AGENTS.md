# Project instructions

- Keep the package compatible with OpenCode V2's documented Markdown Agent and Command formats.
- Do not add private OpenCode APIs, plugin hooks, background workers, persistence, or model-specific assumptions unless the official documentation documents them and tests cover the behavior.
- Preserve the official prompt section order when changing the Goal Agent.
- Keep lifecycle commands read-only or explicitly lifecycle-only; they must not silently mutate project files.
- Run `npm run check` before submitting changes.
- Use Conventional Commits for repository history.
