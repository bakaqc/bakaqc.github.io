import { Suspense } from "react";
import "./Skills.scss";
import Loading from "../common/Loading";

const Skills = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My Technical Level</span>
          <div className="skills__container container">
            <h2 className="section__header">Languages</h2>
            <img src="https://skillicons.dev/icons?i=ts,javascript,java,kotlin,c,html,css" />
            <br />
            <br />
            <h2 className="section__header">Frameworks & Libraries</h2>
            <img src="https://skillicons.dev/icons?i=nestjs,express,nodejs,prisma,nextjs,react,tailwind,bootstrap,mongo,mysql,postgresql,gradle" />
            <br />
            <br />
            <h2 className="section__header">Others</h2>
            <img src="https://skillicons.dev/icons?i=docker,postman,vscode,git,github,vite,yarn,pnpm,androidstudio,figma,firebase,supabase,vercel,azure,cloudflare" />
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Skills;
