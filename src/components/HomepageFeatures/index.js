import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Visibility',
    Svg: require('@site/static/img/index-obs1.svg').default,
    description: (
      <>
        SafeDep Gateway sits between package managers and public repositories
        giving full visibility of 3rd party software components
      </>
    ),
  },
  {
    title: 'Policy Control',
    Svg: require('@site/static/img/undraw_version_control_re_mg66.svg').default,
    description: (
      <>
        Gateway's out of box <a href='https://openpolicyagent.org' target='_blank'>OPA</a> integration
        allows development and enforcement of flexible and proactive <a href='/docs/concepts/policy-control-overview'>security policies</a>
      </>
    ),
  },
  {
    title: 'Open Source Insights',
    Svg: require('@site/static/img/undraw_dashboard_re_3b76.svg').default,
    description: (
      <>
        Optional integration with <a href='/docs/concepts/raya-data-platform-overview'>Insights API</a> provides
        enriched context for an artifact (package) allowing rich policy decisions
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
