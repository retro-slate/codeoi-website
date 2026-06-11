import Image from "next/image";

const repository =
  "https://github.com/retro-slate/code-operational-intelligence";

const socialLinks = [
  {
    label: "GitHub",
    href: repository,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/retroslate",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/retroslate.foundation",
  },
];

const principles = [
  {
    number: "01",
    title: "Logic, minus the ceremony",
    copy: "Express intent without punctuation noise, framework sludge, or repetitive implementation patterns.",
    tone: "orange",
  },
  {
    number: "02",
    title: "Deterministic by design",
    copy: "The same structured input produces the same target code. No prompts, probabilities, or surprises.",
    tone: "blue",
  },
  {
    number: "03",
    title: "Output you can own",
    copy: "Generated code stays readable, inspectable, and deployable with the tools developers already use.",
    tone: "yellow",
  },
];

const sourceCode = `page: home
target: html

title1:
-"Hello CodeOI"

para:
-"No curly brackets were harmed."

end`;

const outputCode = `<main>
  <h1>Hello CodeOI</h1>
  <p>No curly brackets were harmed.</p>
</main>`;

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#" aria-label="CodeOI home">
          <Image
            className="brandLogo"
            src="/retroslatelogopink.png"
            alt=""
            width={42}
            height={46}
            priority
          />
          <span>CodeOI</span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#principles">Why CodeOI</a>
          <a href="#workflow">How it works</a>
          <a
            className="navCta"
            href={repository}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroCopy">
          <p className="eyebrow">
            <span className="statusDot" aria-hidden="true" />
            Open-source semantic programming
          </p>

          <h1 id="hero-title">
            Write logic.
            <br />
            <span>Generate code.</span>
          </h1>

          <p className="subtitle">
            CodeOI turns clean, structured intent into real code, so humans can
            spend less time wrestling syntax and more time engineering.
          </p>

          <div className="buttons">
            <a
              className="button primary"
              href={repository}
              target="_blank"
              rel="noreferrer"
            >
              Explore the project <span aria-hidden="true">→</span>
            </a>
            <a className="button secondary" href="#workflow">
              See how it works
            </a>
          </div>

          <p className="heroNote">
            Deterministic. Inspectable. Built for the open web.
          </p>
        </div>

        <div className="heroDemo" aria-label="CodeOI input example">
          <div className="windowBar">
            <div className="windowDots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>hello.coi</span>
            <span className="windowTag">INPUT</span>
          </div>
          <pre>
            <code>{sourceCode}</code>
          </pre>
          <div className="compileStamp" aria-hidden="true">
            <span>COMPILES TO</span>
            <strong>HTML</strong>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="CodeOI qualities">
        <div>
          <span>Human-led</span>
          <i>✦</i>
          <span>Machine-readable</span>
          <i>✦</i>
          <span>Framework-agnostic</span>
          <i>✦</i>
          <span>Real code out</span>
        </div>
      </section>

      <section className="principles section" id="principles">
        <div className="sectionIntro">
          <p className="sectionLabel">Why CodeOI</p>
          <h2>Programming should start with what you mean.</h2>
          <p>
            CodeOI separates the thinking from the typing. You define the
            architecture and logic; the compiler handles target-language
            generation.
          </p>
        </div>

        <div className="principleGrid">
          {principles.map((principle) => (
            <article
              className={`principleCard ${principle.tone}`}
              key={principle.number}
            >
              <span className="cardNumber">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
              <span className="cardArrow" aria-hidden="true">
                ↘
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow section" id="workflow">
        <div className="workflowHeading">
          <p className="sectionLabel">How it works</p>
          <h2>Intent in. Clean code out.</h2>
        </div>

        <div className="codeComparison">
          <div className="codePanel inputPanel">
            <div className="panelHeading">
              <span>01 / Describe</span>
              <strong>CodeOI</strong>
            </div>
            <pre>
              <code>{sourceCode}</code>
            </pre>
          </div>

          <div className="transform" aria-hidden="true">
            <span>Compile</span>
            <strong>→</strong>
          </div>

          <div className="codePanel outputPanel">
            <div className="panelHeading">
              <span>02 / Ship</span>
              <strong>HTML</strong>
            </div>
            <pre>
              <code>{outputCode}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="closing section">
        <div>
          <p className="sectionLabel">The compiler handles syntax.</p>
          <h2>You keep the engineering.</h2>
        </div>
        <a
          className="button dark"
          href={repository}
          target="_blank"
          rel="noreferrer"
        >
          View CodeOI on GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <div>
          <a className="brand footerBrand" href="#" aria-label="CodeOI home">
            <Image
              className="brandLogo"
              src="/retroslatelogopink.png"
              alt=""
              width={42}
              height={46}
            />
            <span>CodeOI</span>
          </a>
          <p>Code Operational Intelligence</p>
        </div>

        <div className="footerLinks">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a href="mailto:ziahawwa@retroslate.com">Email ↗</a>
        </div>

        <p className="copyright">Built by RetroSlate.</p>
      </footer>
    </main>
  );
}
