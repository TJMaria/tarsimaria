import Image from 'next/image';
import { useRef } from 'react';
import eyelessImg from '../public/TM_eyeless.png';
import eyeImgL from '../public/TM_eye.png';
import eyeImgR from '../public/TM_eye-r.png';
import sectionStyles from '../styles/Intro.module.scss';
import { Attributes } from 'html-react-parser/lib/attributes-to-props';
const { introSection, introTitle } = sectionStyles;

const IMG_SIZE = 400;
const leftXOffset = IMG_SIZE / 300 * 122;
const topYOffset = IMG_SIZE / 300 * 116;
const followPx = IMG_SIZE / 300 * 0.6;
let count = 0;

let sectionElement: HTMLElement;

export default function Intro() {
    const ref = useRef(null);

    return (
        <section ref={ref} className={introSection}
            onMouseEnter={ () => {
                sectionElement = sectionElement ? sectionElement : ref.current as unknown as HTMLElement;
                eyeShake();
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => resetEyes()}>
            <div className={introTitle}>
                <h1>Full stack developer</h1>
                <h3>Angular | React | Vue | C++ | Java | NodeJs | DevOps</h3>
            </div>
            <Image src={eyelessImg} alt="Picture of author/owner"
                width={IMG_SIZE} height={IMG_SIZE} quality={100} style={getImgStyle()}
                placeholder="blur" blurDataURL={eyelessImg.blurDataURL}
            />
            <Image src={eyeImgL} alt="Picture of left eye"
                width={IMG_SIZE} height={IMG_SIZE} quality={100} style={leftEyeImgStyle()}
                placeholder="blur" blurDataURL={eyeImgL.blurDataURL}
            />
            <Image src={eyeImgR} alt="Picture of right eye"
                width={IMG_SIZE} height={IMG_SIZE} quality={100} style={rightEyeImgStyle()}
                placeholder="blur" blurDataURL={eyeImgR.blurDataURL}
            />
        </section>);

    function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
        if (count < eyeShakeSteps.length) {
            return;
        }
        
        const target = e.target as HTMLElement;
        const { width, height, left, top } = target.getBoundingClientRect();
        const mousePos = { x: e.clientX - left, y: e.clientY - top };

        const leftX = width * 0.6 + leftXOffset;
        const rightX = leftX + 30;
        const topY = (height * 0.5) - imgMiddle() + topYOffset;
        const bottomY = topY + 6;

        const isLeft = mousePos.x < leftX;
        const isRight = mousePos.x > rightX;
        const isAbove = mousePos.y < topY;
        const isBelow = mousePos.y > bottomY;

        sectionElement = sectionElement ? sectionElement : ref.current as unknown as HTMLElement;

        updateEyes({isLeft, isRight, isAbove, isBelow});
    }
}

const imgMiddle = () => IMG_SIZE / 2;
const rightEyeImgStyle = () => ({ ...getImgStyle(), transform: 'translate(var(--img-x-r, 0px), var(--img-y-r, 0px))' });
const leftEyeImgStyle = () => ({ ...getImgStyle(), transform: 'translate(var(--img-x-l, 0px), var(--img-y-l, 0px))' });
const getImgStyle = (): Attributes => ({ position: 'absolute', bottom: `calc(50% - ${imgMiddle()}px)`, left: '60%', borderRadius: '25%', transition: 'transform 0.3s', });
const resetEyes = () => {
    sectionElement.style.setProperty('--img-x-l', '0px');
    sectionElement.style.setProperty('--img-y-l', '-0px');
    sectionElement.style.setProperty('--img-x-r', '0px');
    sectionElement.style.setProperty('--img-y-r', '-0px');
}

const eyeShakeStepsBase = [
    {isLeft: true, isRight: false, isAbove: false, isBelow: false},
    {isLeft: false, isRight: false, isAbove: true, isBelow: false},
    {isLeft: false, isRight: true, isAbove: false, isBelow: false},
    {isLeft: false, isRight: false, isAbove: false, isBelow: true},
    {isLeft: false, isRight: false, isAbove: false, isBelow: false},
]
const eyeShakeSteps = [...eyeShakeStepsBase, ...eyeShakeStepsBase, ...eyeShakeStepsBase]
const eyeShake = () => {
    if (count < eyeShakeSteps.length) {
        updateEyes(eyeShakeSteps[count]);
        count++;
        window.setTimeout(eyeShake, 100)
    }
}

function updateEyes({isLeft, isRight, isAbove, isBelow} : any) {
    const x = isLeft ? -followPx : isRight ? followPx : 0;
    const y = isAbove ? -followPx : isBelow ? followPx : 0;

    const crossEyeOffset = !isLeft && !isRight ? followPx : 0;

    sectionElement.style.setProperty('--img-x-l', `${x + crossEyeOffset}px`);
    sectionElement.style.setProperty('--img-y-l', `${y}px`);

    sectionElement.style.setProperty('--img-x-r', `${x - crossEyeOffset}px`);
    sectionElement.style.setProperty('--img-y-r', `${y}px`);
}
