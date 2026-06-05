const links = [
  {
    label: "GitHub",
    href: "https://github.com/retro-slate/code-operational-intelligence",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/retroslate",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/retroslate.foundation",
  },
  {
    label: "Email",
    href: "mailto:ziahawwa@retroslate.com",
  },
];

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="brand">CodeOI</div>
        <div className="navLinks">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Code Operational Intelligence</p>

        <h1>Write logic. Generate code. Keep humans engineering.</h1>

        <p className="subtitle">
          CodeOI is a deterministic semantic programming layer that turns clean,
          structured logic into real HTML, CSS, JavaScript, and eventually more.
        </p>

        <div className="buttons">
          <a
            className="button primary"
            href="https://github.com/retro-slate/code-operational-intelligence"
            target="_blank"
          >
            View GitHub
          </a>
          <a className="button secondary" href="mailto:ziahawwa@retroslate.com">
            Contact
          </a>
        </div>
      </section>

      <section className="grid">
        <article>
          <h2>No syntax ceremony</h2>
          <p>
            CodeOI reduces punctuation noise, framework sludge, and repetitive
            implementation patterns.
          </p>
        </article>

        <article>
          <h2>Not AI codegen</h2>
          <p>
            Humans define architecture and logic. The compiler handles target
            language generation.
          </p>
        </article>

        <article>
          <h2>Visible output</h2>
          <p>
            Generated code stays readable, inspectable, and deployable using
            normal web tooling.
          </p>
        </article>
      </section>

      <section className="codeCard">
        <div className="cardHeader">example.ci</div>
        <pre>{`page: home

target: html

title1:
-"Hello CodeOI"

para:
-"No curly brackets were harmed."

end`}</pre>
      </section>
    </main>
  );
}