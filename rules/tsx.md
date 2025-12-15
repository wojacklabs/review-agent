# TSX / React Rules

Rules for React component development with TypeScript.

---

## Rules

<!-- RULES_START -->

### [TSX-001] No unstyled wrapper elements

**Severity**: error
**Added**: 2026-01-14

#### Description
스타일이 적용되지 않은 `<span>`, `<div>` 등의 래퍼 요소는 불필요하다. 스타일이나 특별한 목적 없이 단순히 감싸기만 하는 요소는 제거한다.

#### Bad Example
```tsx
// 불필요한 span - 스타일 없음
<button>
  <span>{children}</span>
</button>

// 불필요한 div - 스타일 없음
<div>
  <p>Some text</p>
</div>
```

#### Good Example
```tsx
// span 제거
<button>
  {children}
</button>

// 스타일이 있는 경우는 허용
<button>
  <span className={styles.text}>{children}</span>
</button>

// 조건부 렌더링 등 목적이 있는 경우는 허용
<div className={styles.container}>
  <p>Some text</p>
</div>
```

#### Rationale
불필요한 DOM 요소는 성능에 영향을 주고, 마크업 가독성을 떨어뜨린다.

---

<!-- RULES_END -->
