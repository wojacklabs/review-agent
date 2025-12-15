# Code Review Rules Index

This document provides an overview of all accumulated code review rules.

## Categories

| Category | File | Description | Rule Count |
|----------|------|-------------|------------|
| TSX/React | [tsx.md](./tsx.md) | React component patterns, hooks, props | 0 |
| SCSS/CSS Modules | [scss.md](./scss.md) | Styling patterns, CSS Modules usage | 0 |
| Naming | [naming.md](./naming.md) | File, component, variable naming | 0 |
| Structure | [structure.md](./structure.md) | Component structure, file organization | 0 |
| Accessibility | [accessibility.md](./accessibility.md) | a11y best practices | 0 |

## How Rules Are Added

1. **Learning Mode**: Claude generates a React component
2. **User Review**: User provides feedback on the code
3. **Rule Extraction**: Claude parses feedback into structured rules
4. **Storage**: Rules are added to appropriate category file
5. **Sync**: Summary updated in CLAUDE.md, metadata in rules.json

## Rule Format

Each rule follows this format:

```markdown
### [RULE-ID] Rule Title

**Severity**: error | warning | suggestion
**Added**: YYYY-MM-DD

#### Description
Brief explanation of the rule.

#### Bad Example
```tsx
// Code that violates the rule
```

#### Good Example
```tsx
// Code that follows the rule
```

#### Rationale
Why this rule matters.
```

## Quick Stats

- **Total Rules**: 0
- **Last Updated**: Not yet
- **Learning Sessions**: 0
