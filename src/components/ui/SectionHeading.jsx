export default function SectionHeading({ eyebrow, title, children }) {
  return <header className="section-heading"><p>{eyebrow}</p><h2>{title}</h2>{children && <div>{children}</div>}</header>;
}
