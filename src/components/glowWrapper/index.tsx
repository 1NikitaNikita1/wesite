import { FC, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import { useScreenType } from '../../hooks/useScreenType';
import { useParallax } from '../../hooks/useParallax';

interface GlowWrapperProps extends ScGlowWrapperProps {
    children: ReactNode;
}

export const GlowWrapper: FC<GlowWrapperProps> = ({ children, colors = ['#2b323f', '#2b323f'] }) => {
    const screen = useScreenType();
    const glow_left_ref = useParallax({ speed: 0.11 });
    const glow_right_ref = useParallax({ speed: 0.1 });

    return (
        <ScGlowWrapper key={screen} colors={colors}>
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

interface ScGlowWrapperProps {
    colors?: [string, string];
}

export const ScGlowWrapper = styled.div<ScGlowWrapperProps>`
    position: relative;
    max-width: 100vw;
    overflow-x: hidden;

    .glow {
        position: fixed;
        width: 25vw;
        aspect-ratio: 1/1;
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
        &:first-child {
            background: ${({ colors }) => (!!colors ? colors[0] : '#2b323f')};
        }
        &:last-child {
            background: ${({ colors }) => (!!colors ? colors[1] : '#2b323f')};
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
