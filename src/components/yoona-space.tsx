import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Heading, HType } from './heading';
import { ScTag } from './tag';
import { CoverLetter, ScCodeHeader, ScCoverLetter } from './coverLetter';
import { GlowWrapper, ScGlowWrapper } from './glowWrapper';
import { useParallax } from '../hooks/useParallax';
import { ScreenType, useScreenType } from '../hooks/useScreenType';
import { TSkills } from './skills';
import { List, Marker } from './list';
import { Contacts, ScContacts } from './contacts';
import { useCvTracker } from '../hooks/useCvTracker';
// import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CV_MAIN_TEXT = `Yoona Space is a SaaS platform for custom data analytics and marketing campaign gamification through interactive leaderboards. 
//
The platform consists of two products - Yoona Charts and Yoona Leaderboards - and supports Open APIs, iframe integrations, and Telegram-based user engagement.`;

const MY_ROLE_TEXT = `Designed and independently built Yoona Space end-to-end, a data analytics and marketing gamification platform consisting of two products: Yoona Charts and Yoona Leaderboards. Responsible for the entire product lifecycle, including product design, architecture, frontend, backend, APIs, third-party integrations, payments, legal setup, and deployment.\nBuilt the platform using React.js, Next.js, TypeScript, Node.js, Express.js, Supabase, PostgreSQL, Zustand, Styled Components, and Docker, with a focus on scalable and reusable product architecture.\nDeveloped Yoona Charts, a customizable data visualization platform with an Open API and iframe-based embedding, allowing clients to integrate interactive analytics and charts directly into their own products.\nDeveloped Yoona Leaderboards, a gamification platform where leaderboards can be populated through a Telegram bot or directly via the Open API. Built automated data processing and ranking logic to calculate and update leaderboard positions in real time.\nBuilt a Telegram-based engagement system for marketing campaigns, including user participation reminders, polls, point distribution, community interactions, and automated detection and filtering of suspicious activity and spam.\nIntegrated payment infrastructure, including Apple Pay, Google Pay, and other payment methods, enabling subscription-based access to the platform and its products.\nDesigned and implemented the full client integration layer, including Open APIs, iframe embeds, authentication, data processing, and custom integrations with external products and technology stacks.\nBuilt and maintained products used by up to 6 active clients across both platforms, processing data and interactions for more than 3,000 users.`;

const SKILLS: TSkills = [
    [
        {
            items: ['React', 'Next.js', 'Vite', 'TypeScript', 'JavaScript', 'sc-js', 'MUI', 'Architecture']
        },
        {
            items: ['Node.js', 'Next.js API Routes', 'Prisma', 'REST', 'JWT', 'Bcrypt', 'Supabase']
        },
        {
            items: ['Zustand', 'Axios', 'React Router', 'Zod', 'Recharts', 'D3', 'Papaparse']
        }
    ],
    [
        {
            items: ['Git', 'Docker', 'Supabase', 'Vercel', 'CI/CD', 'Actions', 'Deploy'],
            marker: Marker.yellow
        },
        {
            items: ['Stripe', 'LemonSqueezy', 'Postman', 'QR Code Styling', 'Workflow'],
            marker: Marker.yellow
        },
        {
            items: ['Figma', 'Jira', 'Framer', 'Photoshop', 'Workflow'],
            marker: Marker.yellow
        }
    ]
];

export type SkillCategory =
    | 'Frontend'
    | 'Backend'
    | 'State Management & Libraries'
    | 'Blockchain'
    | 'Cloud & DevOps'
    | 'API & Testing'
    | 'Payments & Integrations'
    | 'Design & Project Management'
    | 'CMS';

export const SKILL_CATEGORIES: Record<SkillCategory, string[]> = {
    Frontend: [
        'React',
        'Vue',
        'Next.js',
        'Vite',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Sass',
        'Styled Components',
        'MUI',
        'React Router',
        'Architecture'
    ],

    Backend: [
        'Node.js',
        'Express.js',
        'NestJS',
        'Next.js API Routes',
        'Prisma',
        'REST',
        'GraphQL',
        'JWT',
        'Bcrypt',
        'Microservices',
        'Supabase'
    ],

    'State Management & Libraries': [
        'Context',
        'Redux',
        'Zustand',
        'RxJS',
        'React Query',
        'Axios',
        'Zod',
        'Recharts',
        'D3',
        'Papaparse'
    ],

    Blockchain: ['Ethers.js', 'Web3.js', 'sc-js'],

    'Cloud & DevOps': ['Git', 'Docker', 'Vercel', 'AWS', 'CI/CD', 'GitHub Actions', 'Deployment'],

    'API & Testing': ['Swagger', 'Postman', 'Authentication'],

    'Payments & Integrations': ['Stripe', 'LemonSqueezy', 'QR Code Styling', 'Workflow'],

    'Design & Project Management': ['Figma', 'Jira', 'Framer', 'Lottie', 'Photoshop', 'Design'],

    CMS: ['Strapi', 'Contentful', 'Sanity', 'WordPress', 'Headless']
};
export const YoonaSpace: FC = () => {
    const header_ref = useParallax({ speed: 0.15, initialOffset: 0 });
    const screenType = useScreenType();
    useCvTracker('Yoona space');

    return (
        <ScYoonaSpace data-component-theme='light'>
            <GlowWrapper colors={['rgba(220, 82, 134,.4)', 'rgba(107, 74, 255,.4)']}>
                <div className='header' ref={header_ref}>
                    <div className='container'>
                        <Heading type={HType.h1} title='yoona' tag='Project'>
                            One platform for everything that powers your business powers your business
                        </Heading>
                    </div>
                </div>
                <CoverLetter tag='About the project' body={CV_MAIN_TEXT} />
                <ScHeadingWrap>
                    <Heading type={HType.h2} title='Powered by modern technology' tag='Tools & technology' />
                </ScHeadingWrap>
                <ScSkillsWrap>
                    {screenType === ScreenType.mobile_portrait ? (
                        SKILLS.map((row, row_index, rows) => {
                            const _row = row.flatMap(({ items }) => items);
                            return (
                                <div className='list-wrap' key={row_index}>
                                    <List data={_row} marker={row_index === 1 ? Marker.yellow : Marker.blue} />
                                </div>
                            );
                        })
                    ) : (
                        <div>
                            {SKILLS.map((row, row_index) => (
                                <div className='list-wrap' key={row_index}>
                                    {row.map(({ items, marker }, column_index) => (
                                        <List data={items} marker={marker} key={column_index} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </ScSkillsWrap>
                <Heading type={HType.h2} title='One person, one idea' tag='Behind the product'>
                    From idea to production - no team, no shortcuts,
                    <br />
                    just execution
                </Heading>
                <ScMyRoleCv>
                    <CoverLetter tag='My role' body={MY_ROLE_TEXT} />
                </ScMyRoleCv>
                <ScCaseLoader>
                    <div className='bar-wrap'>
                        <div className='bar'></div>
                    </div>
                </ScCaseLoader>
                <Contacts />
            </GlowWrapper>
        </ScYoonaSpace>
    );
};

const fade = keyframes`
    50%{
        background: var(--background-secondary);;
    }
    90%{
        opacity: 1;
        pointer-events: initial;
        background: #fffef8;
    }
    to{
        background: #fffef8;
        opacity: 0;
        pointer-events: none;
        backdrop-filter: blur(0);
    }
`;

const bar = keyframes`
    from{
        width: 0%;
    }
    60%{
        background: #fff;

    }
    70%,to{
        width: 100%;
        background: #000;
    }
`;

const ScCaseLoader = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: var(--background-secondary);
    z-index: 999;
    animation: ${fade} 1.5s ease-out forwards;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;

    ${ScGlowWrapper} >div:not(:nth-child(1)),${ScGlowWrapper} >div:not(:last-child) {
        z-index: 3;
    }
    .bar-wrap {
        flex: 0 0 240px;
        height: 8px;
        background: #fff1;
        position: relative;
        border-radius: 6px;

        .bar {
            background: #fff;
            width: 0%;
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 6px;
            bottom: 0;
            animation: ${bar} 1.5s ease-out forwards;
        }
    }
`;

const ScHeadingWrap = styled.div`
    width: 100%;
`;

const ScYoonaSpace = styled.div`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    .container {
        position: relative;
        z-index: 3;
    }
    ${ScContacts} {
        .contacts-wrap .label {
            color: #000;
        }
        .contacts-wrap a {
            color: #000;
        }
        &::after {
            content: none;
        }
    }

    ${ScTag} {
        filter: invert(1);
        background: #000;
    }

    ${ScCoverLetter} {
        --background-secondary: #fffef8;
    }

    ${ScCodeHeader} {
        background-color: #fff9f8;
    }

    .tab {
        background: #ffe7de;
        img {
            filter: invert(1);
        }
    }

    .cm-lineNumbers .cm-gutterElement {
        color: #78909c !important;
    }
    .cm-gutters {
        border-right: 1px solid #78909c1e;
        padding-right: 12px;
        margin-right: -12px;
    }

    .cm-line:nth-child(2) {
        color: #e57373;
    }

    .cm-scroller {
        color: #000;
    }
`;

const ScSkillsWrap = styled.div`
    li {
        color: #000;
        font-size: 18px;
        align-items: center;
        .marker {
            filter: grayscale(1) invert(1) saturate(1);
        }
    }

    .list-wrap {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 990px;
        margin-inline: auto;
        transition: all 0.2s;

        & > * {
            &:first-child {
                flex: 0 0 146px;
                max-width: 146px;
            }
            &:nth-child(2) {
                flex: 0 0 262px;
                max-width: 262px;
            }
            &:last-child {
                flex: 0 0 210px;
                max-width: 210px;
            }
        }
    }

    @media (max-width: 577px) {
        justify-content: center;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
    }
`;

const ScMyRoleCv = styled.div`
    .cm-line:nth-child(2) {
        color: #000;
    }
`;
