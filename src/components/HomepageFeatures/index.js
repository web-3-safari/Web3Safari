import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Explore, Discover, and Learn',
        Svg: require('@site/static/img/undraw_explore.svg').default,
        description: (
            <>
            Your Tech Companion for Every Step of the Journey. With our blog as your guide, tech exploration becomes an exciting adventure. We offer insights, trends, and expert advice to empower your digital endeavors.
            </>
        ),
    },
  {
    title: 'Behind the scenes view',
    Svg: require('@site/static/img/undraw_future.svg').default,
    description: (
      <>
        Enjoy a peak behind the courtain of blockchain validation with our blogs, be it us talking about monitoring or about hardware, we are dedicated to give you all things web3.
      </>
    ),
  },
  {
    title: 'Conversations with the Cosmos',
    Svg: require('@site/static/img/undraw_helmet.svg').default,
    description: (
      <>
        Our mission is to journey through the vast universe of ideas, charting the territories of philosophy, science, and knowledge. Join us on this intellectual adventure as we seek wisdom and understanding beyond the boundaries of conventional thinking.
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
