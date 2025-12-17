# View Accumulated Rules

Display all accumulated code review rules.

## Arguments

- `$ARGUMENTS` - Optional category filter: `tsx`, `scss`, `naming`, `structure`, `accessibility`, or `all` (default)

## Your Task

1. **Read rules.json** for statistics
2. **Display rules** from requested category or all categories
3. **Format output** for easy reading

## Output Format

```markdown
# Code Review Rules

## Statistics
- **Total Rules**: [count]
- **Learning Sessions**: [count]
- **Last Updated**: [date]

## Categories

| Category | Rules | File |
|----------|-------|------|
| TSX | [count] | rules/tsx.md |
| SCSS | [count] | rules/scss.md |
| Naming | [count] | rules/naming.md |
| Structure | [count] | rules/structure.md |
| Accessibility | [count] | rules/accessibility.md |

---

## [Category Name] Rules

### [RULE-ID] Rule Title
**Severity**: [level]
**Added**: [date]

[Description]

---

[Repeat for each rule in category]
```

## If No Category Specified

Show summary of all categories with rule counts.

## If Specific Category

Show all rules in that category with full details including examples.

## If No Rules Yet

```markdown
# Code Review Rules

No rules have been accumulated yet.

Use `/learn` to start learning mode and accumulate rules through code review feedback.
```

## Start Now

Read the rules and display them.
