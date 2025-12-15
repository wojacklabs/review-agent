# SCSS / CSS Modules Rules

Rules for styling with SCSS and CSS Modules pattern.

---

## Rules

<!-- RULES_START -->

### [SCSS-001] Do not use gap property

**Severity**: error
**Added**: 2026-01-14

#### Description
`gap` 속성을 사용하지 않는다. flexbox나 grid에서 간격이 필요한 경우 margin을 사용한다.

#### Bad Example
```scss
.row {
  display: flex;
  gap: 1rem; // DO NOT use gap
}
```

#### Good Example
```scss
.row {
  display: flex;

  > * + * {
    margin-left: 1rem;
  }
}

// Or using direct child margin
.row > *:not(:last-child) {
  margin-right: 1rem;
}
```

#### Rationale
브라우저 호환성 및 프로젝트 일관성을 위해 gap 대신 margin 기반 간격을 사용한다.

---

### [SCSS-002] CSS property order

**Severity**: error
**Added**: 2026-01-14

#### Description
CSS 속성은 정해진 순서대로 작성한다. 순서는 다음과 같다:

1. **Content & Overflow**: content, overflow, overflow-x, overflow-y
2. **Positioning**: float, position, top, right, bottom, left, z-index
3. **Display & Flex**: display, table-layout, clear, flex, flex-basis, flex-direction, flex-flow, flex-grow, flex-shrink, flex-wrap, align-content, align-items, align-self, justify-content, order
4. **Box Model - Dimensions**: width, min-width, max-width, height, min-height, max-height
5. **Box Model - Spacing**: margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left
6. **Border**: border, border-top, border-right, border-bottom, border-left, border-width, border-*-width, border-style, border-*-style, border-color, border-*-color, border-radius, border-*-radius, outline, outline-*
7. **Box**: box-sizing, box-shadow
8. **Background**: background, background-*
9. **Typography**: font, font-*, line-height, letter-spacing, text-*, white-space, word-*, vertical-align, color
10. **Transform & Animation**: transform, transform-*, transition, transition-*, animation, animation-*
11. **Other**: list-style, border-collapse, border-spacing, caption-side, cursor, empty-cells, quotes, speak, visibility, opacity

#### Full Property Order
```
content, overflow, overflow-x, overflow-y, float, position, top, right, bottom, left, z-index, display, table-layout, clear, flex, flex-basis, flex-direction, flex-flow, flex-grow, flex-shrink, flex-wrap, align-content, align-items, align-self, justify-content, order, width, min-width, max-width, height, min-height, max-height, margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, border, border-top, border-right, border-bottom, border-left, border-width, border-top-width, border-right-width, border-bottom-width, border-left-width, border-style, border-top-style, border-right-style, border-bottom-style, border-left-style, border-color, border-top-color, border-right-color, border-bottom-color, border-left-color, border-radius, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, outline, outline-offset, outline-width, outline-style, outline-color, box-sizing, box-shadow, background, background-attachment, background-clip, background-color, background-image, background-repeat, background-position, background-size, font, font-family, font-size, font-smooth, font-style, font-variant, font-weight, line-height, letter-spacing, text-align, text-decoration, text-indent, text-overflow, text-rendering, text-shadow, text-transform, text-wrap, white-space, word-spacing, word-break, word-wrap, vertical-align, color, transform, transform-box, transform-origin, transform-style, transition, transition-delay, transition-duration, transition-property, transition-timing-function, animation, animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state, list-style, border-collapse, border-spacing, caption-side, cursor, empty-cells, quotes, speak, visibility, opacity
```

#### Bad Example
```scss
.button {
  color: #fff;
  display: flex;
  background: blue;
  position: relative;
  padding: 10px;
  width: 100px;
}
```

#### Good Example
```scss
.button {
  position: relative;
  display: flex;
  width: 100px;
  padding: 10px;
  background: blue;
  color: #fff;
}
```

#### Rationale
일관된 속성 순서는 코드 가독성을 높이고 팀 협업 시 코드 리뷰를 용이하게 한다.

---

### [SCSS-003] Do not use rem unit

**Severity**: error
**Added**: 2026-01-14

#### Description
`rem` 단위를 사용하지 않는다. 크기 지정 시 `px` 단위를 사용한다.

#### Bad Example
```scss
.container {
  padding: 2rem;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
}
```

#### Good Example
```scss
.container {
  padding: 32px;
  margin-bottom: 24px;
  font-size: 18px;
}
```

#### Rationale
프로젝트 일관성을 위해 px 단위로 통일한다.

---

### [SCSS-004] Unnecessary position relative

**Severity**: error
**Added**: 2026-01-14

#### Description
`position: relative`는 다음 경우에만 사용한다:
- 가상요소(::before, ::after)에 `position: absolute`가 있을 때
- 자식요소에 `position: absolute`가 있을 때
- `z-index` 선언이 필요할 때

위 목적 없이 불필요하게 사용하지 않는다.

#### Bad Example
```scss
.button {
  position: relative; // 불필요 - absolute 자식도 없고 z-index도 없음
  display: inline-flex;
  padding: 10px 20px;
}
```

#### Good Example
```scss
// Case 1: 가상요소에 absolute가 있을 때
.button {
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

// Case 2: 자식요소에 absolute가 있을 때
.card {
  position: relative;
  
  .badge {
    position: absolute;
    top: -8px;
    right: -8px;
  }
}

// Case 3: z-index가 필요할 때
.modal {
  position: relative;
  z-index: 100;
}

// Case 4: 불필요하면 사용하지 않음
.button {
  display: inline-flex;
  padding: 10px 20px;
}
```

#### Rationale
불필요한 position 선언은 코드 복잡성을 높이고 레이아웃 디버깅을 어렵게 만든다.

---

### [SCSS-005] Do not use display grid

**Severity**: error
**Added**: 2026-01-14

#### Description
`display: grid`와 관련 속성(grid-template-columns, grid-template-rows, grid-gap 등)을 사용하지 않는다. 레이아웃은 flexbox를 사용한다.

#### Bad Example
```scss
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
}
```

#### Good Example
```scss
.container {
  display: flex;
  flex-wrap: wrap;

  > * {
    width: calc(33.333% - 11px); // (16px * 2) / 3 = ~11px
  }

  > *:not(:nth-child(3n)) {
    margin-right: 16px;
  }

  > *:nth-child(n + 4) {
    margin-top: 16px;
  }
}
```

#### Rationale
프로젝트 일관성을 위해 flexbox 기반 레이아웃으로 통일한다.

---

### [SCSS-006] Use adjacent sibling selector for spacing

**Severity**: error
**Added**: 2026-01-14

#### Description
형제 요소 간 간격을 줄 때 `:not(:last-child)` 대신 인접 형제 선택자 `& + &` 또는 `> * + *`를 사용한다. 더 깔끔하고 직관적이다.

#### Bad Example
```scss
.list {
  > *:not(:last-child) {
    margin-bottom: 16px;
  }
}

.item {
  &:not(:last-child) {
    margin-right: 8px;
  }
}
```

#### Good Example
```scss
.list {
  > * + * {
    margin-top: 16px;
  }
}

.item + .item {
  margin-left: 8px;
}

// Or using & + & inside the class
.item {
  & + & {
    margin-left: 8px;
  }
}
```

#### Rationale
인접 형제 선택자가 더 간결하고 의미가 명확하다. "이전 요소 다음에 오는 요소"라는 의미가 직관적으로 드러난다.

---

### [SCSS-007] Unnecessary flex column for vertical layout

**Severity**: error
**Added**: 2026-01-14

#### Description
단순히 요소를 세로로 나열하는 목적으로 `display: flex; flex-direction: column`을 사용하지 않는다. `display: block`(기본값)에서 블록 요소는 이미 세로로 나열된다.

flex column은 다음 경우에만 사용한다:
- `align-items`, `justify-content` 등 정렬이 필요할 때
- `flex-grow`, `flex-shrink` 등 flex 속성이 필요할 때
- 자식 요소의 높이를 동적으로 분배해야 할 때

#### Bad Example
```scss
// 불필요 - 단순 세로 나열에 flex column 사용
.wrapper {
  display: flex;
  flex-direction: column;
}

.inputStack {
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 16px;
  }
}
```

#### Good Example
```scss
// 단순 세로 나열은 기본 block으로 충분
.wrapper {
  // display: block is default, no need to specify
}

.inputStack {
  > * + * {
    margin-top: 16px;
  }
}

// flex column이 필요한 경우: 정렬이 필요할 때
.centeredStack {
  display: flex;
  flex-direction: column;
  align-items: center;
}

// flex column이 필요한 경우: 높이 분배가 필요할 때
.fullHeightLayout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    flex: 1;
  }
}
```

#### Rationale
불필요한 flex 선언은 코드 복잡성을 높이고, 브라우저 렌더링에 불필요한 계산을 유발한다.

---

### [SCSS-008] Do not use tag or universal selectors

**Severity**: error
**Added**: 2026-01-14

#### Description
태그 선택자(`div`, `span`, `p` 등)나 유니버설 선택자(`*`)를 사용하지 않는다. 모든 요소는 클래스 선택자로 스타일링한다.

#### Bad Example
```scss
.card {
  p {
    margin-bottom: 8px;
  }

  > * + * {
    margin-top: 16px;
  }
}

.list {
  li {
    padding: 8px;
  }
}
```

#### Good Example
```scss
.card {
  .cardText {
    margin-bottom: 8px;
  }

  .cardItem + .cardItem {
    margin-top: 16px;
  }
}

.list {
  .listItem {
    padding: 8px;
  }
}
```

#### Rationale
- 태그 선택자는 의도치 않은 요소에 스타일이 적용될 위험이 있다
- 유니버설 선택자는 성능에 영향을 줄 수 있다
- 클래스 선택자는 명시적이고 예측 가능하다

---

### [SCSS-009] Do not use vh unit

**Severity**: error
**Added**: 2026-01-14

#### Description
`vh` 단위를 사용하지 않는다. 모바일 브라우저에서 주소창 높이로 인한 레이아웃 문제가 발생할 수 있다.

#### Bad Example
```scss
.hero {
  min-height: 100vh;
}

.page {
  height: 100vh;
}
```

#### Good Example
```scss
.hero {
  min-height: 600px;
}

// 또는 JavaScript로 실제 viewport 높이 계산
// CSS custom property 활용
.page {
  height: var(--app-height, 100%);
}
```

#### Rationale
모바일 브라우저에서 `vh`는 주소창을 포함한 높이로 계산되어 실제 보이는 영역과 차이가 발생한다.

---

### [SCSS-010] Do not use unitless line-height

**Severity**: error
**Added**: 2026-01-14

#### Description
`line-height`를 숫자만으로 선언하지 않는다. 반드시 단위(`px`, `%`)를 명시한다.

#### Bad Example
```scss
.text {
  font-size: 16px;
  line-height: 1.5;
}

.title {
  font-size: 24px;
  line-height: 1.2;
}
```

#### Good Example
```scss
.text {
  font-size: 16px;
  line-height: 24px;
}

.title {
  font-size: 24px;
  line-height: 32px;
}

// 또는 퍼센트 사용
.description {
  font-size: 14px;
  line-height: 150%;
}
```

#### Rationale
단위가 명시된 값이 더 명확하고 예측 가능하다.

---

### [SCSS-011] Do not redeclare shorthand properties individually

**Severity**: error
**Added**: 2026-01-14

#### Description
동일한 클래스에서 축약형 스타일을 선언한 다음 개별 속성으로 재선언하지 않는다. 처음부터 필요한 값만 개별 속성으로 선언하거나, 축약형에서 모든 값을 지정한다.

#### Bad Example
```scss
.box {
  margin: 16px;
  margin-top: 24px; // 축약형 후 개별 재선언 - 금지
}

.card {
  padding: 20px;
  padding-left: 30px; // 축약형 후 개별 재선언 - 금지
}

.title {
  border: 1px solid #ccc;
  border-bottom: none; // 축약형 후 개별 재선언 - 금지
}
```

#### Good Example
```scss
// 방법 1: 처음부터 개별 속성으로 선언
.box {
  margin-top: 24px;
  margin-right: 16px;
  margin-bottom: 16px;
  margin-left: 16px;
}

// 방법 2: 축약형에서 모든 값 지정
.card {
  padding: 20px 20px 20px 30px;
}

// 방법 3: 필요한 개별 속성만 선언
.title {
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
```

#### Rationale
축약형 선언 후 개별 속성 재선언은 코드 가독성을 떨어뜨리고, 어떤 값이 최종 적용되는지 파악하기 어렵게 만든다.

---

### [SCSS-012] No display on flex children

**Severity**: error
**Added**: 2026-01-14

#### Description
`display: flex`의 자식요소에는 `display` 속성을 선언하지 않는다. flex 자식은 이미 flex item으로 동작하므로 별도의 display 선언이 불필요하다.

#### Bad Example
```scss
.parent {
  display: flex;
}

.child {
  display: block; // 불필요 - flex 자식에 display 선언
  width: 100px;
}

.anotherChild {
  display: flex; // 불필요 - 중첩 flex가 필요한 경우가 아니라면
  padding: 16px;
}
```

#### Good Example
```scss
.parent {
  display: flex;
}

.child {
  width: 100px;
}

.anotherChild {
  padding: 16px;
}

// 중첩 flex가 실제로 필요한 경우만 허용
.childWithNestedFlex {
  display: flex; // 자식 요소들을 flex로 정렬해야 할 때만 허용
  align-items: center;
}
```

#### Rationale
flex 자식요소는 자동으로 flex item이 되므로 불필요한 display 선언은 코드 복잡성만 증가시킨다.

---

### [SCSS-013] Do not use em unit

**Severity**: error
**Added**: 2026-01-14

#### Description
`em` 단위를 사용하지 않는다. 크기 지정 시 `px` 단위를 사용한다.

#### Bad Example
```scss
.text {
  padding: 1em;
  font-size: 1.125em;
  letter-spacing: 0.05em;
}
```

#### Good Example
```scss
.text {
  padding: 16px;
  font-size: 18px;
  letter-spacing: 0.8px;
}
```

#### Rationale
프로젝트 일관성을 위해 px 단위로 통일한다. em은 부모 요소의 font-size에 따라 상대적으로 계산되어 예측이 어렵다.

---

### [SCSS-014] Do not use hsl/hsla colors

**Severity**: error
**Added**: 2026-01-14

#### Description
색상 값에 `hsl()` 또는 `hsla()`를 사용하지 않는다. `#hex`, `rgb()`, `rgba()`만 사용한다.

#### Bad Example
```scss
.button {
  background-color: hsl(220, 90%, 56%);
  color: hsla(0, 0%, 100%, 0.9);
}
```

#### Good Example
```scss
.button {
  background-color: #3b82f6;
  color: rgba(255, 255, 255, 0.9);
}

// 또는
.card {
  background-color: rgb(59, 130, 246);
  border-color: #e5e7eb;
}
```

#### Rationale
프로젝트 일관성을 위해 hex 및 rgb/rgba로 통일한다.

---

<!-- RULES_END -->
