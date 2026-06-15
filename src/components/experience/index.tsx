import { FC } from 'react';
import styled from 'styled-components';
import { Heading } from '../heading';
import { TCase, Case } from './case';

const EXPERIENCE: TCase[] = [
    {
        start: '06/2023',
        end: 'Present',
        title: 'Frontend Developer at Claimr.io',
        description:
            'Develop and maintain product interfaces and web applications using React.js and TypeScript.\n\n' +
            'Responsible for development and support of 3 core product entities, including client applications, admin panels, and internal API libraries.\n\n' +
            'Built reusable frontend components, integrated external APIs, and worked on application architecture and state management.\n\n' +
            'Developed and customized client-side solutions to support integration with different frameworks and technology stacks.\n\n' +
            'Worked with Ethers.js and Web3 technologies to implement blockchain-related functionality.',
        location: 'Kyiv',
    },
    {
    start: '09/2022',
    end: '04/2023',
    title: 'Frontend Developer at Getwin',
    description:
        'Developed and maintained responsive web applications using React.js, TypeScript, JavaScript, HTML/CSS, Sass, and Styled Components.\n\n' +
        'Created reusable UI components, implemented frontend logic, and worked with application state management using React Context API.\n\n' +
        'Collaborated with the team to improve product functionality and user experience.',
    location: 'Kyiv - Remote',
},
{
    start: '08/2021',
    end: '09/2022',
    title: 'Frontend Developer at Graviti',
    description:
        'Built and optimized frontend applications using React.js, TypeScript, JavaScript, HTML/CSS, Sass, and Styled Components.\n\n' +
        'Developed reusable components, integrated frontend features, and worked with Node.js for backend-related tasks.\n\n' +
        'Implemented responsive layouts and improved existing user interfaces.',
    location: 'Kyiv',
},
{
    start: '09/2017',
    end: '09/2021',
    title: 'Frontend Developer / Freelancer',
    description:
        'Developed websites, landing pages, online stores, and admin panels using HTML, CSS, JavaScript, and jQuery.\n\n' +
        'Converted designs into responsive web layouts and adapted interfaces for different devices.\n\n' +
        'Created and optimized website assets, banners, and UI elements to improve visual consistency and user experience.',
    location: 'Remote',
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
