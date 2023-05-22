import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import pic from '../public/tmit.webp';
import navStyles from '../styles/Nav.module.scss';

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
        <nav id={'nav'} className={`${navStyles.nav} ${_hover ? navStyles.hover : ''}`}>
            <Link href="/">
                <Image
                    src={pic}
                    alt="TMiT logo"
                    width={200}
                    quality={100}
                    style={{ marginTop: '2px', cursor: 'pointer' }}
                    priority
                />
                <svg id={navStyles.github} xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" onClick={() => window.open('https://github.com/TJMaria/tarsimaria', '_blank', 'noreferrer')}>
                    <path d="M34.82,.68C15.83,.68,0,16.15,0,35.5c0,14.77,9.5,28.14,23.92,33.07,1.06,.35,2.11,0,2.46-1.06v-6.68c-9.85,2.11-11.96-4.57-11.96-4.57-.7-2.11-2.11-3.87-3.87-4.92-2.81-2.46,.35-2.46,.35-2.46,2.11,.35,4.22,1.76,5.63,3.52,1.76,3.52,6.33,4.92,9.85,3.17h.35c.35-1.76,1.06-3.17,2.11-4.57-8.09-.7-16.18-3.87-16.18-16.88,0-3.52,1.41-6.68,3.52-9.5-1.06-3.17-1.06-6.33,.35-9.5,0,0,2.81-.7,9.85,3.52,2.81-.35,5.63-.7,8.44-.7,3.17,0,5.98,.35,8.79,1.41,6.68-4.57,9.85-3.52,9.85-3.52,1.06,2.81,1.41,6.33,.35,9.5,2.11,2.46,3.52,5.98,3.52,9.5,0,13.72-8.09,16.18-15.83,16.88,1.76,1.76,2.46,3.87,2.46,6.33v9.5c0,.7,.35,2.11,2.46,1.76,14.07-4.92,23.57-18.29,23.57-33.07C69.65,16.5,54.17,1.03,34.82,.68Z"></path>
                </svg>
            </Link>
        </nav>);
}