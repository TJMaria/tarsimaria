import Image from 'next/image';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import eyelessImg from '../public/TM_eyeless.webp';
import eyeImgL from '../public/TM_eye.webp';
import eyeImgR from '../public/TM_eye-r.webp';
import sectionStyles from '../styles/Intro.module.scss';

const { introSection, introTitle, introImg, introImgEyeL, introImgEyeR, callToAction } = sectionStyles;

let leftXOffset: number;
let topYOffset: number;
let followPx: number;
let count = 0;

let sectionElement: HTMLElement;

let mobileView = false
let elementWidth = 0;
let eyesActive = false;

export default function Intro({ isLoaded }: { isLoaded: boolean }) {
    const elementRef = useRef(null);
    const [imgSize, setImgSize] = useState(500);

    useEffect(() => {
        if (isLoaded) {
            initEyes(elementRef)
        }
    }, [isLoaded]);

    useEffect(() => {
        const handleImgSize = () => {
            elementWidth = (elementRef.current as unknown as HTMLElement).offsetWidth;
            mobileView = elementWidth <= 1200;

            const size = elementWidth > 1300 ? 500 : 300;
            leftXOffset = size / 300 * 122;
            topYOffset = size / 300 * 116;
            followPx = size / 300 * 0.6;
            setImgSize(size);
        }
        handleImgSize();
        window.addEventListener('resize', handleImgSize);

        return () => window.removeEventListener('resize', handleImgSize);
    }, []);

    return (
        <section ref={elementRef} className={introSection}
            style={{ "--img-size": `${imgSize}px` } as any}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => resetEyes()}>
            <div className={introTitle}>
                <h1>Full stack developer</h1>
                <h3>Angular | React | Vue | C++ | Java | NodeJs</h3>
            </div>
            <Image className={introImg} src={eyelessImg} alt="Picture of author/owner" priority
                width={imgSize} height={imgSize} quality={100} placeholder="blur" blurDataURL={eyelessImg.blurDataURL}
                onClick={eyeShake}
            />
            <Image className={introImgEyeL} src={eyeImgL} alt="Picture of left eye" priority
                width={imgSize} height={imgSize} quality={100} placeholder="blur" blurDataURL={eyeImgL.blurDataURL}
                onClick={eyeShake}
            />
            <Image className={introImgEyeR} src={eyeImgR} alt="Picture of right eye" priority
                width={imgSize} height={imgSize} quality={100} placeholder="blur" blurDataURL={eyeImgR.blurDataURL}
                onClick={eyeShake}
            />
            <div className={callToAction}>Click me to activate my eyes :)</div>
        </section>);

    function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
        if (!eyesActive) {
            return;
        }

        const target = e.target as HTMLElement;
        const { width, height, left, top } = target.getBoundingClientRect();
        const mousePos = { x: e.clientX - left, y: e.clientY - top };

        const leftX = (mobileView ? (elementWidth - imgSize) / 2 : width * 0.6) + leftXOffset;
        const rightX = leftX + (30 / 500) * imgSize;
        const topY = (height * (mobileView ? 0.6 : 0.5)) - (imgSize / 2) + topYOffset;
        const bottomY = topY + (6 / 500) * imgSize;

        const isLeft = mousePos.x < leftX;
        const isRight = mousePos.x > rightX;
        const isAbove = mousePos.y < topY;
        const isBelow = mousePos.y > bottomY;

        updateEyes({ isLeft, isRight, isAbove, isBelow });
    }
}

const resetEyes = () => {
    sectionElement?.style.setProperty('--img-x-l', '0px');
    sectionElement?.style.setProperty('--img-y-l', '0px');
    sectionElement?.style.setProperty('--img-x-r', '0px');
    sectionElement?.style.setProperty('--img-y-r', '-0px');
}

const eyeShakeStepsBase = [
    { isLeft: true, isRight: false, isAbove: false, isBelow: false },
    { isLeft: false, isRight: false, isAbove: true, isBelow: false },
    { isLeft: false, isRight: true, isAbove: false, isBelow: false },
    { isLeft: false, isRight: false, isAbove: false, isBelow: true },
    { isLeft: false, isRight: false, isAbove: false, isBelow: false },
    { isLeft: true, isRight: false, isAbove: false, isBelow: false }
]
const eyeShakeSteps = [...eyeShakeStepsBase, ...eyeShakeStepsBase]
const eyeShake = () => {
    if (count < eyeShakeSteps.length) {
        updateEyes(eyeShakeSteps[count]);
        count++;
        window.setTimeout(eyeShake, 100)
    } else {
        eyesActive = true;
    }
}

function initEyes(ref: MutableRefObject<HTMLElement | null>) {
    sectionElement = sectionElement ? sectionElement : ref.current as unknown as HTMLElement;
}

function updateEyes({ isLeft, isRight, isAbove, isBelow }: any) {
    const x = isLeft ? -followPx : isRight ? followPx : 0;
    const y = isAbove ? -followPx : isBelow ? followPx : 0;

    const crossEyeOffset = !isLeft && !isRight ? followPx : 0;

    sectionElement.style.setProperty('--img-x-l', `${x + crossEyeOffset}px`);
    sectionElement.style.setProperty('--img-y-l', `${y}px`);

    sectionElement.style.setProperty('--img-x-r', `${x - crossEyeOffset}px`);
    sectionElement.style.setProperty('--img-y-r', `${y}px`);
}
