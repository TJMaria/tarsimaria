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
    const [hover, setHover] = useState(true);

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
            </Head>

            <div>
                <section id="section1" className={ section1 }
                         onMouseEnter={ () => setHover(false) }
                         onMouseLeave={ () => setHover(true) }>
                    <h1>
                        Full stack developer
                    </h1>
                    <h3>Angular | React | Vue | C++ | Java | NodeJs | DevOps | Test Automation</h3>
                    <Image
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
            </div>
        </div>
    );
}
