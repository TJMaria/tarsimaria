import Head from 'next/head';
import styles from '../styles/Layout.module.scss';
import sectionStyles from '../styles/Section.module.scss';
import Intro from '../components/Intro';

const { container } = styles;
const { section2} = sectionStyles;

export default function Home() {

    return (
        <div className={ container }>
            <Head>
                <title>Tarsi Maria | TMiT </title>
                <meta name="keywords" content="web development, programming, Javascript, Angular, React, Nextjs"/>
            </Head>

            <div>
                <Intro></Intro>
                <section id="section2" className={ section2 }>
                    <h1 className={ styles.title }>
                    </h1>
                </section>
            </div>
        </div>
    );
}
