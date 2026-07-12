# ambient-glow-ui

토스 프로덕트 디자이너 챌린지 "핵심 플로우" 8개 화면을 Figma 디자인 그대로 구현한 프로토타입입니다. Vite + React + TypeScript + Tailwind + Radix + Motion 스택으로, 업로드해주신 `package.json`과 동일한 의존성을 사용합니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:5174
```

- 화면 하단 가운데의 점(dot) 인디케이터로 아무 단계나 이동할 수 있습니다(데모용 네비게이터).
- 각 화면의 하단 버튼으로 다음 단계, 좌상단 아이콘으로 이전 단계로 이동합니다.

## 플로우 순서

1. 회의 조건 설정 — 일정 이름 / 소요 시간 / 필요 조건(회의실 토글) / 진행 희망 기간 / 마감 기한
2. 본인(주최자) 이메일 입력
3. 참석자 이메일 입력 — 별표로 필수/선택 전환, X로 삭제
4. 잡아야 할 일정 확인 — 요약 글로우 카드 + 참석자 배지 리스트 + 마감 기한
5. 후보에 반응 남기기 — 좋아요 / 가능해요 / 어려워요
6. 시간 계산 로딩 (2.6초 후 자동 전환)
7. 결과 — 반응 집계 + 이유 카드 + 시그니처 글로우 후보 카드
8. 캘린더 추가 완료

## 구조

```
src/
  index.css              디자인 토큰(타이포/글래스), 전역 스타일
  flow.ts                단계 네비게이션 타입
  App.tsx                8단계 스테퍼 + 전환 애니메이션
  data/meeting.ts        참석자·회의·후보 목업 데이터
  components/
    chrome/              StatusBar, TopBar, HomeIndicator, BottomCTA, PhoneFrame
    ui/                  ScreenTitle, Chip, Badge, ToggleSwitch, Card, Textfield
  screens/               8개 화면
```

## 디자인 토큰

색상·라운드·글로우 그림자·타이포 스케일은 `tailwind.config.js`와 `src/index.css`에 Figma 변수명 그대로 매핑했습니다. 시그니처 요소인 앰비언트 글로우는 `.shadow-glow`(inset 보라→파랑)로 정의되어 강조 카드에 적용됩니다.

아이콘은 Figma 내보내기 에셋(7일 만료) 대신 프로젝트에 포함된 `lucide-react`로 재구성했습니다.

## Vercel 배포

아래 README 하단의 두 방법 중 하나를 사용하세요. Vite 프로젝트는 Vercel이 프레임워크를 자동 감지합니다(빌드 `npm run build`, 출력 `dist`).

### 방법 A — GitHub 연동(권장)

```bash
git init && git add -A && git commit -m "init"
# GitHub에 저장소 생성 후 push, Vercel 대시보드에서 Import
```

### 방법 B — Vercel CLI

```bash
npm i -g vercel
vercel          # 최초 실행 시 로그인 + 프로젝트 설정
vercel --prod   # 프로덕션 배포
```

SPA 라우팅 폴백은 `vercel.json`에 포함되어 있습니다.
