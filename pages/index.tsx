import Head from 'next/head';
import { useEffect, useState } from 'react';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import LoadTitle from '../components/LoadTitle';
import Projects from '../components/Projects';
import pic from '../public/tmit.webp';
import layoutStyles from '../styles/Layout.module.scss';

const { container } = layoutStyles;

function Home({ isMobileView }: any) {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if (isMobileView) {
            return;
        }
        const scrollProgress = document.getElementById('scroll-progress') as HTMLElement;
        scrollProgress.style.width = '8px';
        const { scrollHeight, clientHeight } = document.documentElement;
        const height = scrollHeight - clientHeight * 0.8;

        const listener = () => {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            scrollProgress.style.height = `${ (clientHeight * 0.2 / height) * 100 + (scrollTop / height) * 100 }%`;
        };
        listener();
        window.addEventListener('scroll', listener);

        return () => window.removeEventListener('scroll', listener);
    });

    return (
        <div className={ container }>
            <div id="scroll-progress"></div>
            <LoadTitle setIsLoaded={ setIsLoaded }></LoadTitle>

            <Head>
                <title>Tarsi Maria | TMiT </title>
                <meta name="description"
                      content="Tarsi Maria's development portfolio. Tarsi Maria is a full stack developer and owner of TMiT."/>
                <meta name="og:description"
                      content="Tarsi Maria's development portfolio. Tarsi Maria is a full stack developer and owner of TMiT."/>
                <meta name="image" content={ pic.src }/>
                <meta name="og:image" content={ pic.src }/>
                {/* Prevent browser from remembering last scroll position */ }
                <script dangerouslySetInnerHTML={ { __html: `history.scrollRestoration = "manual"` } }/>
            </Head>

            <div>
                <Intro isLoaded={ isLoaded }></Intro>
                <Projects/>
                <Contact/>
            </div>
        </div>
    );
}

Home.getInitialProps = (ctx: any) => {
    const isMobileView = !!(ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent)
    .match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mac OS X/i);

    return { isMobileView };
};

export default Home;