---
description: Treat Design Mode / browser element selections as active chat requests
---

# Design Mode → this chat

When the user message includes a Design Mode / browser preview selection (`browser_element`, selected DOM node, component stack, screenshot of a highlighted UI node, or similar), treat it as an **active request in the current chat**.

## Do

- Stay in this conversation — respond here; do not suggest starting a new chat for the same selection.
- Infer intent from: the selected node + any Vietnamese/English note after it + nearby page context.
- If the note is clear (layout, copy, bug, style), follow `confirm-before-acting`: short plan → wait for `ok` before edits.
- If the note is missing but the selection implies an obvious fix (e.g. broken image, overflow), state that assumption in the plan.
- Prefer the component named in `component` / `component_stack` when locating code.

## Do not

- Ignore Design Mode payloads or reply only with “what should I do?”
- Ask redundant clarifying questions when the selection + note already specify the change.
- Open parallel unrelated tasks unless the user asks.
