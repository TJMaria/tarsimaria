import Link from 'next/link';
import { useEffect, useState } from 'react';
import navStyles from '../styles/Nav.module.css';
import Image from 'next/image';
import pic from '../public/TMiT transparent 2.png';

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

            <Image
                src={ pic }
                alt="TMiT logo"
                width={ 150 }
                quality={ 100 }
                style={ {marginTop: '2px'} }
                priority
            />
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