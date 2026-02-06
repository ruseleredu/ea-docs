import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: React.ReactNode; // Changed to ReactNode to allow links
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Link to="/utfpr/ELT72B/aulas">
        Cronograma de Aulas
      </Link>
    ),
    Svg: require('@site/static/img/online-class-svgrepo-com.svg').default,
    description: (
      <>
        As aulas teóricas serão ministradas com o uso do quadro, slides e simuladores (<Link to="/psim/intro">PSIM</Link> e <Link to="/ltspice/intro">LTspice</Link>). Apenas a nota final será lançada no sistema, as notas das provas, questionários e laboratórios serão gerenciadas no <a href="https://moodle.utfpr.edu.br/course/view.php?id=27864" target="_blank">Moodle</a>.
      </>
    ),
  },
  // <a href="https://moodle.utfpr.edu.br/course/view.php?id=27864" target="_blank">Moodle</a>
  // <a href="https://moodle.utfpr.edu.br/course/view.php?id=27864" target="_blank">"Notas"</a>.
  {
    title: (
      <Link to="/ead/intro">
        Questionários
      </Link>
    ),
    Svg: require('@site/static/img/question-and-answer-svgrepo-com.svg').default,
    description: (
      <>
        Serão disponibilizados no <a href="https://moodle.utfpr.edu.br/course/view.php?id=27864" target="_blank">Moodle</a> e deverão ser respondidos individualmente. A resolução requer o uso dos simuladores <Link to="/psim/intro">PSIM</Link> e <Link to="/ltspice/intro">LTspice</Link>. As notas serão serão automaticamente contabilizadas e disponibilizadas na aba "Notas".
      </>
    ),
  },
  {
    title: (
      <Link to="/lab/intro">
        Laboratórios
      </Link>
    ),
    Svg: require('@site/static/img/operation-svgrepo-com.svg').default,
    description: (
      <>
        As aulas práticas compõem da montagem de experimentos em laboratório das atividades listadas no <a href="https://moodle.utfpr.edu.br/course/view.php?id=27864" target="_blank">Moodle</a>. A montagem e resolução dos relatórios devem ser feitas em duplas, mas deverão ser respondidos individualmente.
      </>
    ),
  },

  /*
{
  title: (
    <Link to="/docs/intro">
      Documentação
    </Link>
  ),
  Svg: require('@site/static/img/read-svgrepo-com.svg').default,
  description: (
    <>
      Extend or customize your website layout by reusing React. Docusaurus can
      be extended while reusing the same header and footer.
    </>
  ),
},


  {
    title: (
      <Link to="/lab/intro">
        Simuladores
      </Link>
    ),
    Svg: require('@site/static/img/time-svgrepo-com.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
 
  {
    title: 'certificate',
    Svg: require('@site/static/img/certificate-svgrepo-com.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'writing',
    Svg: require('@site/static/img/writing-svgrepo-com.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
 
 
  {
    title: 'attend-class',
    Svg: require('@site/static/img/attend-class-svgrepo-com.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
 
 
 
  {
    title: 'math',
    Svg: require('@site/static/img/math-svgrepo-com.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
 
 
  {
    title: 'raise your hand',
    Svg: require('@site/static/img/raise-your-hand-svgrepo-com.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
 
  {
    title: 'creativity',
    Svg: require('@site/static/img/creativity-svgrepo-com.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
*/
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
