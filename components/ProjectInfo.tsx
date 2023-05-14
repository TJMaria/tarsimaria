import { ReactNode, useRef, useEffect, useState } from 'react';

import styles from '../styles/ProjectInfo.module.scss';
import parse from 'html-react-parser';

interface ProjectInfoProps {
    title: string;
    description: string;
    role: string;
    left?: boolean;
    stack: { name: string; amount: number }[]
    children: ReactNode
}

const colors = ['#085F83AB', '#20263DAB', '#323E48AB', '#3834F2AB', '#66429CAB', '#685E5FAB', '#7A2129AB', '#818061AB', '#83A6F6AB', '#AAC7AFAB',
    '#B1C3B4AB', '#C0D5DBAB', '#CBE684AB', '#CFD3D6AB', '#D7C1C1AB', '#EAC629AB', '#EC4A26AB', '#F1CB92AB', '#F23465AB', '#F4971AAB', '#F4BEBAAB', '#FD715D']

const TIMEOUT = 200;

export default function ProjectInfo({ title, description, role, stack, left, children }: ProjectInfoProps) {
    let colorIndex: number[] = [];

    const ref = useRef(null);
    let hasBeenSeen = false;
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            const html = ref.current as unknown as HTMLElement;
            if (!hasBeenSeen && entry.isIntersecting) {
                hasBeenSeen = true;
                colorIndex = []
                let i = -1
                let timeout = TIMEOUT;
                const indices = Array.from(html.children).map(() => ++i).sort(() => 0.5 - Math.random());
                indices.forEach(index => window.setTimeout(() => {
                    const child = html.children[index] as HTMLElement;
                    const amount = Number(child.getAttribute('data-amount')); // todo Responsive?
                    child.style.borderLeft = `calc(${amount}px * var(--stack-factor)) solid ${getRandomColor()}`;
                }, timeout += TIMEOUT));
            }
        })
        ref.current && observer.observe(ref.current);
    }, []);

    function getRandomColor() {
        while (true && colorIndex.length !== colors.length) {
            const index = Math.floor(Math.random() * colors.length);
            if (!colorIndex.includes(index)) {
                colorIndex.push(index);
                return colors[index];
            }
        }
        return colors[0];
    }

    return (
        <div className={`${styles.projectContainer} ${left ? styles.projectContainerLeft : styles.projectContainerRight}`}>
            <div className={`${styles.projectInfo} ${styles.even}`}>
                <h3>{title}</h3>
                {parse(description)}

                <h4>Role</h4>
                {role}

                <h4>Noteworthy contributions</h4>
                {children}
            </div>
            <div className={styles.stack}>
                <div ref={ref}>
                    {stack.map(item => <p key={item.name} className={styles.stackItem} data-amount={item.amount}>{item.name}</p>)}
                </div>
            </div>
        </div>
    );
}