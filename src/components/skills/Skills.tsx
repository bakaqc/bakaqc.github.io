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
            <img src="https://skillicons.dev/icons?i=java,javascript,ts,c,html,pug,css,sass,kotlin" />
            <br />
            <br />
            <h2 className="section__header">Frameworks & Libraries</h2>
            <img src="https://skillicons.dev/icons?i=react,nextjs,redux,hibernate,bootstrap,tailwind,nodejs,express,nestjs,prisma,mongo,mysql,postgresql" />
            <br />
            <br />
            <h2 className="section__header">Others</h2>
            <img src="https://skillicons.dev/icons?i=maven,vite,yarn,npm,pnpm,docker,firebase,supabase,postman,vscode,github,git,azure,androidstudio,figma" />
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Skills;
