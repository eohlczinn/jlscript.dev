export default function Button({ href, children, variant = "primary" }) {
  return <a className={`button button--${variant}`} href={href}>{children}</a>;
}
