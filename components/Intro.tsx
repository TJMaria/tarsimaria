import Image from 'next/image';
import { useRef } from 'react';
import pic from '../public/TM.webp';
import { Properties } from 'csstype';
import sectionStyles from '../styles/Intro.module.scss';
const { introSection, imgBorder } = sectionStyles;

export default function Intro() {
    const ref = useRef(null);
    let sectionElement: HTMLElement;

    function getImgStyle(): Properties {
        return {
            position: 'absolute',
            bottom: '30%',
            left: '60%',
            borderTopRightRadius: '5%',
            borderBottomLeftRadius: '5%',
            transform: 'translate(var(--img-x, 0px), var(--img-y, 0px))',
            transition: 'transform 0.3s', 
            pointerEvents: 'none'
        };
    }

    return (
        <section ref={ref} id="introSection" className={introSection}
            onMouseMove={e => handleMouseMove(e)}
            onMouseLeave={() => {
                sectionElement.style.setProperty('--img-x', '8px');
                sectionElement.style.setProperty('--img-y', '-8px');
            }}>
            <h1>
                Full stack developer
            </h1>
            <h3>Angular | React | Vue | C++ | Java | NodeJs | DevOps | Test Automation</h3>
            <Image
                src={pic}
                alt="Picture of author/owner"
                width={300}
                height={300}
                quality={100}
                style={getImgStyle()}
                placeholder="blur"
                blurDataURL={pic.blurDataURL}
            />
            <div className={imgBorder}></div>
        </section>);

    function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
            const target = e.target as HTMLElement;
            const { width, height, left, top } = target.getBoundingClientRect();
            const mousePos = { x: e.clientX - left, y: e.clientY - top };

            const imageSize = 300;
            const leftX = width * 0.6;
            const rightX = leftX + imageSize;
            const topY = height * 0.3;
            const bottomY = topY + 300;

            const isLeft = mousePos.x < leftX;
            const isRight = mousePos.x > rightX;
            const isAbove = mousePos.y < topY;
            const isBelow = mousePos.y > bottomY;

            sectionElement = sectionElement ? sectionElement : ref.current as unknown as HTMLElement;

            const x = isLeft ? -8 : isRight ? 8 : 0;
            const y = isAbove ? -8 : isBelow ? 8 : 0;

            sectionElement.style.setProperty('--img-x', `${x}px`);
            sectionElement.style.setProperty('--img-y', `${y}px`);
    }
}