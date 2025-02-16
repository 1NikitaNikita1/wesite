import { FC } from 'react';
import { CoverLetter } from './coverLetter';
import { SkillsSection } from './skills';
import { Experience } from './experience';
import { Contacts } from './contacts';
import { Header } from './header';
import styled, { keyframes } from 'styled-components';
import { useScreenType } from '../hooks/useScreenType';
import { useParallax } from '../hooks/useParallax';

export const Page: FC = () => {
    const screen = useScreenType();
    const glow_left_ref = useParallax({ speed: 0.11 });
    const glow_right_ref = useParallax({ speed: 0.1 });
    return (
        <ScPage key={screen}>
            <div ref={glow_left_ref} className='glow' />
            <Header />
            <CoverLetter />
            <SkillsSection />
            <Experience />
            <Contacts />
            <div ref={glow_right_ref} className='glow' />
        </ScPage>
    );
};

const glow = keyframes`
    from{
        opacity: .5;
        scale: 1;
    }
    to{
        opacity: 1;
        scale: 1.3;
    }
`;

const ScPage = styled.div`
    position: relative;
    max-width: 100vw;
    overflow-x: hidden;

    .glow {
        position: fixed;
        width: 25vw;
        aspect-ratio: 1/1;
        background: #2b323f;
        border-radius: 50%;
        top: 50%;
        opacity: 0.5;
        margin-top: -25vw;
        animation: ${glow} 3s ease-in-out infinite alternate;
        filter: blur(50px);

        &:first-child {
            left: -13vw;
        }
        &:last-child {
            right: -15vw;
            margin-top: -15vw;
            animation: ${glow} 3s 0.5s ease-in-out infinite alternate;
        }
    }
`;
