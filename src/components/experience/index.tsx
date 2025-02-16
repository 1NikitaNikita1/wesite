import { FC } from 'react';
import styled from 'styled-components';
import { Heading } from '../heading';
import { TCase, Case } from './case';

const EXPERIENCE: TCase[] = [
    {
        start: '06/2023',
        end: 'Present',
        title: 'Web3 Developer at Claimr.io',
        description:
            'The main focus of my work involved developing user interfaces and web applications using React.js and Typescript. I also actively interacted with Ethers.js to facilitate blockchain technology operations. Additionally, I successfully integrated APIs from other projects, enhancing the functionality of our product.\n\nWork with React Context.',
        location: 'Kyiv',
    },
    {
        start: '09/2022',
        end: '04/2023',
        title: 'Front end Developer at Getwin',
        description:
            'Develop user interfaces and web applications using React.js, JavaScript, HTML/CSS/Sass (Styled Components), and Typescript. \n\nWork with React Context.',
        location: 'Kyiv - Remote',
    },
    {
        start: '08/2021',
        end: '09/2022',
        title: 'Front end Developer at Graviti',
        description:
            'Developed user interfaces and web applications using React.js, JavaScript, HTML/CSS/Sass\n\n(Styled Components) and Typescript. Worked with Node.js and React.js',
        location: 'Kyiv',
    },
    {
        start: '09/2017',
        end: '09/2021',
        title: 'HTML coder at Freelance',
        description:
            'I designed and developed user interfaces for websites using HTML/CSS, jQuery, and JavaScript, as well as creating LPs, online stores, and admin panels. I also designed and adapted banners and website elements to enhance the overall user experience.',
        location: 'Remote',
    },
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
