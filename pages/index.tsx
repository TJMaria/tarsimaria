import Head from 'next/head';
import styles from '../styles/Layout.module.scss';
import sectionStyles from '../styles/Section.module.scss';
import Intro from '../components/Intro';
import ProjectInfo from '../components/ProjectInfo';

const { container } = styles;
const { section2 } = sectionStyles;

export default function Home() {

    return (
        <div className={container}>
            <Head>
                <title>Tarsi Maria | TMiT </title>
                <meta name="keywords" content="web development, programming, Javascript, Angular, React, NextJS" />
            </Head>

            <div>
                <Intro></Intro>
                <section id="section2" className={section2}>
                    <h1 className={styles.title}>
                        Recent work
                    </h1>

                    <ProjectInfo
                        title="Movares / RIGD Loxia"
                        description="An engineering company that is responsible for creating and maintaining the design of the dutch railways.
                            Based on the needs, the designs determine what hardware needs to go where. The hardware consist of safety systems, signals, switches etc., all used to manage traintraffic.
                            The 'designs' are used by multiple clients for traffic management and to visualize the railways and traffic."
                        role="Full stack developer / Frontend Architect"
                    >
                        <ul>
                            <li>Breathing new life into the frontend component-library</li>
                            <li>Improving UI/UI designs</li>
                            <li>Improving performance in a complex visualization webapp using GeoJson to visualize the complete rail-infrastructure using Leaflet</li>
                            <ul>
                                <li>Analyzing and redesigning API's for more efficient data gathering</li>
                                <li>Changing UX/UI to give the user better feedback as to not perceive the app as slow</li>
                                <li>Reduced loading the complete dataset from 3 minutes to 10 seconds</li>
                                <li>Removed latency during zooming and panning, by delaying and only rendering what is in view</li>
                            </ul>
                            <li>Introducing visual regression testing</li>
                            <li>Setting up workshop to improve frontend development knowledge and UI design</li>
                        </ul>
                    </ProjectInfo>

                    <ProjectInfo
                        title="NS - Nederlandse Spoorwegen (Dutch Railways)"
                        description="NS is the main provider for public transport on the dutch Railway system. One of the main responsibilities,
                        next to offering public transport, is the creating the planning and timetables for all the traffic routes in the country.
                        <br><i>The main project consisted of creating a visual diagram depicting the planned train traffic over time. The diagram would be used during planning of timetables, to adjust and optimize planning and prevent conflicting routes</i>"
                        role="Lead Full stack developer"
                    >
                        <ul>
                            <li>Creating a new Full stack development team</li>
                            <li>Setting up component-library</li>
                            <li>As a team, setting the standards for all new webapp projects</li>
                            <li>As a team, leading the way for in the migration to a containerized DevOps environment using OpenShift</li>
                            <li>Together with a team of architects and lead developers, creating a migration strategy from a monolithic system to a (micro) service architecture</li>
                            <li>Creating a component for custom SVG tooltip, capable of detecting all (layered) elements under the cursor</li>
                        </ul>
                    </ProjectInfo>
                </section>
            </div>
        </div>
    );
}
