import { ReactNode, useRef, useEffect, useState } from 'react';

import styles from '../styles/ProjectInfo.module.scss';
import parse from 'html-react-parser';

interface ProjectInfoProps {
    title: string;
    description: string;
    role: string;
    children: ReactNode
}

export default function ProjectInfo({ title, description, role, children }: ProjectInfoProps) {
    const ref = useRef(null);
    const hasBeenSeen = false;
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            const html = ref.current as unknown as HTMLElement;
            if (!hasBeenSeen && entry.isIntersecting) {
                let i = -1
                let timeout = 200;
                const indices = Array.from(html.children).map(() => ++i).sort(() => 0.5 - Math.random());
                indices.forEach(index => window.setTimeout(() => html.children[index].setAttribute('data-animate', ''), timeout += 200));
            }
        })
        if (ref.current) {
            observer.observe(ref.current);
        }
    }, []);

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
            <div className={styles.stack}>
                <h2>Stack used</h2>
                <div ref={ref}>
                    <p className="stack" data-amount="70">Angular</p>
                    <p className="stack" data-amount="20">Kubernetes</p>
                    <p className="stack" data-amount="30">Cypress</p>
                </div>
            </div>
        </div>
    );
}