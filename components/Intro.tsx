import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';
import pic from '../public/TM.webp';
import {Properties} from 'csstype';
import sectionStyles from '../styles/Intro.module.scss';
const { section1, imgBorder } = sectionStyles;

export default function Intro() {
    const [hover, setHover] = useState(true);

    function getImgStyle(): Properties {
        return {
            position: 'absolute',
            bottom: '30%',
            left: '60%',
            borderTopRightRadius: '5%',
            borderBottomLeftRadius: '5%',
            transform: hover ? 'translate(8px, -8px)' : '',
            transition: 'transform 0.1s',
            opacity: 0.15
        };
    }

    return (
        <section id="section1" className={ section1 }
                 onMouseEnter={ () => setHover(false) }
                 onMouseMove={ handleMouseMove() }
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

    function handleMouseMove(): MouseEventHandler {
        return (e: React.MouseEvent<HTMLElement>) => {
            const target = e.target as HTMLElement;
            const {width, height, left, top} = target.getBoundingClientRect();
            const mousePos = {x: e.clientX - left, y: e.clientY - top};
            
            const imageSize = 300;
            const leftX = width * 0.6 + 8;
            const rightX = leftX + imageSize;
            const topY = height * 0.3 + 8;
            const bottomY = topY + 300;


            

            const topLeft = {x: leftX, y: topY};
            const topRight = {x: rightX, y: topY};
            const bottomLeft = {x: leftX, y: bottomY};
            const bottomRight = {x: rightX, y: bottomY} ;
            
            const isLeft = mousePos.x < leftX;
            const isRight = mousePos.x > rightX;
            const isAbove = mousePos.y < topY;
            const isBelow = mousePos.y > bottomY;

            // console.log('', {isAbove, isRight, isBelow, isLeft})
            // console.log('', {isRight, x: mousePos.x, y: mousePos.y, rightX})
        };
    }
}