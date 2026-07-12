export type Attendee = {
  name: string;
  email: string;
  role: "host" | "required" | "optional";
};

export const attendees: Attendee[] = [
  { name: "박수빈", email: "soobin@toss.im", role: "host" },
  { name: "이가영", email: "gayoung@toss.im", role: "required" },
  { name: "윤지은", email: "jieun.yoon@toss.im", role: "required" },
  { name: "정지훈", email: "jihoon.jung@toss.im", role: "required" },
  { name: "김민수", email: "minsu.kim@toss.im", role: "optional" },
  { name: "최서연", email: "seoyeon@toss.im", role: "optional" },
];

export const meeting = {
  title: "PP리뷰 B그룹",
  duration: "1시간 진행 예정",
  periodFrom: "7월 6일 오전 10시",
  periodTo: "10일 오후 2시",
  needsRoom: true,
  deadline: "7월 3일 금요일 23:59",
};

export type Candidate = {
  index: number;
  /** date + time on one line, e.g. "7월 15일 화요일 오전 10:00-11:00" */
  label: string;
  likes: number;
  maybe: number;
  hard: number;
  notes: string[];
};

export const candidates: Candidate[] = [
  {
    index: 1,
    label: "7월 15일 화요일 오전 10:00-11:00",
    likes: 4,
    maybe: 2,
    hard: 0,
    notes: ["참석자 6명 모두 비어 있어요", "수빈님은 앞 일정과 1시간 여유 있어요"],
  },
  {
    index: 2,
    label: "7월 16일 수요일 오후 2:00-3:00",
    likes: 2,
    maybe: 3,
    hard: 1,
    notes: [
      "필수 참석자 4명은 비어 있어요",
      "선택 참석자 1명은 일정이 있어요",
      "수빈님은 바로 앞에 일정 있어요",
    ],
  },
  {
    index: 3,
    label: "7월 18일 금요일 오전 11:00-12:00",
    likes: 1,
    maybe: 2,
    hard: 3,
    notes: ["참석자 6명 모두 비어 있어요", "수빈님은 이후 일정이 없어요"],
  },
];

export const result = {
  index: 1,
  date: "7월 15일 화요일",
  time: "오전 10:00-11:00",
  room: "미팅룸 6",
  attendeeSummary: "박수빈 외 5명 참석",
  reason: "필수 참석자 4명이 모두 가능하고\n어려워요 응답이 가장 적어요",
};
