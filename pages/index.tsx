import { Properties } from 'csstype';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import pic from '../public/TM.webp';
import styles from '../styles/Layout.module.css';
import sectionStyles from '../styles/Section.module.css';

const { container } = styles;
const { section1, section2, section3, imgBorder } = sectionStyles;

export default function Home() {
    const [hover, setHover] = useState(false);

    function getImgStyle(): Properties {
        return {
            position: 'absolute',
            bottom: '20%',
            left: '60%',
            borderTopRightRadius: '5%',
            borderBottomLeftRadius: '5%',
            transform: hover ? 'translate(8px, -8px)' : '',
            transition: 'transform 0.1s'
        };
    }

    return (
        <div className={ container }>
            <Head>
                <title>Tarsi Maria | TMiT </title>
                <meta name="keywords" content="web development, programming, Javascript, Angular, React, Nextjs"/>
                {/*<link rel="icon" href="/favicon.ico" />*/ }
            </Head>

            <div>
                <section id="section1" className={ section1 }>
                    <h1 className={ styles.title }>
                        Full stack developer
                    </h1>
                    <Image
                        onMouseEnter={ () => setHover(true) }
                        onMouseLeave={ () => setHover(false) }
                        src={ pic }
                        alt="Picture of author/owner"
                        width={ 300 }
                        height={ 300 }
                        quality={ 100 }
                        style={ getImgStyle() }
                        priority
                    />
                    <div className={ imgBorder }></div>
                </section>
                <section id="section2" className={ section2 }>
                    <h1 className={ styles.title }>
                    </h1>
                </section>
                <section id="section3" className={ section3 }>
                    <h1 className={ styles.title }>
                    </h1>
                </section>
            </div>
            {/*<main className={styles.main}>*/ }


            {/*  <p className={styles.description}>*/ }
            {/*    Get started by editing{' '}*/ }
            {/*    <code className={styles.code}>pages/index.tsx</code>*/ }
            {/*  </p>*/ }

            {/*  <div className={styles.grid}>*/ }
            {/*    <a href="https://nextjs.org/docs" className={styles.card}>*/ }
            {/*      <h2>Documentation &rarr;</h2>*/ }
            {/*      <p>Find in-depth information about Next.js features and API.</p>*/ }
            {/*    </a>*/ }

            {/*    <a href="https://nextjs.org/learn" className={styles.card}>*/ }
            {/*      <h2>Learn &rarr;</h2>*/ }
            {/*      <p>Learn about Next.js in an interactive course with quizzes!</p>*/ }
            {/*    </a>*/ }

            {/*    <a*/ }
            {/*      href="https://github.com/vercel/next.js/tree/canary/examples"*/ }
            {/*      className={styles.card}*/ }
            {/*    >*/ }
            {/*      <h2>Examples &rarr;</h2>*/ }
            {/*      <p>Discover and deploy boilerplate example Next.js projects.</p>*/ }
            {/*    </a>*/ }

            {/*    <a*/ }
            {/*      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/ }
            {/*      target="_blank"*/ }
            {/*      rel="noopener noreferrer"*/ }
            {/*      className={styles.card}*/ }
            {/*    >*/ }
            {/*      <h2>Deploy &rarr;</h2>*/ }
            {/*      <p>*/ }
            {/*        Instantly deploy your Next.js site to a public URL with Vercel.*/ }
            {/*      </p>*/ }
            {/*    </a>*/ }
            {/*  </div>*/ }
            {/*</main>*/ }

            {/*<footer className={styles.footer}>*/ }
            {/*  <a*/ }
            {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/ }
            {/*    target="_blank"*/ }
            {/*    rel="noopener noreferrer"*/ }
            {/*  >*/ }
            {/*    Powered by{' '}*/ }
            {/*    <span className={styles.logo}>*/ }
            {/*      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/ }
            {/*    </span>*/ }
            {/*  </a>*/ }
            {/*</footer>*/ }
        </div>
    );
}
