import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import pic from '../public/TMiT transparent 2.png';
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

            <Link href="/">
                <Image
                    src={ pic }
                    alt="TMiT logo"
                    width={ 150 }
                    quality={ 100 }
                    style={ { marginTop: '2px', cursor: 'pointer' } }
                    priority
                />
            </Link>
        </nav>);
}