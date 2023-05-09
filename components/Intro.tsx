import Image from 'next/image';
import { useState } from 'react';
import pic from '../public/TM.webp';
import {Properties} from 'csstype';
import sectionStyles from '../styles/Intro.module.scss';
const { section1, imgBorder } = sectionStyles;

export default function Intro() {
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
                placeholder="blur"
                blurDataURL={pic.blurDataURL}
            />
            <div className={ imgBorder }></div>
        </section>);
}