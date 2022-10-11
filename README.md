# Story Dashboard

## 팀원 등록

- 이름
- 일률[포인트당 시간 소모 비율] (시간/스토리포인트)
- 캘린더 연동하기 버튼
  - 일일 가용 스토리 포인트 (= (8 - 버퍼 - 고정) x 일률)
  - 테스트 일자별 스토리 포인트 (= 해당 날짜의 일일 가용 스토리포인트의 합 : 디/테1/테2)

---

### GET - /memeber

### GET - /memeber/:id

### POST - /memeber

### PUT - /memeber/:id

### DELETE - /memeber/:id

---

## 블로킹 등록

- 스토리 선택
- 태스크 선택
- 블로킹 요소 이름
- 블로킹 요소 스토리포인트

---

### GET - /unexpectedTask

### GET - /unexpectedTask/:id

### POST - /unexpectedTask

### PUT - /unexpectedTask/:id

### DELETE - /unexpectedTask/:id

---

## 스토리 등록

- 스토리 이름
- 태스크 추가 - 이름, 스토리포인트

---

### GET - /story

### GET - /story/:id

### POST - /story

### PUT - /story/:id

### DELETE - /story/:id

---

### GET - /task

### GET - /task/:id

### POST - /task

### PUT - /task/:id

### DELETE - /task/:id

---

## 스토리 진행현황 (스토리 마무리 가능 여부)

- 스토리에 있는 테스크 하나라도 해당 날짜에 완료가 될 수 없다면 불가능 으로 표시
- 스토리에 어떤 블로킹이 있는지 나타남
