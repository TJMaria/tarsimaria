import Image from 'next/image';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import eyelessImg from '../public/TM_eyeless.webp';
import eyeImgL from '../public/TM_eye.webp';
import eyeImgR from '../public/TM_eye-r.webp';
import sectionStyles from '../styles/Intro.module.scss';

const { introSection, introTitle, introImg, introImgEyeL, introImgEyeR } = sectionStyles;

let leftXOffset: number;
let topYOffset: number;
let followPx: number;
let count = 0;

let sectionElement: HTMLElement;

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
            const size = (elementRef.current as unknown as HTMLElement).offsetWidth > 1300 ? 500 : 300;
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
                <h2>Angular | React | Vue | C++ | Java | NodeJs</h2>
            </div>
            <Image className={introImg} src={eyelessImg} alt="Picture of author/owner" priority
                width={imgSize} height={imgSize} quality={100} placeholder="blur" blurDataURL={eyelessImg.blurDataURL}
            />
            <Image className={introImgEyeL} src={eyeImgL} alt="Picture of left eye" priority
                width={imgSize} height={imgSize} quality={100} placeholder="blur" blurDataURL={eyeImgL.blurDataURL}
            />
            <Image className={introImgEyeR} src={eyeImgR} alt="Picture of right eye" priority
                width={imgSize} height={imgSize} quality={100} placeholder="blur" blurDataURL={eyeImgR.blurDataURL}
            />
        </section>);

    function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
        if (count < eyeShakeSteps.length) {
            return;
        }
        sectionElement = sectionElement ? sectionElement : elementRef.current as unknown as HTMLElement;

        const target = e.target as HTMLElement;
        const { width, height, left, top } = target.getBoundingClientRect();
        const mousePos = { x: e.clientX - left, y: e.clientY - top };

        const leftX = width * 0.6 + leftXOffset;
        const rightX = leftX + (30 / 500) * imgSize;
        const topY = (height * 0.5) - (imgSize / 2) + topYOffset;
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
const eyeShakeSteps = [...eyeShakeStepsBase, ...eyeShakeStepsBase, ...eyeShakeStepsBase]
const eyeShake = () => {
    if (count < eyeShakeSteps.length) {
        updateEyes(eyeShakeSteps[count]);
        count++;
        window.setTimeout(eyeShake, 100)
    }
}

function initEyes(ref: MutableRefObject<HTMLElement | null>) {
    sectionElement = sectionElement ? sectionElement : ref.current as unknown as HTMLElement;
    eyeShake();
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
