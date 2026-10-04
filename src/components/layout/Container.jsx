export default function Container({
  children,
  className = "",
  as: Tag = "div",
  ...props
}) {
  return (
    <Tag className={`container ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
