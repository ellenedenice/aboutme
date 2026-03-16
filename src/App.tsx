import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Study Planner",
    description:
      "Application for students to organize subjects, weekly goals, and study progress with a clean interface.",
    stack: ["React", "TypeScript", "Chart.js"],
  },
  {
    title: "Anonymous Reporting Platform",
    description:
      "A system concept focused on safe and structured workplace discrimination reporting.",
    stack: ["React", "UX/UI", "Software Engineering"],
  },
  {
    title: "Scheduling Website",
    description:
      "Responsive scheduling interface designed for a nail studio, focused on usability and visual clarity.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

const floatingSnippets = [
  "const future = build();",
  "function createExperience() { return 'clean'; }",
  "<Portfolio mode='tech' />",
  'git commit -m "ship it"',
  "if (idea) transform(idea);",
  "export default Developer;",
  "npm run success",
  "while(coding){ improve(); }",
  "console.log('Hello, world');",
  "const design = 'minimal';",
  "useEffect(() => animateBackground(), []);",
  "return innovation;",
];

function AnimatedBackground() {
  return (
    <div className="background">
      <div className="bg-base"></div>
      <div className="bg-radial"></div>
      <div className="bg-grid"></div>

      {floatingSnippets.map((text, index) => {
        const left = (index * 8) % 90;
        const delay = index * 0.6;
        const duration = 12 + (index % 5) * 2;
        const top = 5 + ((index * 7) % 85);

        return (
          <motion.div
            key={text + index}
            className="floating-snippet"
            style={{ left: `${left}%`, top: `${top}%` }}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: [0.08, 0.28, 0.08],
              y: [0, -40, -80],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
          >
            {text}
          </motion.div>
        );
      })}

      <motion.div
        className="glow glow-1"
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="glow glow-2"
        animate={{ scale: [1.1, 1, 1.15], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-title">
      <Code2 size={18} />
      <h2>{children}</h2>
    </div>
  );
}

export default function App() {
  return (
    <main className="portfolio">
      <AnimatedBackground />

      <div className="content">
        <header className="header">
          <div>
            <p className="header-label">Hello, World!</p>
          </div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-tag"
            >
              software engineering student
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hero-title"
            >
              Ellen Edenice Almeida
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-text"
            >
              I build full-stack web applications focused on usability, clean
              architecture, and real-world problem solving. This portfolio
              reflects my approach to development: modern interfaces, structured
              code, and scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-buttons"
            >
              <a
                href="https://github.com/ellenedenice"
                className="btn btn-primary"
              >
                View Projects
              </a>
              <a
                href="mailto:ellen.edenice@hotmail.com"
                className="btn btn-secondary"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="code-box"
          >
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>{`const developer = {`}</p>
              <p className="indent">name: "Ellen Edenice Almeida",</p>
              <p className="indent">focus: "Full-stack developer",</p>
              <p className="indent">
                in progress: BSc in Software Engineering,
              </p>

              <p>{`}`}</p>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section glass-box">
          <SectionTitle>About</SectionTitle>

          <div className="about-grid">
            <p className="section-text">
              I am a Software Engineering student with focus on web development,
              responsive interfaces and projects that solve real problems. I
              enjoy combining organization, functionality and visual identity to
              create experiences that feel modern and professional. My main
              interest is full-stack development, where I can work on both the
              user interface and the systems behind it. I like building
              applications that are not only visually clean, but also
              structured, scalable and efficient. I am constantly improving my
              skills by developing practical projects, exploring new
              technologies and applying good software engineering practices such
              as clean code, version control and modular architecture. My goal
              is to create solutions that are reliable, user-focused and
              technically well designed.
            </p>

            <div>
              <p className="stack-title">Stack</p>
              <div className="stack-list">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "TypeScript",
                  "Git",
                  "APIs",
                  "Responsive Design",
                  "Python",
                  "SQL",
                  "MySQL",
                  "PostgreSQL",
                  "Java",
                  "C#",
                  "Cybersecurity",
                ].map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle>Projects</SectionTitle>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="project-card"
              >
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <ExternalLink size={18} />
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="mini-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="section glass-box">
          <SectionTitle>Contact</SectionTitle>

          <p className="section-text">
            Open to internships, collaborations and opportunities in software
            development.
          </p>

          <div className="contact-links">
            <a href="https://github.com/ellenedenice" className="contact-btn">
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ellenedenicealmeida/"
              className="contact-btn"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="mailto:ellen.edenice@hotmail.com" className="contact-btn">
              <Mail size={18} /> Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
