import { ReactNode, useRef, useEffect, useState } from 'react';

import styles from '../styles/ProjectInfo.module.scss';
import parse from 'html-react-parser';

interface ProjectInfoProps {
    title: string;
    description: string;
    role: string;
    children: ReactNode
}

const colors = ['#085F83', '#20263D', '#323E48', '#3834F2', '#66429C', '#685E5F', '#7A2129', '#818061', '#83A6F6', '#AAC7AF', 
'#B1C3B4', '#C0D5DB', '#CBE684', '#CFD3D6', '#D7C1C1', '#EAC629', '#EC4A26', '#F1CB92', '#F23465', '#F4971A', '#F4BEBA', '#FD715D']


export default function ProjectInfo({ title, description, role, children }: ProjectInfoProps) {
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
                let timeout = 200;
                const indices = Array.from(html.children).map(() => ++i).sort(() => 0.5 - Math.random());
                indices.forEach(index => window.setTimeout(() => {
                    const child = html.children[index] as HTMLElement;
                    child.setAttribute('data-animate', '');
                    const amount = `${child.getAttribute('data-amount')}px`;
                    // child.style.borderLeft = child.getAttribute('data-amount') + `px solid ${child.getAttribute('data-color')}`;
                    child.style.borderLeft = amount + ` solid ${getRandomColor()}`;
                    console.log('amount', amount);
                }, timeout += 200));
            }
        })
        ref.current && observer.observe(ref.current);
    }, []);

    function getRandomColor() {
        let color = colors[3];
        // let color = null;
        while(true && colorIndex.length !== colors.length){
            const index = Math.floor(Math.random() * colors.length);
            if(!colorIndex.includes(index)) {
                colorIndex.push(index);
                color = colors[index];
                break;
            }
        }
        console.log('color', color);
        return color;
    }

    return (
        <div className={styles.projectContainer}>
            <div className={`${styles.projectInfo} ${styles.even}`}>
                <h3>{title}</h3>
                {parse(description)}

                <h4>Role</h4>
                {role}

                <h4>Noteworthy contributions</h4>
                {children}
            </div>
            <div>
                <h2>Stack used</h2>
                <div ref={ref}>
                    <p className={styles.stack} data-color="green" data-amount="70" data-value="Angular"></p>
                    <p className={styles.stack} data-color="blue" data-amount="20" data-value="Kubernetes"></p>
                    <p className={styles.stack} data-color="red" data-amount="30" data-value="Cypress"></p>
                </div>
            </div>
        </div>
    );
}