import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import {
  profile,
  highlights,
  domains,
  sections,
  about,
  skills,
  experiences,
  featuredProjects,
  otherProjects,
  education,
  trainings,
  certifications,
} from "./data.js";

const NAV = [
  { id: "about", label: "소개" },
  { id: "experience", label: "경력" },
  { id: "projects", label: "프로젝트" },
  { id: "skills", label: "기술" },
  { id: "education", label: "학력 · 자격" },
  { id: "contact", label: "연락처" },
];

// "2024.03 — 2025.04" 형식의 기간들을 겹치는 달 없이 합산
function getDevCareer() {
  const toIndex = (ym) => {
    const [y, m] = ym.split(".").map(Number);
    return y * 12 + (m - 1);
  };
  const now = new Date();
  const months = new Set();
  experiences
    .filter((exp) => exp.dev)
    .forEach((exp) => {
      const [start, end] = exp.period.split("—").map((v) => v.trim());
      const last = end === "현재" ? now.getFullYear() * 12 + now.getMonth() : toIndex(end);
      for (let i = toIndex(start); i <= last; i++) months.add(i);
    });
  const total = months.size;
  return { years: Math.floor(total / 12), months: total % 12, grade: Math.floor(total / 12) + 1 };
}

const career = getDevCareer();

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

function Header() {
  const active = useActiveSection();

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          {profile.name}
        </a>
        <nav className="nav">
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

// "\n"이 들어간 문구를 줄바꿈으로 렌더링
function Lines({ text }) {
  return text.split("\n").map((line, i) => (
    <React.Fragment key={line}>
      {i > 0 && <br />}
      {line}
    </React.Fragment>
  ));
}

function SectionHead({ eyebrow, title, desc }) {
  return (
    <div className="section-head reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        <Lines text={title} />
      </h2>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  );
}

function Chips({ items, main = [] }) {
  return (
    <ul className="chips">
      {items.map((item) => (
        <li key={item} className={main.includes(item) ? "is-main" : ""}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <p className="eyebrow hero-in">
            {career.grade}년차 {profile.role}
          </p>
          <h1 className="hero-in">
            {profile.headline[0]}
            <br />
            {profile.headline[1]}, <span className="blue">{profile.name}</span>입니다.
          </h1>
          <p className="hero-desc hero-in">{profile.intro}</p>
          <div className="hero-actions hero-in">
            <a href="#projects" className="btn btn-primary">
              프로젝트 보기
            </a>
            <a href="#contact" className="btn btn-secondary">
              연락하기
            </a>
          </div>
        </div>

        <ul className="highlights hero-in">
          <li className="is-blue">
            <strong>{career.grade}년차</strong>
            <span>
              {profile.role}
              <br />
              개발 경력 {career.years}년 {career.months}개월
            </span>
          </li>
          {highlights.map((h) => (
            <li key={h.value}>
              <strong>{h.value}</strong>
              <span>
                <Lines text={h.label} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead {...sections.about} />
        <div className="about-grid">
          {about.map((item) => (
            <div key={item.title} className="about-card reveal">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead {...sections.experience} />
        <p className="career-total reveal">
          <strong>{career.grade}년차 개발자</strong>
          <span>
            개발 경력 {career.years > 0 && `${career.years}년 `}
            {career.months > 0 && `${career.months}개월`}
          </span>
        </p>
        <ul className="exp-list">
          {experiences.map((exp) => (
            <li key={exp.company} className="exp reveal">
              <span className="exp-avatar" aria-hidden="true">
                {exp.company.charAt(0)}
              </span>
              <div className="exp-main">
                <h3>
                  {exp.company}
                  {exp.current && <span className="badge">재직 중</span>}
                </h3>
                <p className="exp-role">{exp.role}</p>
                <p className="exp-desc">{exp.desc}</p>
              </div>
              <p className="exp-period">{exp.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Flow({ steps, compact = false }) {
  return (
    <ol className={`flow ${compact ? "is-compact" : ""}`}>
      {steps.map((step, i) => (
        <li key={step.label}>
          {i > 0 && (
            <span className="flow-arrow" aria-hidden="true">
              →
            </span>
          )}
          <div className="flow-box">
            {!compact && <span>{step.label}</span>}
            <strong>{step.value}</strong>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Domains() {
  return (
    <section className="section" id="domains">
      <div className="container">
        <SectionHead {...sections.domains} />
        <div className="domains">
          {domains.map((d, i) => (
            <div key={d.name} className="domain reveal">
              <span className="domain-no">{String(i + 1).padStart(2, "0")}</span>
              <h3>{d.name}</h3>
              <ul>
                {d.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vision() {
  const { eyebrow, title, body } = sections.vision;
  return (
    <section className="section vision">
      <div className="container">
        <div className="vision-card reveal">
          <p className="vision-eyebrow">{eyebrow}</p>
          <h2>
            <Lines text={title} />
          </h2>
          {body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpen }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead {...sections.projects} />

        <div className="featured">
          {featuredProjects.map((p) => (
            <button key={p.id} type="button" className="feature reveal" onClick={() => onOpen(p)}>
              {p.images && (
                <div className="feature-thumb">
                  <img src={p.images[0].src} alt={`${p.title} 화면`} loading="lazy" />
                  <span>화면 {p.images.length}장</span>
                </div>
              )}
              <p className="feature-type">{p.type}</p>
              <h3>{p.title}</h3>
              <p className="feature-summary">{p.summary}</p>

              <div className="feature-metric">
                <strong>{p.metrics[0].value}</strong>
                <span>{p.metrics[0].label}</span>
              </div>

              <ul className="feature-sub">
                {p.metrics.slice(1).map((m) => (
                  <li key={m.label}>
                    <b>{m.value}</b> {m.label}
                  </li>
                ))}
              </ul>

              {p.detail.domainModel && (
                <div className="feature-flow">
                  <span>도메인</span>
                  <Flow
                    steps={p.detail.domainModel.map((n) => ({ label: n.name, value: n.name }))}
                    compact
                  />
                </div>
              )}
              <div className="feature-flow">
                <span>기술</span>
                <Flow steps={p.detail.architecture.slice(1)} compact />
              </div>

              <div className="feature-foot">
                {p.detail.troubleshooting?.some((t) => t.solution) && (
                  <span className="feature-tag">트러블슈팅 포함</span>
                )}
                <span className="feature-more">자세히 보기 ›</span>
              </div>
            </button>
          ))}
        </div>

        <h3 className="sub-head reveal">{sections.others}</h3>
        <div className="others">
          {otherProjects.map((p) => (
            <div key={p.title} className="other reveal">
              <div className="other-head">
                <h4>
                  {p.title}
                  {p.badge && <span className="badge">{p.badge}</span>}
                </h4>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="other-link">
                    GitHub ›
                  </a>
                )}
              </div>
              <p className="other-desc">{p.desc}</p>
              {p.role && <p className="other-role">{p.role}</p>}
              {p.tags && <Chips items={p.tags} />}
              {p.versions?.map((v) => (
                <div key={v.label} className="other-version">
                  <span>{v.label}</span>
                  <Chips items={v.tags} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead {...sections.skills} />
        <div className="skills">
          {skills.map((group) => (
            <div key={group.category} className="skill reveal">
              <h3>{group.category}</h3>
              <Chips items={group.items} main={group.main} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const groups = [
    { title: "학력", items: education.map((e) => ({ name: e.name, sub: e.detail, date: e.period })) },
    { title: "교육 이수", items: trainings.map((t) => ({ name: t.name, sub: t.org, date: t.period })) },
    { title: "자격증", items: certifications.map((c) => ({ name: c.name, sub: c.issuer, date: c.date })) },
  ];

  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead {...sections.education} />
        <div className="edu-grid">
          {groups.map((group) => (
            <div key={group.title} className="edu-card reveal">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}</strong>
                    <span>{item.sub}</span>
                    <p>{item.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-card reveal">
          <p className="eyebrow">{sections.contact.eyebrow}</p>
          <h2>
            <Lines text={sections.contact.title} />
          </h2>
          <div className="hero-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              이메일 보내기
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub 보기
            </a>
          </div>
          <dl className="contact-info">
            <div>
              <dt>이메일</dt>
              <dd>{profile.email}</dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>github.com/gzero1016</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const { detail } = project;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="닫기">
          ✕
        </button>
        <p className="feature-type">
          {project.type} · {project.period}
        </p>
        <h2>{project.title}</h2>
        <p className="modal-summary">{project.summary}</p>

        <div className="modal-metrics">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        {project.images && (
          <div className="gallery">
            {project.images.map((img) => (
              <a key={img.src} href={img.src} target="_blank" rel="noopener noreferrer">
                <img src={img.src} alt={img.caption} loading="lazy" />
                <span>{img.caption}</span>
              </a>
            ))}
          </div>
        )}

        <h4>역할</h4>
        <p>{detail.role}</p>

        <h4>개요</h4>
        <p>{detail.overview}</p>

        {detail.process && (
          <>
            <h4>진행 과정</h4>
            <ol className="process">
              {detail.process.map((step, i) => (
                <li key={step.title}>
                  <span>{i + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </>
        )}

        {detail.domainModel && (
          <>
            <h4>도메인 구조</h4>
            <ol className="domain-tree">
              {detail.domainModel.map((node, i) => (
                <li key={node.name} style={{ marginLeft: `${i * 20}px` }}>
                  <strong>{node.name}</strong>
                  <span>{node.desc}</span>
                </li>
              ))}
            </ol>
            <p className="flow-note">{detail.domainNote}</p>
          </>
        )}

        <h4>시스템 구성</h4>
        <Flow steps={detail.architecture} />
        <p className="flow-note">{detail.architectureNote}</p>

        <h4>기술 스택</h4>
        <p>{detail.stackDetail}</p>

        <h4>주요 기능</h4>
        <div className="feature-groups">
          {detail.featureGroups.map((group) => (
            <div key={group.title}>
              <h5>{group.title}</h5>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h4>성과</h4>
        <ul className="is-result">
          {detail.results.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>

        {detail.troubleshooting
          ?.filter((t) => t.solution)
          .map((t) => (
          <div key={t.title} className="trouble">
            <p className="trouble-label">트러블슈팅</p>
            <h5>{t.title}</h5>
            <dl>
              <div>
                <dt>문제</dt>
                <dd>{t.problem}</dd>
              </div>
              <div>
                <dt>해결</dt>
                <dd>{t.solution}</dd>
              </div>
              {t.result && (
                <div>
                  <dt>결과</dt>
                  <dd>{t.result}</dd>
                </div>
              )}
            </dl>
          </div>
          ))}
      </div>
    </div>
  );
}

function App() {
  const [openProject, setOpenProject] = useState(null);
  const closeProject = useCallback(() => setOpenProject(null), []);
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Domains />
        <Projects onOpen={setOpenProject} />
        <Skills />
        <Education />
        <Vision />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} {profile.nameEn}</div>
      </footer>
      {openProject && <ProjectModal project={openProject} onClose={closeProject} />}
    </>
  );
}

export default App;
