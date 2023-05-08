import Image from 'next/image';
import { Children, ReactNode, useState } from 'react';
import pic from '../public/TM.webp';
import { Properties } from 'csstype';
import sectionStyles from '../styles/Intro.module.scss';
const { section1, imgBorder } = sectionStyles;
import parse from 'html-react-parser';

interface ProjectInfoProps {
    title: string;
    description: string;
    role: string;
    children: ReactNode
}

export default function ProjectInfo({ title, description, role, children}: ProjectInfoProps) {

    return (
        <div>
            <h3>{title}</h3>
            {parse(description)}


            <h4>Role</h4>
            {role}

            <h4>Noteworthy contributions</h4>
            {children}
        </div>
    );
}