import ProjectInfo from './atoms/ProjectInfo';
import layoutStyles from '../styles/Layout.module.scss';

const HQ_STACK = [
    { name: 'VueJS', amount: 100 },
    { name: 'JavaScript/TypeScript', amount: 100 },
    { name: 'WebComponents', amount: 50 },
    { name: 'CSS/SCSS', amount: 80 }
];

const WEDDING_STACK = [
    { name: 'JavaScript', amount: 100 },
    { name: 'CSS/SCSS', amount: 80 },
    { name: 'Firebase FireStore', amount: 60 },
    { name: 'Firebase Auth', amount: 40 },
    { name: 'Figma', amount: 40 }
];

const LOXIA_STACK = [
    { name: 'Angular', amount: 100 },
    { name: 'Java', amount: 60 },
    { name: 'JavaScript/TypeScript', amount: 100 },
    { name: 'Leaflet', amount: 70 },
    { name: 'CSS/SCSS', amount: 80 },
    { name: 'Kubernetes', amount: 70 },
    { name: 'Helm', amount: 15 },
    { name: 'Azure cloud', amount: 40 },
    { name: 'Sonar', amount: 30 },
    { name: 'CI/CD', amount: 20 },
    { name: 'Cypress', amount: 35 },
    { name: 'RxJs', amount: 50 },
    { name: 'NgRx & NgXs', amount: 50 },
    { name: 'ELK', amount: 20 }
]

const NS_STACK = [
    { name: 'Angular', amount: 60 },
    { name: 'Java', amount: 100 },
    { name: 'NodeJs', amount: 25 },
    { name: 'JavaScript/TypeScript', amount: 60 },
    { name: 'D3js', amount: 20 },
    { name: 'CSS/SCSS', amount: 30 },
    { name: 'Sonar', amount: 30 },
    { name: 'Openshift', amount: 70 },
    { name: 'Docker', amount: 50 },
    { name: 'CI/CD', amount: 40 },
    { name: 'Applitools', amount: 10 },
    { name: 'OAuth 2.0', amount: 30 },
    { name: 'WebdriverIO', amount: 35 },
    { name: 'Wiremock', amount: 35 },
    { name: 'Hibernate', amount: 20 },
    { name: 'MyBatis', amount: 20 },
    { name: 'RxJs', amount: 20 },
    { name: 'NgXs', amount: 20 },
    { name: 'Nginx', amount: 20 }
]
export default function Projects() {

    return (
        <section>
            <h2 className={layoutStyles.title}> Recent projects </h2>

            <ProjectInfo
                title="HQ Rental Software"
                description="HQ rental software is currently the <a href='https://www.investopedia.com/best-car-rental-software-5091848' target='_blank'>leading solution</a> for (car) rental companies. HQ offers an all-in-one solution including:
                        <ul>
                            <li>Online reservations</li>
                            <li>Fleet management</li>
                            <li>Self-service car rental</li>
                            <li>Telematics</li>
                        </ul>
                        "
                left={true}
                role="Frontend developer"
                stack={HQ_STACK}
            >
                Creating a new widget for online reservations that are connected to the fleet management system. The widget gives clients the freedom to customize the styling with ease.
            </ProjectInfo>

            <ProjectInfo
                title="Personal wedding website"
                description="My wife (an experienced designer) and I got married in 2022. We decided to create our own wedding website from scratch. <br>
                I was experienced in making web apps using javascript frameworks, but I had never created a complex website using plain Vanilla JavaScript.
                In the end, I fell in love even more with existing frameworks, as I basically ended up making my own for this website.
                <br><br> End result:  <a href='https://www.deniseandtarsi.com/' target='_blank'/>www.deniseandtarsi.com</a>"
                role="Frontend developer | Groom"
                stack={WEDDING_STACK}
            >
                <ul>
                    <li>Authentication/Authorization using Firebase</li>
                    <li>Setting up RSVPs for the different events</li>
                    <li>Creating the complete UI from scratch</li>
                    <li>Surviving the process of making a complete custom and responsive website that works well on all browsers</li>
                </ul>
            </ProjectInfo>

            <ProjectInfo
                title="Movares | RIGD Loxia"
                description="An engineering company responsible for creating and maintaining the design of the Dutch railways.
                            Based on the needs, the designs determine what hardware needs to go where. The hardware consists of safety systems, signals, switches, etc., all used to manage train traffic.
                            The 'designs' are used by multiple clients for traffic management and to visualize the railways and traffic."
                role="Frontend Architect | Full stack developer"
                left={true}
                stack={LOXIA_STACK}
            >
                <ul>
                    <li>Breathing new life into the frontend component-library</li>
                    <li>Improving UX/UI designs</li>
                    <li>Improving performance in a complex visualization web app using GeoJson to visualize the complete rail infrastructure using Leaflet
                        <ul>
                            <li>Analyzing and redesigning APIs for more efficient data gathering</li>
                            <li>Changing UX/UI to give the user better feedback so as to not perceive the app as slow</li>
                            <li>Reduced the loading time of the complete dataset from 3 minutes to 10 seconds</li>
                            <li>Removed latency during zooming and panning, by delaying and only rendering what is in view</li>
                        </ul>
                    </li>
                    <li>Introducing visual regression testing</li>
                    <li>Setting up a workshop to improve frontend development knowledge and UI design</li>
                </ul>
            </ProjectInfo>

            <ProjectInfo
                title="NS - Nederlandse Spoorwegen (Dutch Railways)"
                description="NS is the main provider of public transport on the Dutch Railway system. One of the main responsibilities,
                        next to offering public transport, is creating the planning and timetables for all the traffic routes in the country.
                        <br><i>The main project consisted of creating a visual diagram depicting the planned train traffic over time. The diagram would be used during the planning of timetables, to adjust and optimize planning and prevent conflicting routes</i>"
                role="Lead Full stack developer"
                stack={NS_STACK}
            >
                <ul>
                    <li>Creating a new Full stack development team</li>
                    <li>Setting up component-library</li>
                    <li>As a team, setting the standards for all new web app projects</li>
                    <li>As a team, leading the way in the migration to a containerized DevOps environment using OpenShift</li>
                    <li>Together with a team of architects and lead developers, creating a migration strategy from a monolithic system to a (micro) service architecture</li>
                    <li>Creating a custom component for an SVG tooltip, capable of detecting all (layered) elements under the cursor</li>
                </ul>
            </ProjectInfo>
        </section>
    );
}