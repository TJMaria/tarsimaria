import { useState } from 'react';
import styles from '../styles/LoadTitle.module.scss';


export default function LoadTitle({ setIsLoaded }: { setIsLoaded: (isLoaded: boolean) => void }) {
    const [showText, setShowText] = useState(false);
    const [fadeComponent, setFadeComponent] = useState(false);
    const [showComponent, setShowComponent] = useState(true);
    setTimeout(() => {
        setFadeComponent(true)
        setTimeout(() => {
            setShowComponent(false);
            setIsLoaded(true);
        }, 500)
    }, 2000);
    setTimeout(() => setShowText(true), 1500);

    return (
        showComponent ?
            <div className={`${styles.loadTitle} ${fadeComponent ? styles.animateComponent : ''}`}>
                <div className={`${showText ? styles.animate : ''} ${styles.name} `}>Tarsi Maria </div>
                <div className={`${showText ? styles.animate : ''} ${styles.company}`}>| TMiT</div>
            </div>
            : null
    );
}