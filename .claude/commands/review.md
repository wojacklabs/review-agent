# Review Mode - Review External Project Commit

You are entering **Review Mode** to review code in another project using accumulated rules.

## Arguments

- `$ARGUMENTS` - Expected format: `<repo-path> <commit-hash>`

## Your Task

1. **Parse arguments** to get repository path and commit hash
2. **Load all rules** from `rules/` folder
3. **Get commit diff** using git
4. **Review the diff** against accumulated rules
5. **Output structured review**

## Step-by-Step Process

### 1. Parse Arguments
```
Repository: [extracted repo path]
Commit: [extracted commit hash]
```

### 2. Load Rules
Read all rule files:
- rules/tsx.md
- rules/scss.md
- rules/naming.md
- rules/structure.md
- rules/accessibility.md
- rules.json (for metadata)

### 3. Get Commit Diff
```bash
cd <repo-path>
git show <commit-hash> --stat
git show <commit-hash> -- '*.tsx' '*.scss'
```

### 4. Review Against Rules

For each changed file:
- Check against applicable rules
- Note violations with rule IDs
- Note good practices

### 5. Output Format

```markdown
# Code Review: [commit-hash-short]

## Summary
- **Repository**: [repo-path]
- **Commit**: [full-hash]
- **Files Changed**: [count]
- **Rules Applied**: [count]

## Violations

### [RULE-ID] Rule Title
**File**: `path/to/file.tsx:line`
**Severity**: error | warning | suggestion

```tsx
// Problematic code
```

**Suggestion**:
```tsx
// Fixed code
```

---

## Good Practices Noted
- [List of things done well according to rules]

## Files Not Reviewed
- [Non TSX/SCSS files that were skipped]

## Review Statistics
- Errors: X
- Warnings: Y
- Suggestions: Z
```

## Handle Edge Cases

- If no arguments provided: Ask for repo path and commit hash
- If repo doesn't exist: Report error
- If commit not found: Report error
- If no rules exist: Warn that rules should be accumulated first via /learn
- If no TSX/SCSS files in commit: Report that no reviewable files found

## Start Now

Parse the arguments and begin the review process.
