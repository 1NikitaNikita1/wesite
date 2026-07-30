import { FC } from 'react';
import styled from 'styled-components';
import { Heading } from '../heading';
import { TCase, Case } from './case';

export const EXPERIENCE: TCase[] = [
    {
        start: '01/2026',
        end: 'Present',
        title: 'Founder & Full-Stack Developer \nat Yoona Space',
        shortDescription:
            'Independently built and launched a SaaS platform for data analytics and marketing gamification, covering product design, architecture, frontend, backend, APIs, integrations, payments, and deployment. The platform serves up to 6 active clients and has processed data and interactions for 1,500+ users.',
        technologies: [
            'React',
            'TypeScript',
            'Next.js',
            'Node.js',
            'Vite',
            'JavaScript',
            'sc-js',
            'MUI',
            'Architecture',
            'Next.js API Routes',
            'Prisma',
            'REST',
            'JWT',
            'Bcrypt',
            'Supabase',
            'Zustand',
            'Axios',
            'React Router',
            'Zod',
            'Recharts',
            'D3',
            'Papaparse',
            'Git',
            'Docker',
            'Vercel',
            'CI/CD',
            'Actions',
            'Deploy',
            'Stripe',
            'LemonSqueezy',
            'Postman',
            'QR Code Styling',
            'Workflow',
            'Figma',
            'Jira',
            'Framer',
            'Photoshop'
        ],
        description:
            'Designed and independently built Yoona Space end-to-end, a data analytics and marketing gamification platform consisting of two products: Yoona Charts and Yoona Leaderboards. Responsible for the entire product lifecycle, including product design, architecture, frontend, backend, APIs, third-party integrations, payments, legal setup, and deployment.\n\n' +
            'Built the platform using React.js, Next.js, TypeScript, Node.js, Express.js, Supabase, PostgreSQL, Zustand, Styled Components, and Docker, with a focus on scalable and reusable product architecture.\n\n' +
            'Developed Yoona Charts, a customizable data visualization platform with an Open API and iframe-based embedding, allowing clients to integrate interactive analytics and charts directly into their own products.\n\n' +
            'Developed Yoona Leaderboards, a gamification platform where leaderboards can be populated through a Telegram bot or directly via the Open API. Built automated data processing and ranking logic to calculate and update leaderboard positions in real time.\n\n' +
            'Built a Telegram-based engagement system for marketing campaigns, including user participation reminders, polls, point distribution, community interactions, and automated detection and filtering of suspicious activity and spam.\n\n' +
            'Integrated payment infrastructure, including Apple Pay, Google Pay, and other payment methods, enabling subscription-based access to the platform and its products.\n\n' +
            'Designed and implemented the full client integration layer, including Open APIs, iframe embeds, authentication, data processing, and custom integrations with external products and technology stacks.\n\n' +
            'Built and maintained products used by up to 6 active clients across both platforms, processing data and interactions for more than 3,000 users.',
        location: 'Kyiv',
        link: {
            to: '/yoona-space',
            text: 'Dive in'
        }
    },
    {
        start: '06/2023',
        end: '06/2026',
        title: 'Web Developer at Claimr.io',
        shortDescription:
            'Developed and maintained production applications across client-facing products, admin panels, and internal API libraries, building frontend architecture and reusable UI systems with React.js, TypeScript, and modern state management.',
        description:
            'Developed and maintained product interfaces on React.js and TypeScript, working across 3 core product entities: client applications, admin panels, and internal API libraries.\n\n' +
            'Built the frontend architecture from the ground up: Zustand for centralized state management, styled-components for the UI layer, and react-router-dom for routing.\n\n' +
            'Built reusable components, including a drag-and-drop system (Kanban board) and custom UI elements decoupled from business logic via the store.\n\n' +
            'Integrated external APIs and Node.js' +
            'Implemented blockchain-related functionality using Ethers.js and Web3 technologies.\n\n' +
            'Customized client-side solutions to support integration with different client frameworks and technology stacks.',
        location: 'Kyiv',
        technologies: [
            'React.js',
            'Vue2/3',
            'Pina',
            'TypeScript',
            'Zustand',
            'styled-components',
            'react-router-dom',
            'Node.js',
            'Ethers.js',
            'Web3',
            'GitHub Actions'
        ],
        link: {
            text: 'Dive in'
        }
    },
    {
        start: '09/2022',
        end: '04/2023',
        title: 'Frontend Developer at Getwin',
        shortDescription:
            'Developed responsive React.js applications and reusable UI components, working with TypeScript, Styled Components, and React Context API to build and improve product functionality and user experience.',
        description:
            'Developed and maintained responsive web applications using React.js, TypeScript, JavaScript, HTML/CSS, Sass, and Styled Components.\n\n' +
            'Created reusable UI components, implemented frontend logic, and managed application state using React Context API.\n\n' +
            'Collaborated with the team to improve product functionality and user experience.',
        location: 'Kyiv - Remote',
        technologies: [
            'React.js',
            'TypeScript',
            'JavaScript',
            'HTML/CSS',
            'Sass',
            'Styled Components',
            'Context API',
            'Redux',
            'REST API'
        ],
        link: {
            text: 'Dive in'
        }
    },
    {
        start: '08/2021',
        end: '09/2022',
        title: 'Frontend Developer at Graviti',
        shortDescription:
            'Built and optimized React.js applications with TypeScript, developing reusable components, integrating new features, and contributing to both frontend and Node.js backend-related tasks.',
        description:
            'Built and optimized frontend applications using React.js, TypeScript, JavaScript, HTML/CSS, Sass, and Styled Components.\n\n' +
            'Developed reusable components, integrated new features, and worked with Node.js for backend-related tasks.\n\n' +
            'Implemented responsive layouts and improved existing user interfaces.',
        location: 'Kyiv',
        link: {
            text: 'Dive in'
        },
        technologies: [
            'React.js',
            'TypeScript',
            'JavaScript',
            'HTML/CSS',
            'Sass',
            'Styled Components',
            'Node.js',
            'Context API',
            'Redux',
            'REST API'
        ]
    },
    {
        start: '09/2017',
        end: '09/2021',
        title: 'Frontend Developer / Freelancer',
        shortDescription:
            'Developed websites, landing pages, online stores, and admin panels, transforming designs into responsive interfaces and creating custom web solutions for different clients and use cases.',
        description:
            'Developed websites, landing pages, online stores, and admin panels using HTML, CSS, JavaScript, and jQuery.\n\n' +
            'Converted designs into responsive web layouts and adapted interfaces for different devices.\n\n' +
            'Created and optimized website assets, banners, and UI elements to improve visual consistency and user experience.',
        location: 'Remote',
        technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress', 'Shopify']
    }
];

export const Experience: FC = () => {
    return (
        <ScExperience>
            <Heading tag='Employment History' title='How I gained my experience?' />
            {EXPERIENCE.map((item, index) => (
                <Case {...item} key={index} />
            ))}
        </ScExperience>
    );
};

const ScExperience = styled.div`
    @media (max-width: 577px) {
        p {
            display: none;
        }
    }
`;
