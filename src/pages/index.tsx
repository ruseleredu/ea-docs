import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://moodle.utfpr.edu.br/course/view.php?id=27864"
          >
            Moodle 🌎
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/ead/intro"
          >
            EaD 📝
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/lab/intro"
          >
            LABs 📝
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/psim/intro"
          >
            PSIM 📝
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/ltspice/intro"
          >
            LTspice 📝
          </Link>

        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentação da disciplina de eletrônica analógica com docusaurus.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
