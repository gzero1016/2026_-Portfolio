// 포트폴리오 콘텐츠 — 문구 수정은 이 파일에서만 하면 됩니다.

export const profile = {
  name: "박지영",
  nameEn: "Jiyoung Park",
  role: "풀스택 개발자",
  headline: ["업무를 이해하고", "시간과 비용을 줄여주는 개발자"],
  intro:
    "SI를 거쳐 지금은 사내 ERP · MES · SCM을 만듭니다. 외주로 쓰던 SCM을 혼자 새로 만들어 유지보수비를 연 2,000만 원 줄였고, 물류 관리 웹 서비스 QuickLab을 직접 기획 · 개발해 현재 약 100명이 실제 업무에 쓰고 있습니다.",
  email: "gzero1016@gmail.com",
  github: "https://github.com/gzero1016",
};

export const domains = [
  { name: "제조", items: ["ERP 영업 · 생산 · 구매 · 품질", "SCM · MES 개발과 운영", "LG 생산 현장 시스템 PFOS · GLAS"] },
  { name: "물류", items: ["QuickLab 기사 배차 · 노선 · 정산 관리"] },
  { name: "통신 · 커머스", items: ["휴대폰 비교 사이트", "지도 · 사업자 조회 API 연동"] },
  { name: "사내 업무", items: ["프로젝트 관리 시스템(PMS)", "사내 웹 서비스"] },
];

// 섹션 제목 (\n 위치에서 줄이 바뀝니다)
export const sections = {
  about: { eyebrow: "소개", title: "업무를 이해하고,\n끝까지 책임집니다" },
  competencies: {
    eyebrow: "핵심역량",
    title: "실무에서 결과로\n증명한 역량입니다",
    desc: "모든 역량은 실제 운영 중인 서비스에서 낸 결과를 근거로 정리했습니다.",
  },
  experience: { eyebrow: "경력", title: "사무직에서 시작해\n개발자가 되었습니다" },
  projects: { eyebrow: "프로젝트", title: "직접 만들고,\n실제로 쓰이는 서비스" },
  others: "그 외 참여한 프로젝트",
  skills: {
    eyebrow: "기술",
    title: "프로젝트에 맞는\n기술로 일합니다",
    desc: "파란색으로 표시한 기술은 실무에서 주로 쓰는 기술입니다.",
  },
  domains: {
    eyebrow: "업무 분야",
    title: "여러 업무 분야의 시스템을\n직접 만들어 왔습니다",
    desc: "제조, 물류, 커머스까지 실제 업무에 쓰이는 시스템을 개발하고 운영했습니다.",
  },
  education: { eyebrow: "학력 · 자격", title: "일하면서\n꾸준히 공부했습니다" },
  vision: {
    eyebrow: "앞으로",
    title: "한 분야를 깊이 이해하는\n개발자가 되겠습니다",
    body: [
      "SI 프로젝트, 제조 ERP, 직접 운영한 물류 서비스를 거치며 좋은 시스템은 기능보다 업무를 이해하는 데서 나온다는 것을 배웠습니다.",
      "앞으로는 한 업무 분야를 깊이 익혀, 그 분야에서 일하는 사람들이 정말 필요로 하는 시스템을 만드는 개발자로 성장하겠습니다.",
    ],
  },
  contact: { eyebrow: "연락처", title: "함께 일할 기회가 있다면\n편하게 연락 주세요" },
};

export const about = [
  {
    title: "업무를 먼저 이해합니다",
    body: "QuickLab을 운영하며 사용자 요청을 반영해 기능을 계속 고쳐 왔습니다. 실제로 쓰이는 시스템은 개발 실력만큼 사용자의 업무를 이해하는 데서 나온다는 것을 배웠습니다.",
  },
  {
    title: "처음부터 끝까지 맡습니다",
    body: "기획, DB 설계, 개발, 배포, 운영까지 직접 담당합니다. SCM 시스템과 QuickLab 모두 혼자 설계해 실제 업무에 안착시켰습니다.",
  },
  {
    title: "스택을 가리지 않습니다",
    body: "React · Spring Boot 웹 서비스부터 VB · C# 기반 ERP까지, 프로젝트와 회사 환경에 맞는 기술로 빠르게 적응해 일해 왔습니다.",
  },
];

// 핵심역량 카드 — proofs의 value는 강조 숫자, label은 근거 설명
export const competencies = [
  {
    title: "업무 도메인 분석과 DB 설계",
    desc: "복잡하게 얽힌 실제 업무 구조를 먼저 정리하고, 그 구조가 그대로 드러나도록 데이터를 설계합니다.",
    proofs: [
      { value: "5단계", label: "업체 → 캠프 → 근무조 → 기사 → 노선 계층 설계 (QuickLab)" },
      { value: "4개 도메인", label: "ERP 영업 · 생산 · 구매 · 품질 담당" },
    ],
  },
  {
    title: "SQL 튜닝과 성능 개선",
    desc: "데이터가 쌓여 느려진 화면을 쿼리, 저장 프로시저, 인덱스 단위로 점검해 체감 속도를 끌어올립니다.",
    proofs: [
      { value: "20초 → 2초", label: "저장 프로시저 · 인덱스 재구성 (QuickLab)" },
      { value: "30초 → 5초", label: "대용량 조회 쿼리 튜닝 (SCM)" },
    ],
  },
  {
    title: "기획부터 운영까지 1인 풀스택",
    desc: "기획, 설계, 프론트엔드 · 백엔드 개발, 서버 구축과 배포, 운영 중 장애 대응까지 혼자 맡아 끝냅니다.",
    proofs: [
      { value: "17회", label: "운영 중 사용자 요청을 반영한 업데이트 (QuickLab)" },
      { value: "2개 서비스", label: "QuickLab · SCM 모두 1인 개발로 실사용 안착" },
    ],
  },
  {
    title: "업무 자동화로 비용 · 시간 절감",
    desc: "반복되는 수작업과 외부 의존을 시스템으로 바꿔, 현업이 바로 느끼는 시간과 비용을 줄입니다.",
    proofs: [
      { value: "3h → 20m", label: "엑셀 업로드 자동 정산 (QuickLab)" },
      { value: "연 2,000만 원", label: "외주 SCM 내재화로 유지보수비 절감" },
    ],
  },
];

// main: 실무에서 주로 쓰는 기술 / 나머지: 사용 경험이 있는 기술
export const skills = [
  { category: "Language", items: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++", "C#", "VB"], main: ["Java", "JavaScript", "TypeScript", "C#", "VB"] },
  { category: "Frontend", items: ["React", "HTML", "CSS"], main: ["React"] },
  { category: "Backend", items: ["Spring Boot", "Spring", "Express"], main: ["Spring Boot", "Express"] },
  { category: "Database", items: ["MySQL", "MariaDB", "MSSQL", "Oracle", "PostgreSQL"], main: ["MySQL", "MariaDB", "MSSQL"] },
  { category: "Infra", items: ["AWS EC2", "Nginx", "Ubuntu", "IIS", "PM2", "Firebase"], main: ["IIS"] },
];

// dev: true인 경력만 개발 경력(연차)에 합산됩니다
export const experiences = [
  {
    company: "SH PAC",
    period: "2025.05 — 현재",
    role: "경영정보팀 · SE",
    dev: true,
    desc: "ERP에서 영업 · 생산 · 구매 · 품질 도메인을 맡아, 장애 대응뿐 아니라 부서별 정기 회의로 고도화와 유지보수를 진행합니다. 외주 업체가 운영하던 SCM 시스템을 혼자 새로 개발해 교체했습니다.",
    current: true,
  },
  {
    company: "위즈팩토리",
    period: "2024.03 — 2025.05",
    role: "SI팀 · 사원",
    dev: true,
    desc: "여러 SI 프로젝트에서 웹 서비스와 API를 개발하며 다양한 기술과 업무를 경험했습니다.",
  },
  {
    company: "제일씨앤씨",
    period: "2024.01 — 2024.03",
    role: "IT팀 · 사원",
    dev: true,
    desc: "휴대폰 비교 사이트의 화면 컴포넌트를 만들고 기능을 개발했습니다. 지도 API와 사업자 조회 API를 연동하고, SSL 인증서 적용과 Firebase 알림 설정도 맡았습니다.",
  },
  {
    company: "쿠팡",
    period: "2020.10 — 2022.12",
    role: "김해1캠프 · 운영팀",
    desc: "사무직으로 일하며 매일 쓰는 업무 프로그램이 어떻게 만들어지는지 궁금해졌고, 이때 학점은행제로 컴퓨터공학 공부를 시작했습니다.",
  },
];

export const featuredProjects = [
  {
    id: "quicklab",
    title: "QuickLab",
    type: "개인 프로젝트 · 약 100명 실사용",
    period: "2024.01 — 현재",
    summary: "업체마다 여러 캠프, 기사마다 정해진 노선이 얽힌 물류 업무를 하나로 정리한 스케줄 · 배차 · 정산 서비스",
    stack: ["React", "TypeScript", "Spring Boot", "MySQL", "AWS", "Nginx"],
    metrics: [
      { value: "3h → 20m", label: "관리자 휴무 조율 시간" },
      { value: "20초 → 2초", label: "대용량 화면 표시 시간" },
      { value: "3h → 20m", label: "정산 업무 시간" },
      { value: "약 100명", label: "실사용자" },
    ],
    images: [
      { src: "images/quicklab-dispatch.png", caption: "휴무자 노선을 남은 기사에게 재배차하는 화면" },
      { src: "images/quicklab-schedule.png", caption: "월별 근무 · 휴무 현황 달력" },
      { src: "images/quicklab-settlement.png", caption: "라우터별 배송 · 반품 건수를 집계한 정산표" },
    ],
    detail: {
      role:
        "기획, UI/UX 설계, DB 설계, 프론트엔드 · 백엔드 개발, 서버 구축과 운영까지 혼자 담당했습니다. 운영 중 생기는 문제를 해결하고 사용자 요청을 반영해 지금까지 17번 업데이트했습니다.",
      overview:
        "물류회사의 기사 스케줄, 배차, 업무 노선, 정산을 관리하기 위해 직접 기획하고 개발한 서비스입니다. 한 업체 안에 여러 캠프가 있고, 캠프마다 주간 · 야간 근무조가 있으며, 기사마다 담당 노선이 정해져 있는 복잡한 구조를 먼저 정리하는 데 가장 공을 들였습니다. 관리자는 웹에서 휴무 계획과 정산을 처리하고, 기사는 모바일에서 휴무 신청과 일정 확인을 할 수 있도록 나눠 설계했습니다.",
      domainModel: [
        { name: "업체", desc: "서비스를 쓰는 물류 업체" },
        { name: "캠프", desc: "업체마다 여러 개" },
        { name: "근무조", desc: "캠프마다 주간 · 야간" },
        { name: "기사", desc: "근무조에 소속" },
        { name: "노선", desc: "기사마다 담당 노선(라우터)" },
      ],
      domainNote: "휴무, 배차, 정산이 모두 이 구조 위에서 맞물려 동작합니다. 기사 한 명의 휴무가 같은 캠프 · 근무조의 배차와 그달 정산까지 연결됩니다.",
      stackDetail: "React, TypeScript, JavaScript (ver.1), Spring Boot, MySQL, AWS EC2, Nginx, Ubuntu",
      architecture: [
        { label: "사용자", value: "관리자 웹 · 기사 모바일" },
        { label: "프론트엔드", value: "React · TypeScript" },
        { label: "웹 서버", value: "Nginx" },
        { label: "백엔드", value: "Spring Boot" },
        { label: "DB", value: "MySQL" },
      ],
      architectureNote: "홈서버에서 운영 (AWS EC2에서 이전) · 카카오 로그인 · JWT 인증",
      featureGroups: [
        {
          title: "스케줄 · 휴무",
          items: [
            "캠프별 · 주간 / 야간 근무조 일정을 한 달 달력으로 확인",
            "기사는 모바일에서 휴무 신청, 관리자는 웹에서 휴무 계획",
          ],
        },
        {
          title: "배차 · 노선",
          items: [
            "휴무자가 생기면 남는 노선(잔여 노선)과 겹치는 노선(중복 노선)을 자동으로 정리",
            "출근 명부의 기사에게 노선을 다시 배정하고 저장",
          ],
        },
        {
          title: "정산",
          items: [
            "쿠팡 정산표 엑셀을 그대로 업로드하면 자동 계산",
            "기사 노선 등록 화면에서 고정 기사 · 백업 기사 단가와 원단가 관리",
            "라우터별 배송 · 반품 건수 집계",
            "프레시백 · 파손 금액 · 프로모션을 반영한 예상 급여",
            "정산 확인 완료 처리와 엑셀 다운로드",
          ],
        },
        {
          title: "계정 · 권한",
          items: ["카카오 로그인과 JWT 인증", "관리자 / 기사 권한에 따라 다른 화면 제공", "JavaScript(ver.1)에서 TypeScript로 전환"],
        },
      ],
      results: [
        "관리자 휴무 조율 시간 3시간 → 20분",
        "정산 업무 시간 3시간 → 20분",
        "휴무 신청 절차가 간단해져 사용률 증가",
        "20초 걸리던 대용량 화면을 2초 만에 표시, 버벅임 해소",
        "AWS에서 홈서버로 이전해 운영 비용 절감",
        "약 100명 실사용, 총 17회 업데이트",
      ],
      troubleshooting: [
        {
          title: "업체 · 캠프 · 기사 · 노선이 얽힌 도메인 구조 설계",
          problem:
            "한 업체에 캠프가 여러 개 있고, 캠프마다 근무조가 나뉘며, 기사마다 담당 노선이 정해져 있어 관계가 복잡했습니다. 기사 한 명이 휴무를 내면 그 노선을 누가 맡을지, 정산은 어떻게 달라지는지까지 함께 풀어야 했습니다.",
          solution:
            "업체 → 캠프 → 근무조 → 기사 → 노선으로 이어지는 관계를 계층으로 정리해 DB를 설계했습니다. 휴무가 생기면 해당 기사의 노선을 잔여 노선으로 계산하고, 같은 캠프 · 근무조의 출근 기사에게 다시 배정할 수 있게 만들었습니다.",
          result: "",
        },
        {
          title: "기사마다 다른 단가를 반영한 엑셀 자동 정산",
          problem:
            "쿠팡에서 내려오는 정산표 엑셀을 올리기만 하면 정산이 끝나게 하고 싶었지만, 기사마다 단가가 모두 다르고 같은 노선을 맡는 백업 기사조차 단가가 달라 정산표의 금액을 그대로 쓸 수 없었습니다.",
          solution:
            "기사 노선 등록 화면에 고정 기사 단가, 백업 기사 단가, 원단가 입력란을 만들었습니다. 정산표를 올리면 기사 ID + 캠프 + 노선을 키로 매핑하고, 정산표에서는 노선별 수량과 파손 · 프레시백 · 프로모션 단가만 가져와 '노선별 수량 × 기사 단가'로 계산하도록 로직을 구성했습니다.",
          result: "엑셀을 그대로 올리기만 하면 기사별 정산이 계산되어, 정산 업무 시간이 3시간에서 20분으로 줄었습니다.",
        },
        {
          title: "대용량 데이터 조회 속도 개선",
          problem: "운영 데이터가 쌓이면서 대용량 데이터를 조회하는 화면이 그려지기까지 20초 정도 걸리고 버벅였습니다.",
          solution:
            "애플리케이션에 있던 복잡한 조회 쿼리를 저장 프로시저로 옮기고, 가상 테이블로 중간 결과를 나눠 처리했습니다. 조회 조건에 맞춰 인덱스를 다시 구성해 쿼리를 튜닝했습니다.",
          result: "20초 걸리던 화면이 2초 만에 그려지고, 버벅임이 사라졌습니다.",
        },
      ],
    },
  },
  {
    id: "scm",
    title: "SCM 시스템",
    type: "사내 프로젝트 · 외주 시스템 내재화",
    period: "SH PAC",
    summary: "외주로 운영하던 공급망 관리 시스템을 기획부터 새로 개발해 회사에 안착시켰습니다",
    stack: ["React", "Express", "MSSQL", "IIS", "PM2"],
    metrics: [
      { value: "연 2,000만 원", label: "외주 유지보수비 절감" },
      { value: "30초 → 5초", label: "대용량 화면 조회 시간" },
      { value: "1인", label: "기획부터 배포까지 전담" },
      { value: "4개 언어", label: "다국어 화면 지원" },
    ],
    images: [
      { src: "images/scm-statement.png", caption: "거래명세표 · 부품식별표 전송과 출력" },
      { src: "images/scm-delivery.png", caption: "발주 내역을 불러와 납품 수량을 등록하는 화면" },
      { src: "images/scm-forecast.png", caption: "기준일과 비교일의 소요량 차이를 일자별로 비교하는 예시정도율" },
    ],
    detail: {
      role: "기획, 부서별 협의, 설계, 개발, 배포까지 혼자 맡았고, 오픈 이후에도 고도화와 사용자 편의성 개선을 이어가고 있습니다.",
      overview:
        "외주 업체가 만든 기존 SCM은 사용자 요청이 생길 때마다 추가 비용이 들어 불편이 컸습니다. 이를 사내 시스템으로 교체하면서 기존 화면을 그대로 옮기는 대신 기획부터 다시 시작하는 신규 프로젝트로 진행했고, 부서별 의견 조율과 사용자 편의성을 가장 중요하게 두었습니다.",
      process: [
        { title: "문제 파악", body: "요청마다 추가 비용이 드는 외주 시스템의 한계 확인" },
        { title: "부서별 협의", body: "부서마다 요구사항을 모으고 의견을 조율" },
        { title: "범위 정리", body: "요청이 많아 오픈 필수 기능과 고도화 기능을 구분" },
        { title: "신규 개발", body: "기존 화면 복사가 아닌 기획부터 새로 설계 · 개발" },
        { title: "오픈 · 고도화", body: "사내에 안착시킨 뒤 편의성 중심으로 계속 개선" },
      ],
      stackDetail: "React, Express, MSSQL, IIS, PM2",
      architecture: [
        { label: "사용자", value: "현업 담당자" },
        { label: "프론트엔드", value: "React" },
        { label: "웹 서버", value: "IIS" },
        { label: "백엔드", value: "Express · PM2" },
        { label: "DB", value: "MSSQL" },
      ],
      architectureNote: "사내 서버에서 운영 · 쿠키 기반 인증",
      featureGroups: [
        {
          title: "소요계획 · 발주",
          items: [
            "63일 소요계획과 유상사급 소요계획",
            "발주 현황 · 발주 통합 현황 · 납기 준수 현황",
            "기준일과 비교일의 소요량 차이를 일별 · 월별로 보는 예시정도율",
          ],
        },
        {
          title: "납품",
          items: [
            "발주 내역을 불러와 납품 등록",
            "거래명세표 · 부품식별표 전송과 일괄 출력",
            "납품서 발행 현황 · 입고 현황 · 미매출 입고 조회",
          ],
        },
        {
          title: "회계 · 도면 · 사급",
          items: ["공제금액과 매출 내역 상세 조회", "도면 수신", "유상사급 출하 및 매입 현황"],
        },
        {
          title: "공통",
          items: [
            "SCM · FTA · SYS 3개 모듈 구성",
            "한국어 · 영어 · 중국어 · 일본어 다국어 화면",
            "여러 화면을 탭으로 열어 두고, 탭을 오가도 데이터와 스크롤 위치 유지",
            "엑셀 다운로드와 문의하기",
            "쿠키 기반 인증, 30분 무응답 시 자동 로그아웃",
          ],
        },
      ],
      results: [
        "외주 시스템을 자체 개발 시스템으로 교체해 사내에 안착",
        "외주 유지보수비 연 2,000만 원 절감",
        "추가 비용 없이 사용자 요청을 바로 반영할 수 있는 구조로 전환",
        "30초 넘게 걸리던 대용량 조회 화면을 5초 이내로 단축",
        "기능 고도화와 사용자 편의성 개선",
      ],
      troubleshooting: [
        {
          title: "탭 전환 시 화면 상태 유지 (캐시)",
          problem:
            "현업 담당자는 여러 화면을 탭으로 열어 두고 오가며 일하는데, 탭을 옮길 때마다 조회한 데이터와 스크롤 위치가 초기화되면 다시 조회하고 찾아 내려가야 했습니다. 탭마다 화면 상태를 그대로 유지하는 캐시를 만드는 데 어려움이 있었습니다.",
          solution:
            "탭마다 키를 두고 조회한 데이터와 스크롤 위치를 세션 스토리지에 저장했습니다. 화면이 열릴 때 세션 스토리지에서 해당 키의 데이터와 스크롤 위치를 먼저 찾아 그대로 복원하고, 없을 때만 새로 조회하도록 했습니다.",
          result: "탭을 오가도 다시 조회하거나 스크롤을 찾아 내려갈 필요가 없어졌고, 불필요한 재조회도 줄었습니다.",
        },
        {
          title: "대용량 데이터 조회 SQL 튜닝",
          problem:
            "다루는 데이터가 많아, 조회를 눌러 표에 데이터가 그려지기까지 30초가 넘게 걸리는 화면이 있었습니다.",
          solution: "화면마다 실행되는 조회 쿼리를 점검하고 튜닝하는 데 개발 시간을 집중적으로 투입했습니다.",
          result: "표에 그려지는 시간까지 포함해 30초가 넘던 조회를 5초 이내로 줄였습니다.",
        },
        {
          title: "쿠키 기반 세션 만료 (30분 자동 로그아웃)",
          problem:
            "JWT를 쓰는 QuickLab과 달리 쿠키 기반 인증을 사용하는데, 사용자가 30분 이상 아무 동작이 없으면 자동으로 로그아웃되도록 세션 만료를 구현하는 데 어려움이 있었습니다.",
          solution:
            "5분마다 핑을 보내 사용자 반응을 확인하고, 반응이 없으면 무응답 시간을 누적했습니다. 누적 30분이 되면 세션을 만료시키면서 탭 캐시로 쓰던 세션 스토리지 데이터까지 모두 비우고 로그인 화면으로 돌려보냈습니다.",
          result: "자리를 비운 화면에 업무 데이터가 남지 않도록 했습니다.",
        },
      ],
    },
  },
];

export const otherProjects = [
  {
    title: "Challenge_With_Us",
    desc: "챌린지 웹 서비스입니다.",
    role: "목록 · 상세 화면과 검색, 필터, 페이지네이션을 구현했습니다.",
    tags: ["React", "JavaScript", "Java", "Spring Boot", "MySQL", "AWS EC2", "Nginx"],
    link: "https://github.com/gzero1016/challenge_with_us_frontend",
  },
  {
    title: "PFOS",
    desc: "LG Paperless Factory Operating System. 생산 현장의 종이 문서를 전산화하는 시스템입니다.",
    role: "Ver.2에서 컴포넌트 개발을 중심으로 화면 전체의 뼈대를 만드는 역할을 맡았습니다.",
    versions: [
      { label: "Ver.1", tags: ["C#", ".NET", "DevExpress", "MySQL", "IIS"] },
      { label: "Ver.2", tags: ["React", "TypeScript", "Java", "Spring Boot", "MySQL", "IIS", "Tomcat"] },
    ],
  },
  {
    title: "GLAS",
    desc: "LG Global Line Audit System. 생산 라인 점검(Audit)을 관리하는 시스템입니다.",
    role: "그래프 · 차트 중심 도메인을 맡았고, 팀 전체가 함께 쓰는 공용 컴포넌트를 개발했습니다.",
    tags: ["React", "TypeScript", "Java", "Spring Boot", "MariaDB"],
  },
  {
    title: "휴대폰 비교 사이트",
    desc: "휴대폰을 비교해 볼 수 있는 웹 서비스입니다. (제일씨앤씨)",
    role: "화면 컴포넌트 제작과 기능 개발을 맡았고, 지도 API · 사업자 조회 API 연동, SSL 인증서 적용, Firebase 알림 설정을 진행했습니다.",
    tags: ["React", "JavaScript", "Java", "Spring Boot", "PostgreSQL", "Firebase", "AWS EC2", "Nginx"],
  },
  {
    title: "PMS",
    desc: "사내 프로젝트 관리 시스템입니다.",
    role: "PL로 팀원들을 이끌며 기획과 컴포넌트 개발을 맡았습니다.",
    badge: "PL",
    tags: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL", "PM2", "IIS"],
  },
  {
    title: "ERP",
    desc: "한국 · 멕시코 사내 ERP를 개발하고 유지보수합니다.",
    role: "영업 · 생산 · 구매 · 품질 도메인을 맡아, 장애 대응뿐 아니라 부서별 정기 회의로 고도화를 진행합니다.",
    badge: "운영 중",
    versions: [
      { label: "한국", tags: ["VB", "DevExpress", "MSSQL"] },
      { label: "멕시코", tags: ["C#", ".NET", "MSSQL"] },
    ],
  },
];

export const education = [
  {
    name: "학점은행제 컴퓨터공학과",
    detail: "4년제 · 졸업",
    period: "2022.01 — 2026.02",
  },
  {
    name: "대광발명과학고등학교",
    detail: "졸업",
    period: "2014.03 — 2017.02",
  },
];

export const trainings = [
  {
    name: "[산대특] AWS 기반 공공빅데이터 활용 웹개발자 양성",
    org: "코리아IT아카데미 · 수료 (2등)",
    period: "2023.06 — 2023.12",
  },
];

export const certifications = [
  { name: "컴퓨터활용능력 1급", issuer: "대한상공회의소", date: "2023.05" },
  { name: "네트워크관리사 2급", issuer: "한국정보통신자격협회(ICQA)", date: "2023.04" },
];
