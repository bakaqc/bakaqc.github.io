import type { ReactNode } from "react";
import "./SectionHeader.scss";

interface SectionHeaderProps {
  /** two-digit index e.g. "01" */
  index?: string;
  /** path shown after `$ cd ./` */
  path: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

/**
 * Shared section header rendering a terminal-style eyebrow
 * (`$ cd ./experience`), an optional module index, the title and subtitle.
 */
const SectionHeader = ({ index, path, title, subtitle, className }: SectionHeaderProps) => (
  <header className={`sectionhead ${className ?? ""}`}>
    <div className="sectionhead__eyebrow">
      <span className="sectionhead__prompt">$</span>
      <span className="sectionhead__cmd">cd ./{path}</span>
      {index && <span className="sectionhead__index">module {index}</span>}
    </div>
    <h2 className="section__title sectionhead__title">{title}</h2>
    {subtitle && <p className="section__subtitle sectionhead__subtitle">{subtitle}</p>}
  </header>
);

export default SectionHeader;
