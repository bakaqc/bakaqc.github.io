import "./FlowLine.scss";

interface Node {
  name: string;
  meta: string;
  /** The core of the system — gets the "signal" accent. Exactly one. */
  core?: boolean;
}

/**
 * The integration path actually owned day to day, rendered as typography
 * rather than a canvas. Replaces the old ServiceMonitor: every string here is
 * a real system or protocol, nothing is generated, nothing animates.
 *
 * Semantic <ol> (not aria-hidden) so the hero's most differentiating content
 * is readable by assistive tech and findable with in-page search.
 */
const NODES: Node[] = [
  { name: "Power Apps", meta: "React + Power SDK" },
  { name: "Azure Functions", meta: "TypeScript · v4" },
  { name: "Dataverse", meta: "Web API v9.2", core: true },
  { name: "FAST Accounting", meta: "MD5-signed form POST" },
];

const FlowLine = () => {
  return (
    <div className="flowline">
      <p className="flowline__caption">
        <span aria-hidden="true">//</span> the pipeline I own, end to end
      </p>

      <ol className="flowline__track" aria-label="Integration path I own">
        {NODES.map((n) => (
          <li
            key={n.name}
            className={`flowline__node ${
              n.core ? "flowline__node--core" : ""
            }`}
          >
            <span className="flowline__name">{n.name}</span>
            <span className="flowline__meta">{n.meta}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FlowLine;
