import Link from 'next/link';
import { useEffect, useState } from 'react';
import navStyles from '../styles/Nav.module.css';

let navElement: HTMLElement | null;

export default function Nav() {

    const [_hover, setHover] = useState(false);

    const handleScroll = () => {
        navElement = navElement ? navElement : document.getElementById('nav');
        setHover(!!(window.scrollY > 0 && navElement));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <nav id={ 'nav' } className={ `${ navStyles.nav } ${ _hover ? navStyles.hover : '' }` }>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>);
}