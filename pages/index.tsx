import Head from 'next/head';
import layoutStyles from '../styles/Layout.module.scss';
import Intro from '../components/Intro';
import pic from '../public/tmit.webp';
import LoadTitle from '../components/LoadTitle';
import { useState } from 'react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const { container } = layoutStyles;

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={container}>
            <LoadTitle setIsLoaded={setIsLoaded}></LoadTitle>

            <Head>
                <title>Tarsi Maria | TMiT </title>
                <meta name="description" content="Tarsi Maria's development portfolio. Tarsi Maria is a full stack developer and owner of TMiT." />
                <meta name="og:description" content="Tarsi Maria's development portfolio. Tarsi Maria is a full stack developer and owner of TMiT." />
                <meta name="image" content={pic.src} />
                <meta name="og:image" content={pic.src} />
                {/* Prevent browser from remembering last scroll position */}
                {/* <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = "manual"` }} /> */}
            </Head>

            <div>
                <Intro isLoaded={isLoaded}></Intro>
                <Projects/>
                <Contact/>
            </div>
        </div>
    );
}
