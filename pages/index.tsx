import Head from 'next/head';
import { useEffect, useState } from 'react';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import LoadTitle from '../components/LoadTitle';
import Projects from '../components/Projects';
import pic from '../public/tmit.webp';
import layoutStyles from '../styles/Layout.module.scss';
import Script from 'next/script';

const { container } = layoutStyles;
const NAVBAR_HEIGHT = 64;

function Home({ isMobileView }: any) {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(handleInitScrollBar(isMobileView, isLoaded), [isLoaded]);

    return (
        <div className={container}>
            <div id="scroll-progress"></div>
            <LoadTitle setIsLoaded={setIsLoaded}></LoadTitle>

            <Head>
                <title>Tarsi Maria | TMiT </title>
                <meta name="description"
                    content="Tarsi Maria's development portfolio. Tarsi Maria is a full stack developer and owner of TMiT." />
                <meta name="og:description"
                    content="Tarsi Maria's development portfolio. Tarsi Maria is a full stack developer and owner of TMiT." />
                <meta name="image" content={pic.src} />
                <meta name="og:image" content={pic.src} />
                {/* Prevent browser from remembering last scroll position */}
                <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = "manual"` }} />
        
                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-5N8PSCCVXZ"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-5N8PSCCVXZ');
                    `}
                </Script>Í
            </Head>

            <div>
                <Intro isLoaded={isLoaded}></Intro>
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

Home.getInitialProps = (ctx: any) => {
    const isMobileView = !!(ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent)
        .match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

    return { isMobileView };
};

export default Home;

function handleInitScrollBar(isMobileView: any, isLoaded: boolean) {
    return () => {
        if (isMobileView || !isLoaded) {
            return;
        }
        const scrollProgress = document.getElementById('scroll-progress') as HTMLElement;
        scrollProgress.style.top = '64px';
        scrollProgress.style.width = '6px';
        const { scrollHeight, clientHeight } = document.documentElement;
        const height = (scrollHeight) - (clientHeight) * 0.9;

        const listener = () => {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            scrollProgress.style.height = `${(clientHeight * 0.1 / height) * 100 + ((scrollTop) / height) * (100 - (NAVBAR_HEIGHT / clientHeight * 100))}%`;
        };
        listener();
        window.addEventListener('scroll', listener);

        return () => window.removeEventListener('scroll', listener);
    };
}
