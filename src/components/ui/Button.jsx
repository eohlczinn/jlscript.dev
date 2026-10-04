export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  type = "button",
  ...props
}) {
  const classes = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
