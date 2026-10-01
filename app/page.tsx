import Link from "next/link";

export default function Home() {
  return <div className="site">
    <header><Link className="wordmark" href="/" aria-label="Elliot Shohet home">es<span>.</span></Link><a href="https://github.com/elliotshohet">GitHub ↗</a></header>
    <main id="main"><p className="eyebrow">Software engineer & builder</p><h1>Elliot<br />Shohet<span>.</span></h1><p className="intro">I build things for the web.<br />Simple ideas. Thoughtful software.</p><a className="cta" href="https://github.com/elliotshohet">Explore my work <span aria-hidden="true">↗</span></a></main>
    <footer><p>A little corner of the internet.</p><p>elliotshohet.com</p></footer>
  </div>;
}
