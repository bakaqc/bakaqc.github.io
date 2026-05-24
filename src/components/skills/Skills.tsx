import "./Skills.scss";

interface SkillGroup {
  id: string;
  label: string;
  caption: string;
  icons: string;
  pills: string[];
}

const PRIMARY_GROUPS: SkillGroup[] = [
  {
    id: "platform",
    label: "Work Stack · Power Platform & Azure",
    caption: "Daily driver at WeCare Group — accounting & supply-chain automation.",
    icons: "azure,ts,react,nodejs,nextjs",
    pills: [
      "Power Apps Code App",
      "Power BI",
      "Power Automate",
      "Microsoft Dataverse",
      "Azure Functions v4",
      "Azure AI Foundry",
      "MSAL",
      "Fluent UI v9",
      "TanStack Query",
      "ReactFlow",
      "FAST Accounting API",
      "MISA e-Invoice",
    ],
  },
];

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    caption: "Day-to-day across backend, frontend, mobile.",
    icons: "ts,javascript,java,kotlin,c,html,css,sass,pug",
    pills: ["TypeScript", "JavaScript", "Java", "Kotlin", "C", "HTML", "CSS", "Sass", "Pug"],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    caption: "Backend-first, React-comfortable.",
    icons: "react,nextjs,nodejs,express,nestjs,redux,graphql,prisma,hibernate,bootstrap,tailwind,mongo,mysql,postgresql",
    pills: [
      "React 18 / 19",
      "Next.js",
      "Node.js",
      "Express",
      "NestJS",
      "Redux",
      "GraphQL",
      "Prisma",
      "Hibernate",
      "Tailwind",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    caption: "Shipping, debugging, and the daily quality-of-life kit.",
    icons: "docker,azure,firebase,supabase,vite,maven,yarn,npm,pnpm,postman,git,github,vscode,androidstudio,figma",
    pills: [
      "Docker",
      "Azure",
      "Firebase",
      "Supabase",
      "Vite",
      "Maven",
      "pnpm",
      "Postman",
      "Git / GitHub",
      "VS Code",
      "Android Studio",
      "Figma",
    ],
  },
];

const SkillCard = ({ group, primary }: { group: SkillGroup; primary?: boolean }) => (
  <article className={`skill__card ${primary ? "skill__card--primary" : ""}`}>
    <header className="skill__head">
      <h3 className="skill__label">{group.label}</h3>
      <p className="skill__caption">{group.caption}</p>
    </header>

    <img
      src={`https://skillicons.dev/icons?i=${group.icons}`}
      alt={group.label}
      className="skill__icons"
      loading="lazy"
    />

    <div className="skill__pills">
      {group.pills.map((pill) => (
        <span key={pill} className="skill__pill">
          {pill}
        </span>
      ))}
    </div>
  </article>
);

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <span className="section__eyebrow">Skills</span>
        <h2 className="section__title">My toolbox.</h2>
        <p className="section__subtitle">
          The stack I reach for — grouped by where it lives in my day.
        </p>

        <div className="skill__grid skill__grid--primary">
          {PRIMARY_GROUPS.map((group) => (
            <SkillCard key={group.id} group={group} primary />
          ))}
        </div>

        <div className="skill__grid">
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
