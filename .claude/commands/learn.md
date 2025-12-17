# Learning Mode - Generate Component for Review

You are entering **Learning Mode** to accumulate code review rules.

## Your Task

1. **Generate a React component** (TSX + SCSS Module pair) in `samples/components/`
2. **Wait for user review** - do NOT proceed until user provides feedback
3. **Parse feedback into rules** and update the rules files

## Component Generation Guidelines

Create a component with:
- `ComponentName.tsx` - React component with TypeScript
- `ComponentName.module.scss` - Matching SCSS Module (1:1 correspondence)

### Component Ideas (vary these for diverse rules)
- Button, IconButton, ButtonGroup
- Input, TextArea, Select, Checkbox, Radio
- Card, Panel, Modal, Dialog
- Header, Footer, Sidebar, Navigation
- List, Table, Grid, Pagination
- Avatar, Badge, Tag, Tooltip
- Alert, Toast, Notification
- Tabs, Accordion, Dropdown
- Form, FormField, FormGroup
- Loading, Spinner, Skeleton, Progress

## Output Format

After generating the component, output:

```
## Generated Component: [ComponentName]

### Files Created:
- samples/components/[ComponentName]/[ComponentName].tsx
- samples/components/[ComponentName]/[ComponentName].module.scss

### Component Preview:
[Brief description of what the component does]

---

**Please review the code above and provide your feedback.**
I will convert your feedback into rules for future reference.
```

## After User Review

When user provides feedback:

1. Parse each feedback item into a structured rule
2. Categorize: tsx, scss, naming, structure, or accessibility
3. Add to appropriate `rules/*.md` file
4. Update `rules.json` metadata
5. Update summary in `CLAUDE.md` if rule is critical

### Rule Format
```markdown
### [CATEGORY-XXX] Rule Title

**Severity**: error | warning | suggestion
**Added**: YYYY-MM-DD

#### Description
[What the rule is about]

#### Bad Example
```tsx
// Code that violates
```

#### Good Example
```tsx
// Code that follows
```

#### Rationale
[Why this matters]
```

## Start Now

Generate a new component now. Choose one that hasn't been created yet or that covers different patterns.
