import { FC, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import { useScreenType } from '../../hooks/useScreenType';
import { useParallax } from '../../hooks/useParallax';

export const GlowWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const screen = useScreenType();
    const glow_left_ref = useParallax({ speed: 0.11 });
    const glow_right_ref = useParallax({ speed: 0.1 });

    return (
        <ScGlowWrapper key={screen}>
            <div ref={glow_left_ref} className='glow' />
            {children}
            <div ref={glow_right_ref} className='glow' />
        </ScGlowWrapper>
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

const ScGlowWrapper = styled.div`
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
        z-index: -1;

        &:first-child {
            left: -13vw;
        }
        &:last-child {
            right: -15vw;
            margin-top: -15vw;
            animation: ${glow} 3s 0.5s ease-in-out infinite alternate;
        }
    }

    @media (max-width: 577px) {
        .glow {
            width: 40vw;
            filter: blur(30px);
            margin-top: -50vw;

            &:first-child {
                left: -20vw;
            }
            &:last-child {
                right: -25vw;
                margin-top: -60vw;
                animation: ${glow} 3s 0.5s ease-in-out infinite alternate;
            }
        }
    }
`;
