import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { TutorialCardElement } from '@site/src/components/TutorialCard';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={require("@site/static/img/TTT_logo.png").default} alt={siteConfig.title}  />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link sl
            className={`button button--secondary button--lg ${styles.button}`}
            href="vcc://vpm/addRepo?url=https%3A%2F%2Fvpm.rs64.net%2Fvpm.json">
            Download-VPM
          </Link>

          <Link
            className={`button button--secondary button--lg ${styles.button}`}
            to="/docs/Tutorial/">
            チュートリアル
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`ホーム`}
      description="TexTransTool Document Home">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className={styles.featuresContainer}>
            <TutorialCardElement />
          </div>
        </section>
      </main>
    </Layout>
  );
}
