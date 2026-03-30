import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [isQuickLabOpen, setIsQuickLabOpen] = useState(false);
  const [isScmOpen, setIsScmOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
  }, []);

  const careerYear = getCareerYear(startDate);

  return (
    <div className="container">

      {/* 🔷 Hero */}
      <section className="hero">
        <h1>풀스택 개발자 박지영</h1>
        <p>
          웹 풀스택 개발자로서 기획, DB 설계, 개발, 배포까지 전 과정을 수행하며,  
          ERP / MES 시스템 개발 경험을 보유하고 있습니다.
        </p>
      </section>

      {/* 🔷 About */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          안녕하세요. 풀스택 웹 개발자입니다.<br /><br />
          기획 → DB 설계 → 개발 → 배포까지 전 과정을 수행하며,<br />
          실제 업무 효율을 개선하는 서비스를 만드는 것을 목표로 합니다.<br /><br />
          React와 Spring Boot/Express를 활용한 풀스택 개발에 강점이 있습니다.
        </p>
      </section>

      {/* 🔷 Skills */}
      <section className="section">
        <h2>Skills</h2>

        <div className="skills-group">
          <h3>💻 사용할 수 있는 기술</h3>

          <div className="skills-list">
            <span className="skill-badge">Java</span>
            <span className="skill-badge">Python</span>
            <span className="skill-badge">C</span>
            <span className="skill-badge">C++</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">TypeScript</span>
            <span className="skill-badge">React</span>
            <span className="skill-badge">Spring</span>
            <span className="skill-badge">Spring Boot</span>
            <span className="skill-badge">MySQL</span>
            <span className="skill-badge">MariaDB</span>
            <span className="skill-badge">Oracle</span>
            <span className="skill-badge">PostgreSQL</span>
            <span className="skill-badge">MSSQL</span>
            <span className="skill-badge">VB</span>
            <span className="skill-badge">C#</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>🚀 자신 있는 기술</h3>

          <div className="skills-list">
            <span className="skill-badge strong">Java</span>
            <span className="skill-badge strong">JavaScript</span>
            <span className="skill-badge strong">TypeScript</span>
            <span className="skill-badge strong">React</span>
            <span className="skill-badge strong">Spring Boot</span>
            <span className="skill-badge strong">MySQL</span>
            <span className="skill-badge strong">MariaDB</span>
          </div>
        </div>
      </section>

      {/* 🔷 Experience */}
      <section className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>SH PAC</h3>
          <p>2025.05.07 ~ 현재</p>
          <p>경영정보팀 / SE</p>
          <p>ERP / MES 시스템 개발 및 유지보수 + 웹 개발</p>
        </div>

        <div className="card">
          <h3>위즈팩토리</h3>
          <p>2024.03.25 ~ 2025.04.30</p>
          <p>SI팀 / 사원</p>
          <p>웹 서비스 및 API 개발</p>
        </div>

        <div className="card">
          <h3>제일씨앤씨</h3>
          <p>2024.01 ~ 2024.03</p>
          <p>IT팀 / 사원</p>
          <p>자체 웹 서비스 및 API 개발</p>
        </div>

        <div className="card">
          <h3>쿠팡</h3>
          <p>2020.10 ~ 2022.12</p>
          <p>김해1캠프 / 운영팀</p>
        </div>
      </section>

      {/* 🔷 Projects */}
      <section className="section">
        <h2>Projects</h2>

        <div className="card">

          <div className="card-header">

            <h3>Challenge_With_Us</h3>

            <button
              className="arrow-button"
              onClick={() =>
                window.open(
                  "https://github.com/gzero1016/challenge_with_us_backend",
                  "_blank"
                )
              }
            >
              🔗
            </button>

          </div>

        <p>반응형 웹</p>

        </div>

        {/* QuickLab */}
        <div
          className={`card highlight clickable ${
            isQuickLabOpen ? "open" : ""
          }`}
          onClick={() => setIsQuickLabOpen(prev => !prev)}
        >

          <div className="card-header">

            <h3>QuickLab (개인 프로젝트)</h3>

            <span className="expand-icon">
              {isQuickLabOpen ? "▲" : "▼"}
            </span>

          </div>

          <p className="click-hint">
            클릭하여 상세 내용 보기
          </p>

        </div>

        <div className={`quicklab-detail ${isQuickLabOpen ? "open" : ""}`}>

        <h2 className="quicklab-title">
          🚀 QuickLab (개인 프로젝트)
        </h2>


        {/* ================= 핵심 요약 ================= */}

        <div className="section-block">
          <h3>핵심 요약</h3>

          <div className="quicklab-meta">
            프로젝트 기간: <strong>2024.01 ~ 현재 (26개월 운영 중)</strong>
          </div>
          <ul>
            <li>
              기획 → 설계 → 개발 → 운영까지 전체 담당
            </li>

          <li>
            React + TypeScript + Spring Boot 기반 풀스택 개발
          </li>


            <li>
              AWS 서버 구축 및 운영 / MySQL 기반 DB 설계 및 최적화
            </li>

            <li>
              관리자 / 사용자 분리 구조 설계 및
              휴무 관리 · 정산 자동화 구현
            </li>

          </ul>

        </div>

        <br />

        {/* 역할 */}

        <div className="section-block">
          <h3>역할</h3>

          <ul>
            <li>기획 / 시스템 설계 / 개발 / 운영 전 과정 단독 수행</li>
            <li>데이터베이스 설계 및 구축</li>
            <li>UI/UX 설계 및 사용자 경험 개선</li>
            <li>지속적인 성능 최적화 및 유지보수</li>
          </ul>
        </div>

        {/* 기술 스택 */}

        <div className="section-block">
          <h3>기술 스택</h3>

          <div className="stack-list">

            <span className="stack-badge">React</span>
            <span className="stack-badge">TypeScript</span>
            <span className="stack-badge">Spring Boot</span>
            <span className="stack-badge">MySQL</span>

            <span className="stack-badge">AWS</span>
            <span className="stack-badge">Nginx</span>
            <span className="stack-badge">EC2</span>
            <span className="stack-badge">Ubuntu</span>

          </div>
        </div>

        {/* 프로젝트 개요 */}

        <div className="section-block">
          <h3>프로젝트 개요</h3>

          <ul>
            <li>관리자 / 일반 사용자 업무 효율 향상을 위한 웹 기반 시스템</li>
            <li>휴무 계획 및 정산 업무 자동화</li>
            <li>모바일 친화적 UI 기반 스케줄 관리 기능 제공</li>
          </ul>
        </div>

        {/* 주요 기능 */}

        <div className="section-block">
          <h3>주요 기능</h3>

          <ul>
            <li>휴무 및 정산 관리 시스템</li>
            <li>엑셀 업로드 기반 자동 정산 처리</li>
            <li>월별 스케줄 대시보드 제공</li>
            <li>카카오 SSO 로그인 구현</li>
            <li>권한 기반 사용자 UI 제공</li>
          </ul>
        </div>

        {/* 성과 */}

        <div className="section-block">
          <h3>프로젝트 성과</h3>

          <div className="achievement-grid">

            <div className="achievement-card">
              ⏱ 휴무 조율 시간  
              <strong>3시간 → 20분</strong>
            </div>

            <div className="achievement-card">
              ⏱ 정산 업무 시간  
              <strong>3시간 → 20분</strong>
            </div>

            <div className="achievement-card">
              👥 약 90명 유저 운영
            </div>

            <div className="achievement-card">
              🔄 총 17회 업데이트
            </div>

          </div>

        </div>

        </div>

        <div className="card">
          <h3>PFOS 시스템 (LG 프로젝트)</h3>

          <p>
            React + Spring Boot 기반 공용 컴포넌트 및 주요 기능 모듈 개발
          </p>

          <p>
            품질 / 사출 / 현황판 기능 담당 (기여도 40%)
          </p>
        </div>

        <div className="card">
          <h3>GLAS 시스템 (LG 프로젝트)</h3>

          <p>
            React + Spring Boot + MariaDB 기반 초기 프레임워크 및 공용 컴포넌트 개발
          </p>

          <p>
            공용 컴포넌트 설계를 통해 팀 개발 생산성 향상 기여 (기여도 40%)
          </p>
        </div>

        <div className="card">
          <h3>PMS 시스템 (사내 프로젝트)</h3>

          <p>
            React + Spring Boot 기반 사내 ERP 웹 시스템 개발 및 배포
          </p>

          <p>
            팀장 역할 수행 / 프로젝트 기여도 50%
          </p>
        </div>

        <div className="card">
          <h3>ERP 시스템 (사내 프로젝트)</h3>

          <p>
            eMAX 프레임워크 기반 자체 ERP 개발 및 유지보수
          </p>

          <p>
            부서 요구사항 기반 신규 화면 기획 · 개발 · 배포 수행
          </p>
        </div>

        {/* SCM */}
        <div
          className={`card highlight clickable ${
            isScmOpen ? "open" : ""
          }`}
          onClick={() => setIsScmOpen(prev => !prev)}
        >

          <div className="card-header">

            <h3>SCM 시스템 (사내 프로젝트)</h3>

            <span className="expand-icon">
              {isScmOpen ? "▲" : "▼"}
            </span>

          </div>

          <p className="click-hint">
            클릭하여 상세 내용 보기
          </p>

        </div>

        <div className={`scm-detail ${isScmOpen ? "open" : ""}`}>

          <h2 className="quicklab-title">
            🏭 SCM 시스템 (단독 개발)
          </h2>

          {/* ================= 핵심 요약 ================= */}

          <div className="section-block">
            <h3>핵심 요약</h3>

            <div className="quicklab-meta">
              프로젝트 유형: <strong>협력사 대상 공급망 관리 시스템</strong>
            </div>

            <ul>

              <li>
                협력업체를 위한 웹 기반 SCM 시스템
                <strong> 단독 기획 · 설계 · 개발 · 배포 수행</strong>
              </li>

              <li>
                발주, 납품, 매출, 입고 등
                <strong> 공급망 업무 전체 프로세스 시스템화</strong>
              </li>

              <li>
                협력사 실시간 데이터 공유 및
                <strong> 납기/정도율 관리 자동화</strong>
              </li>

            </ul>

          </div>

          <br />

          {/* 역할 */}

          <div className="section-block">
            <h3>역할</h3>

            <ul>
              <li>SCM 시스템 전체 기획 및 요구사항 정의</li>
              <li>데이터베이스 설계 및 테이블 구조 설계</li>
              <li>프론트엔드 / 백엔드 개발</li>
              <li>서버 배포 및 운영 환경 구축</li>
              <li>실사용 협력업체 대상 시스템 운영 및 유지보수</li>
            </ul>

          </div>

          {/* 기술 스택 */}

          <div className="section-block">
            <h3>기술 스택</h3>

            <div className="stack-list">

              <span className="stack-badge">React</span>
              <span className="stack-badge">TypeScript</span>

              <span className="stack-badge">Node.js</span>
              <span className="stack-badge">Express</span>

              <span className="stack-badge">MSSQL</span>

              <span className="stack-badge">IIS</span>
              <span className="stack-badge">PM2</span>

            </div>
          </div>

          {/* 주요 기능 */}

          <div className="section-block">
            <h3>주요 기능</h3>

            <ul>

              <li>소요 계획 조회</li>

              <li>발주 현황 관리</li>

              <li>예시 정도율 조회</li>

              <li>납기 준수 현황 관리</li>

              <li>납품 등록 및 입고 현황 조회</li>

              <li>거래명세표 / 부품 식별표 출력</li>

              <li>납품서 발행 현황 관리</li>

              <li>미매출 입고 조회</li>

              <li>매출 내역 상세 조회</li>

              <li>공제 금액 관리</li>

              <li>도면 수신 관리</li>

              <li>유상 사급 관리</li>

              <li>FTA 관련 데이터 관리</li>

            </ul>

          </div>

          {/* 시스템 특징 */}

          <div className="section-block">
            <h3>시스템 특징</h3>

            <ul>

              <li>
                협력업체 대상 웹 기반 SCM 시스템 구축
              </li>

              <li>
                기존 수작업 기반 업무를 시스템화하여
                데이터 관리 효율 향상
              </li>

              <li>
                납품 및 매출 데이터 실시간 조회 가능
              </li>

              <li>
                협력사 업무 프로세스 표준화
              </li>

            </ul>

          </div>

        </div>

      </section>

      {/* 🔷 Self Introduction */}
      <section className="section">
        <h2>Self Introduction</h2>

        <div className="intro-card">
          <h3>성장과정</h3>
          <p>
            수학에 대한 높은 흥미와 성취로 자란 저는 어린 시절, 수학 경시대회에서 우수한 성적을 거두었습니다.
            그러나 태권도의 매력에 빠져 운동 분야로 나아가 대학 진학을 미뤄 태권도장에 취직하게 되었습니다.
            이러한 선택은 발목 부상과 같은 어려움을 안겨주었지만, 이를 통해 인내심과 책임감을 배우며 인간적으로 성장할 수 있었습니다.
            <br /><br />
            이후 쿠팡에서의 사무직 경험은 다양한 사회생활을 경험할 수 있는 계기가 되었고,
            그 과정에서 IT 분야에 대한 관심과 열망이 크게 생기게 되었습니다.
            이를 계기로 개발자로의 진로를 결심하였고, 꾸준한 학습과 실습을 통해 기술 역량을 향상시켜 왔습니다.
            <br /><br />
            국비지원 교육 과정 중 무릎 반월상 파열이라는 예상치 못한 어려움을 겪기도 했지만,
            병원 생활 중에도 학습을 멈추지 않았고, 퇴원 후에는 목발을 짚고 학원에 다니며 끝까지 과정을 완수했습니다.
            그 결과 교육 과정에서 2등이라는 성과를 달성하며 스스로에 대한 자신감을 얻을 수 있었습니다.
            <br /><br />
            취업 이후에도 현재에 안주하지 않고 지속적인 자기개발을 이어가고 있습니다.
            업무 외 시간에는 직접 기획부터 설계, 개발, 운영까지 전 과정을 수행한
            자체 웹 프로그램인 QuickLab을 개발하여 실제 사용자 환경에서 운영하고 있으며,
            지속적인 기능 개선과 업데이트를 통해 서비스 품질을 꾸준히 향상시키고 있습니다.
            또한 웹 개발 역량에 더해 모바일 환경까지 확장하기 위해 앱 개발 분야에도 도전하고 있으며,
            새로운 기술을 학습하고 적용하는 과정을 꾸준히 이어가고 있습니다.
            <br /><br />
            어떠한 상황에서도 포기하지 않고 꾸준히 노력하는 자세와 실행력을 바탕으로
            문제를 해결하고 성과를 만들어내는 개발자로 성장해 왔으며,
            앞으로도 지속적인 학습과 도전을 통해 조직에 실질적으로 기여할 수 있는 개발자가 되고자 합니다.
          </p>
        </div>

        <div className="intro-card">
          <h3>성격의 장/단점</h3>
          <p>
            제 성격의 가장 큰 강점은 맡은 일에 대해 끝까지 책임지고 완수하려는 태도와 높은 실행력입니다.
            업무를 수행할 때 단순히 주어진 역할에 머무르기보다,
            문제가 발생하면 원인을 파악하고 해결 방안을 찾기 위해 먼저 움직이는 자세를 중요하게 생각합니다.
            이러한 태도를 바탕으로 프로젝트 진행 과정에서 맡은 업무를 책임감 있게 수행하며,
            팀원들과 신뢰를 쌓고 안정적인 협업 환경을 만들어 왔습니다.
            <br /><br />
            한편, 업무에 대한 책임감이 강하다 보니 문제 해결 과정에서 제 의견을 분명하게 표현하는 편이며,
            때로는 이러한 모습이 상대방에게 직설적으로 느껴질 수 있다는 점도 인지하고 있습니다.
            그래서 최근에는 다양한 관점과 의견을 먼저 충분히 듣고 정리한 뒤,
            공통의 목표를 기준으로 최선의 방향을 함께 도출하는 소통 방식을 실천하고 있습니다.
            <br /><br />
            앞으로도 책임감과 실행력을 바탕으로 맡은 업무를 안정적으로 수행하는 동시에,
            팀원들과의 원활한 소통과 협업을 통해 조직에 신뢰를 주는 구성원으로 성장하고자 합니다.
          </p>
        </div>

        <div className="intro-card">
          <h3>직무에 필요한 역량을 갖추기 위한 노력</h3>
          <p>
            Spring Boot를 보다 깊이 이해하기 위해 초기에는 단순히 기능을 사용하는 수준에 머무르지 않고,
            웹 애플리케이션의 동작 원리를 직접 구현해보는 방식으로 학습을 진행했습니다.
            특히 Servlet 기반 구조를 스스로 구성해보며 요청 처리 흐름과 애플리케이션 실행 구조를 이해하려 노력했고,
            이를 통해 프레임워크의 동작 원리를 체계적으로 파악할 수 있었습니다.
            이러한 경험은 이후 실무에서 프로젝트를 설계하고 구현하는 과정에서
            문제의 원인을 구조적으로 분석하고 해결하는 데에 큰 기반이 되었습니다.
            <br /><br />
            또한 교육 과정 당시에는 동료들과 함께 학습 효율을 높이기 위해
            화면 공유 기반의 스터디 환경을 자발적으로 운영하며 지식 공유 문화를 만들어 본 경험이 있습니다.
            각자가 이해한 내용을 서로 설명하고 해결 방법을 공유하는 과정을 통해
            개인 학습을 넘어 팀 단위로 지식을 확장하는 협업 경험을 쌓을 수 있었습니다.
            <br /><br />
            현재 {careerYear}년차 개발자로 근무하고 있는 지금도 이러한 학습 습관을 유지하며 꾸준히 자기개발을 이어가고 있습니다.
            업무 외 시간에는 실제 사용자를 대상으로 운영 중인 자체 웹 프로그램을 직접 개발하고 지속적으로 업데이트하며
            기능 개선과 성능 최적화를 반복하고 있고,
            새로운 기술과 개발 방식에 대한 이해를 넓히기 위해 관련 기술을 꾸준히 학습하고 적용하고 있습니다.
            앞으로도 현재에 안주하지 않고 지속적인 자기개발을 통해 더 안정적이고 신뢰할 수 있는 서비스를 만드는 개발자로 성장하고자 합니다.
          </p>
        </div>

        <div className="intro-card">
          <h3>입사 후 목표</h3>
          <p>
            입사 후에는 단순히 주어진 업무를 수행하는 데에 그치지 않고,
            지금까지 쌓아온 실무 경험을 바탕으로 조직에 실질적인 기여를 할 수 있는 개발자가 되고자 합니다.
            업무를 수행하는 과정에서 발견되는 비효율이나 개선이 필요한 부분을 능동적으로 파악하고,
            사용자와 업무 흐름을 고려한 현실적인 개선 방안을 제안하고 실행하는 역할을 수행하고 싶습니다.
            <br /><br />
            또한 현재까지 웹 기반 시스템을 설계하고 개발하며 운영해 온 경험을 기반으로
            서비스의 안정성과 유지보수성을 높이는 개발 역량을 지속적으로 강화하고,
            새로운 기술과 개발 방식에도 꾸준히 도전하며 조직의 기술 경쟁력 향상에 기여하는 개발자로 성장하는 것을 목표로 하고 있습니다.
          </p>
        </div>
      </section>

      {/* 🔷 Contact */}
      <section className="section">
        <h2>Contact</h2>
        <p>Phone: 010-5168-2503</p>
        <p>Email: gzero1016@gmail.com</p>
      </section>

    </div>
  );
}

export default App;

// 시작일 설정 (입사일)
const startDate = new Date(2024, 0, 1); // 2024년 1월 1일

function getCareerYear(start) {
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();

  // 아직 올해 입사 기념일이 안 지났으면 1년 빼기
  const hasPassedAnniversary =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() &&
      now.getDate() >= start.getDate());

  if (!hasPassedAnniversary) {
    years -= 1;
  }

  // 최소 1년차 보장
  if (years < 0) {
    years = 0;
  }

  return years + 1;
}