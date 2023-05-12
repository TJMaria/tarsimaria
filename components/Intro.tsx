import Image from 'next/image';
import { useRef } from 'react';
import eyelessImg from '../public/TM_eyeless.png';
import eyeImgL from '../public/TM_eye.png';
import eyeImgR from '../public/TM_eye-r.png';
import sectionStyles from '../styles/Intro.module.scss';
import { Attributes } from 'html-react-parser/lib/attributes-to-props';
const { introSection, imgBorder } = sectionStyles;

export default function Intro() {
    const ref = useRef(null);
    let sectionElement: HTMLElement;

    function getImgStyle(): Attributes {
        return {
            position: 'absolute',
            bottom: '30%',
            left: '60%',
            borderTopRightRadius: '5%',
            borderBottomLeftRadius: '5%',
            transition: 'transform 0.3s',
        };
    }

    return (
        <section ref={ref} id="introSection" className={introSection}
            onMouseMove={e => handleMouseMove(e)}
            onMouseLeave={() => {
                sectionElement.style.setProperty('--img-x-l', '0px');
                sectionElement.style.setProperty('--img-y-l', '-0px');
                sectionElement.style.setProperty('--img-x-r', '0px');
                sectionElement.style.setProperty('--img-y-r', '-0px');
            }}>
            <h1>
                Full stack developer
            </h1>
            <h3>Angular | React | Vue | C++ | Java | NodeJs | DevOps | Test Automation</h3>
            <Image
                src={eyelessImg} alt="Picture of author/owner"
                width={300} height={300} quality={100}
                style={getImgStyle()}
                placeholder="blur"
                blurDataURL={eyelessImg.blurDataURL}
            />
            <Image
                src={eyeImgL} alt="Picture of author/owner"
                width={300} height={300} quality={100}
                style={{ ...getImgStyle(), transform: 'translate(var(--img-x-l, 0px), var(--img-y-l, 0px))' }}
                placeholder="blur"
                blurDataURL={eyeImgL.blurDataURL}
            />
            <Image
                src={eyeImgR} alt="Picture of author/owner"
                width={300} height={300} quality={100}
                style={{ ...getImgStyle(), transform: 'translate(var(--img-x-r, 0px), var(--img-y-r, 0px))' }}
                placeholder="blur"
                blurDataURL={eyeImgR.blurDataURL}
            />
            <div className={imgBorder}></div>
        </section>);

    function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
        const target = e.target as HTMLElement;
        const { width, height, left, top } = target.getBoundingClientRect();
        const mousePos = { x: e.clientX - left, y: e.clientY - top };

        const leftX = width * 0.6+122;
        const rightX = leftX + 30;
        const topY = height * 0.3 + 132;
        const bottomY = topY + 6;

        const isLeft = mousePos.x < leftX;
        const isRight = mousePos.x > rightX;

        const isAbove = mousePos.y < topY;
        const isBelow = mousePos.y > bottomY;

        // console.log('', {isLeft, isRight })

        sectionElement = sectionElement ? sectionElement : ref.current as unknown as HTMLElement;

        const followPx = 0.8;

        const x = isLeft ? -followPx : isRight ? followPx : 0;
        const y = isAbove ? -followPx : isBelow ? followPx : 0;

        const crossEyeOffset = !isLeft && !isRight ?followPx : 0;

        sectionElement.style.setProperty('--img-x-l', `${x + crossEyeOffset }px`);
        sectionElement.style.setProperty('--img-y-l', `${y}px`);

        sectionElement.style.setProperty('--img-x-r', `${x - crossEyeOffset}px`);
        sectionElement.style.setProperty('--img-y-r', `${y}px`);
    }
}