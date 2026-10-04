export default function SectionHeading({
  eyebrow,
  title,
  children,
  as = "h2",
  id,
}) {
  const Title = as;

  return (
    <header className="section-heading">
      {eyebrow && <p>{eyebrow}</p>}
      <Title id={id}>{title}</Title>
      {children && <div className="section-heading__content">{children}</div>}
    </header>
  );
}
