# Contributing

Keep this project compatible with the OpenCode V2 documentation and schema. Prefer Markdown Agents and Commands over private APIs or plugins when the feature can be expressed with the official configuration format.

Before opening a pull request:

```text
npm ci
npm run check
```

Keep the Goal protocol explicit and session-scoped. Do not claim durable state, automatic continuation, or budget enforcement unless an official OpenCode API provides it and the behavior is covered by tests.
