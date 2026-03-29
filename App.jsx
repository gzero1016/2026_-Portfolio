import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [showQuickLab, setShowQuickLab] = useState(false);

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
        <h3>💻 사용할 수 있는 기술</h3>
        <p>
          Java, Python, C, C++,<br />
          JavaScript, TypeScript,<br />
          React,<br />
          Spring, Spring Boot,<br />
          MySQL, MariaDB, Oracle, PostgreSQL, MSSQL,<br />
          VB, C#
        </p>
        <h3>🚀 자신 있는 기술</h3>
        <p>
          Java, JavaScript, TypeScript,<br />
          React, Spring Boot,<br />
          MySQL, MariaDB
        </p>
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
        </div>

        <div className="card">
          <h3>쿠팡</h3>
          <p>2020.10 ~ 2022.12</p>
          <p>김해1캠프 / 운영팀</p>
          <p>물류 프로세스 이해 기반 도메인 강점</p>
        </div>
      </section>

      {/* 🔷 Projects */}
      <section className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>Challenge_With_Us</h3>
          <p>프론트엔드 챌린지 프로젝트</p>
          <p>
            - React 기반 웹 애플리케이션 개발<br />
            - API 데이터 기반 리스트 및 상세 페이지 구현<br />
            - 검색 / 필터 / 페이지네이션 기능 구현<br />
            - 사용자 경험(UI/UX) 개선 및 인터랙션 구현
          </p>
          <p>
            - 컴포넌트 기반 구조 설계<br />
            - 상태 관리 및 데이터 흐름 최적화<br />
            - 코드 가독성과 유지보수성을 고려한 개발
          </p>
          <p>👉 GitHub:</p>
          <a 
            href="https://github.com/gzero1016/challenge_with_us_frontend" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-button"
          >
            코드 보러가기
          </a>
        </div>

        <div className="card highlight" onClick={() => setShowQuickLab(true)}>
          <h3>QuickLab (개인 프로젝트)</h3>
          <p><strong>기획 → 설계 → 개발 → 운영까지 전체 담당</strong></p>
          <p><strong>2024.01 ~ 현재 (실제 서비스 운영 중)</strong></p>
          <p>- React + TypeScript + Spring Boot 기반 풀스택 개발</p>
          <p>- AWS 서버 구축 및 운영 / MySQL 기반 DB 설계 및 최적화</p>
          <p>- 관리자/사용자 분리 구조 설계 / 휴무 관리 및 정산 자동화 구현</p>
        </div>

              {/* 🔷 QuickLab 상세 모달 */}
      {showQuickLab && (
        <div className="modal-overlay" onClick={() => setShowQuickLab(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowQuickLab(false)}>← 뒤로가기</button>
            <h2>QuickLab (개인 프로젝트)</h2>
            <p><strong>프로젝트 기간:</strong> 2024.01 ~ 현재 (26개월 운영 중)</p>

            <h3>역할</h3>
            <p>
              기획, 개발, 데이터베이스 설계 및 구축을 포함한 다양한 역할을 수행하며, 
              시스템 설계부터 구현, 유지보수까지 전방위적인 책임을 지었습니다. 
              UI/UX 디자인을 통해 사용자 친화적인 인터페이스를 구현하고, 
              지속적인 시스템 최적화를 통해 효율성과 안정성을 높였습니다.
            </p>

            <h3>기술 스택</h3>
            <p>
              HTML, CSS, JavaScript (ver.1), TypeScript, React, SpringBoot,<br />
              AWS, NginX, EC2, Ubuntu, MySQL 기반 서버 및 DB 관리
            </p>

            <h3>프로젝트 개요</h3>
            <p>
              본 프로젝트의 주요 목표는 관리자와 일반 유저 모두의 업무 효율성을 극대화하는 웹 기반 시스템 구축입니다.<br />
              관리자용 웹 버전은 휴무 계획과 정산 업무의 자동화 및 간소화를 목표로 하였고,<br />
              모바일 버전은 사용자 친화적인 인터페이스로 휴무 신청과 스케줄 관리를 간편하게 할 수 있도록 설계했습니다.
            </p>

            <h3>주요 기능</h3>
            <ul>
              <li>관리자 중심의 휴무 및 정산 관리 시스템 구현</li>
              <li>엑셀 업로드를 통한 쿠팡 정산자료 효율적 처리</li>
              <li>월별 스케줄과 휴무 상태를 한눈에 확인 가능한 대시보드 제공</li>
              <li>간편한 카카오 SSO 로그인 기능 구현</li>
              <li>사용자 권한에 따른 맞춤형 UI/UX 제공</li>
            </ul>

            <h3>프로젝트 성과</h3>
            <ul>
              <li>관리자 휴무 조율 시간 3시간 → 20분 단축</li>
              <li>정산 업무 시간 3시간 → 20분 단축</li>
              <li>일반 유저 업무 스트레스 감소 및 편의성 향상</li>
              <li>정산표 웹 상에서 직관적 관리 가능</li>
              <li>휴무 신청 절차 간소화로 시스템 사용률 증가</li>
              <li>AWS → 홈서버 이전으로 운영 비용 절감, 안정성 확보</li>
              <li>약 90명 유저 운영 / 총 17회 업데이트 진행</li>
            </ul>

          </div>
        </div>
      )}

        <div className="card">
          <h3>PFOS (LG)</h3>
          <p>Paperless Factory Operating System</p>
        </div>

        <div className="card">
          <h3>GLAS (LG)</h3>
          <p>Global Line Audit System</p>
        </div>

        <div className="card">
          <h3>PMS</h3>
          <p>사내 프로젝트 관리 시스템</p>
        </div>

        <div className="card">
          <h3>ERP</h3>
          <p>사내 ERP 시스템 개발 및 유지보수</p>
        </div>

        <div className="card highlight">
          <h3>SCM 시스템 (단독 개발)</h3>
          <p><strong>기획 → 설계 → 개발 → 배포 전체 담당</strong></p>
          <p>- React + Express 기반 풀스택 아키텍처 구성</p>
          <p>- IIS + PM2를 활용한 서비스 배포 및 운영</p>
          <p>- MSSQL 기반 데이터 모델링 및 쿼리 최적화</p>
          <p>- 재고 관리 / 발주 / 입출고 관리 시스템 구현</p>
          <p>- FTA 관리 기능 개발 / 실제 업무 프로세스 개선</p>
        </div>
      </section>

      {/* 🔷 Contact */}
      <section className="section">
        <h2>Contact</h2>
        <p>Phone: 010-5168-2503</p>
        <p>Email: gzero1016@gmail.com</p>
        <p>GitHub: <a href="https://github.com/gzero1016" target="_blank" rel="noopener noreferrer" className="link-button">gzero1016</a></p>
      </section>

    </div>
  );
}

export default App;