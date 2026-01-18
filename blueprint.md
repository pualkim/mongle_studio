# Blueprint for Mongle Studio Landing Page

## Project Overview
Mongle Studio는 AI 기반 크리에이티브 제작 스튜디오를 소개하는 단일 페이지 랜딩입니다. 프레임워크 없이 HTML/CSS/JavaScript로 구성된 정적 사이트이며, 동일한 마크업을 `index.html`과 `public/index.html`에 유지합니다.

## Current Features
- **Hero 소개 영역:** 스튜디오 포지셔닝, 핵심 제작 파이프라인 설명, CTA 버튼 제공.
- **서비스 섹션:** 뮤직비디오/상세페이지/PDF 분리 세 가지 서비스 카드 구성.
- **프로세스 섹션:** 3단계 협업 프로세스 안내.
- **CTA + Footer:** 문의 유도 및 기본 연락처 정보 제공.
- **테마 토글:** 라이트/다크 모드 전환 버튼과 CSS 변수 기반 테마.
- **카피 강조:** Gamini API Key로 누구나 AI를 쉽게 사용할 수 있다는 메시지를 포함.

## Future Features / To-Do
- **콘텐츠 확장:** 포트폴리오/케이스 스터디 섹션 추가.
- **문의 폼:** 이메일 링크 대신 간단한 폼 제공.
- **분석 도구:** 기본 트래픽 분석 스크립트 연동.

## Technologies Used
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Typography:** Google Fonts (IBM Plex Sans KR)

## Design Principles
- **현대적이면서 신뢰감 있는 톤:** 여백과 대비를 강조한 레이아웃.
- **명확한 정보 구조:** 섹션별 카피와 CTA 중심 구성.
- **반응형 우선:** 다양한 뷰포트에서 깨지지 않는 레이아웃.
- **접근성 고려:** 명확한 대비와 버튼 라벨 제공.

---

## Plan for Current Request: Gamini API Key 문장 추가

### Objective
Hero 카피에 Gamini API Key로 누구나 AI를 쉽고 편리하게 사용할 수 있다는 문장을 추가한다.

### Steps
1. **Hero 카피 업데이트:** `index.html`의 리드 문장에 추가 문장 삽입.
2. **퍼블릭 사본 동기화:** `public/index.html`에도 동일한 문장 반영.
