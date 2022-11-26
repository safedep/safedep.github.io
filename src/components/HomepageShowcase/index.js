import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Visibility',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SafeDep Gateway sits between package managers and public repositories
        giving full visibility of 3rd party software components
      </>
    ),
  },
  {
    title: 'Policy Control',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Gateway's out of box <a href='https://openpolicyagent.org' target='_blank'>OPA</a> integration
        allows development and enforcement of flexible and proactive <a href='/docs/concepts/policy-control-overview'>security policies</a>
      </>
    ),
  },
  {
    title: 'Open Source Insights',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Optional integration with <a href='/docs/concepts/raya-data-platform-overview'>Insights API</a> provides
        enriched context for an artifact (package) allowing rich policy decisions
      </>
    ),
  },
];

function ShowcaseDashboard() {
  return (
    <div className={clsx('row')}>
      <div className={clsx('col col--12')}>
        <div className="text--center">
          <img src="/img/opensearch-db1.png" className={styles.showcaseimg} />
        </div>
        <div className="text--center padding-horiz--md">
          <p>
            Gateway events can be consumed by search and visualization tools to
            build use-case specific dashboards.
          </p>
          <p>
            <a href="/docs/getting-started/quickstart"
              className="button button--primary button--lg">Quick Start</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageShowcase() {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <ShowcaseDashboard />
      </div>
    </section>
  );
}
