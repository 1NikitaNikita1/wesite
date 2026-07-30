import { FC } from 'react';
import styled from 'styled-components';
import { Heading } from '../heading';
import { TCase, Case } from './case';

export const EXPERIENCE: TCase[] = [
    {
        start: '01/2026',
        end: 'Present',
        title: 'Founder & Full-Stack Developer\nat Yoona Space',
        shortDescription:
            'Built and launched Yoona Space from scratch, a SaaS platform for data analytics and marketing gamification consisting of Yoona Charts and Yoona Leaderboards. Led the entire product lifecycle, including product design, architecture, frontend and backend development, Open APIs, Telegram automation, payment infrastructure, client integrations, and deployment. The platform currently serves 6 active B2B clients and more than 3,000 users.',
        technologies: [
            'Architecture',
            'React',
            'Next.js',
            'TypeScript',
            'Node.js',
            'Supabase',
            'PostgreSQL',
            'Docker',
            'Prisma',
            'Zustand',
            'Styled Components',
            'REST API',
            'JWT',
            'CI/CD',
            'GitHub Actions',
            'Stripe',
            'LemonSqueezy',
            'Vercel'
        ],
        description:
            'Designed and built Yoona Space from scratch, defining the product architecture and delivering the complete SaaS platform independently.\n\n' +
            'Developed Yoona Charts, an embeddable analytics platform with an Open API and iframe integration, allowing clients to integrate interactive dashboards into existing products.\n\n' +
            'Developed Yoona Leaderboards, implementing automated ranking pipelines and real-time leaderboard updates through REST APIs and Telegram integrations.\n\n' +
            'Built a Telegram-based automation system for marketing campaigns, including reminders, polls, point distribution, spam detection, and community engagement workflows.\n\n' +
            'Designed and implemented the complete integration layer, including authentication, Open APIs, iframe embedding, data synchronization, and custom client integrations.\n\n' +
            'Integrated subscription billing with Stripe, LemonSqueezy, Apple Pay, and Google Pay, enabling commercial SaaS distribution.\n\n' +
            'Managed infrastructure, deployments, CI/CD pipelines, and production releases while supporting 6 active clients and processing data for more than +3,000 users.',
        location: 'Kyiv',
        link: {
            to: '/yoona-space',
            text: 'Dive in'
        }
    },

    {
        start: '06/2023',
        end: '06/2026',
        title: 'Frontend Developer at Claimr.io',
        shortDescription:
            'Designed and developed production frontend solutions across client applications, admin panels, and shared internal libraries. Built the frontend architecture using React.js, TypeScript, Zustand, and styled-components, developed reusable UI systems and drag-and-drop functionality, integrated external APIs and blockchain technologies, and customized products to support different client frameworks and technology stacks.',
        description:
            'Designed the frontend architecture for multiple production applications, introducing centralized state management with Zustand and a reusable UI layer based on styled-components.\n\n' +
            'Developed reusable components and internal UI libraries, including a drag-and-drop engine powering Kanban-based workflows while keeping presentation separated from business logic.\n\n' +
            'Integrated external APIs and internal Node.js services, implementing authentication, asynchronous data synchronization, and error handling.\n\n' +
            'Implemented blockchain functionality using Ethers.js and Web3 technologies, enabling smart contract interactions and wallet-based features.\n\n' +
            'Adapted frontend solutions for clients using different frameworks and technology stacks, simplifying product integration and customization.\n\n' +
            'Participated in architecture discussions, feature implementation, code reviews, and continuous improvement of shared frontend infrastructure.',
        location: 'Kyiv',
        technologies: [
            'React.js',
            'TypeScript',
            'Zustand',
            'styled-components',
            'React Router',
            'Node.js',
            'Ethers.js',
            'Web3',
            'Vue.js',
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
            'Developed customer-facing web applications using React.js and TypeScript, implementing new product functionality, reusable UI components, and scalable frontend architecture. Worked closely with designers and backend engineers to deliver production-ready features, manage application state, improve user experience, and maintain a clean and maintainable codebase.',
        description:
            'Developed new product functionality using React.js and TypeScript for customer-facing web applications.\n\n' +
            'Built reusable UI components and application modules, improving consistency and maintainability across the project.\n\n' +
            'Implemented client-side business logic and managed application state using React Context API.\n\n' +
            'Collaborated with designers and backend developers to deliver new features and improve user experience.\n\n' +
            'Maintained and optimized existing frontend codebase, fixing issues and improving application stability.',
        location: 'Kyiv - Remote',
        technologies: ['React.js', 'TypeScript', 'Styled Components', 'Context API', 'Redux', 'REST API', 'Sass'],
        link: {
            text: 'Dive in'
        }
    },

    {
        start: '08/2021',
        end: '09/2022',
        title: 'Frontend Developer at Graviti',
        shortDescription:
            'Developed and maintained React.js applications, implementing new business functionality, reusable UI components, and responsive interfaces for commercial products. Integrated REST APIs, contributed to backend-related development with Node.js, improved existing user interfaces, and participated in the delivery of production features.',
        description:
            'Developed responsive web applications using React.js, TypeScript, and Styled Components.\n\n' +
            'Implemented reusable UI components and integrated new business features into existing products.\n\n' +
            'Worked with REST APIs and participated in backend-related development using Node.js.\n\n' +
            'Improved existing interfaces, fixed production issues, and optimized application performance.\n\n' +
            'Collaborated with cross-functional teams throughout the feature delivery process.',
        location: 'Kyiv',
        technologies: [
            'React.js',
            'TypeScript',
            'Node.js',
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
        start: '09/2017',
        end: '09/2021',
        title: 'Frontend Developer / Freelancer',
        shortDescription:
            'Delivered custom web solutions for businesses and individual clients, including corporate websites, landing pages, online stores, and administration panels. Converted UI designs into responsive production-ready interfaces, implemented custom functionality, optimized performance, and managed projects from initial requirements to final delivery.',
        description:
            'Developed websites, landing pages, e-commerce stores, and administration panels using HTML, CSS, JavaScript, jQuery, WordPress, and Shopify.\n\n' +
            'Converted Figma and Photoshop designs into responsive, cross-browser compatible interfaces.\n\n' +
            'Customized themes, implemented client-specific functionality, and optimized website performance.\n\n' +
            'Worked directly with clients, gathering requirements, estimating work, and delivering complete web solutions.',
        location: 'Remote',
        technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress', 'Shopify']
    }
];

export const Experience: FC = () => {
    return (
        <ScExperience>
            <Heading tag='Employment History' title='How I gained my experience?' />
            {EXPERIENCE.map((item, index) => (
                <Case {...item} id={`case-card-${index}`} key={index} />
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
