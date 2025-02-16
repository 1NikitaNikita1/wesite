import { FC } from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

import sprite from '../../assets/sprite.png';

const baseConfig = [
    { position: '-45px -133px', width: 32, height: 32 },
    { position: '-4px -4px', width: 119, height: 41 },
    { position: '-184px -44px', width: 40, height: 32 },
    { position: '-49px -93px', width: 33, height: 32 },
    { position: '-4px -53px', width: 119, height: 32 },
    { position: '-91px -93px', width: 32, height: 32 },
    { position: '-4px -93px', width: 36, height: 32 },
    { position: '-132px -44px', width: 43, height: 32 },
    { position: '-4px -133px', width: 32, height: 32 },
    { position: '-86px -133px', width: 23, height: 32 },
    { position: '-132px -4px', width: 114, height: 32 },
    { position: '-132px -93px', width: 32, height: 32 },
    { position: '-173px -93px', width: 32, height: 32 },
    { position: '-214px -93px', width: 32, height: 32 },
];

export enum CarouselDirection {
    left = 'left',
    right = 'right',
}

export const Carousel: FC<{ direction?: CarouselDirection; speed?: number }> = ({
    direction = CarouselDirection.left,
    speed = 15,
}): JSX.Element => {
    return (
        <ScCarousel>
            <Marquee direction={direction} autoFill speed={speed}>
                {baseConfig.map(({ position, width, height }, index) => (
                    <div
                        className='slide'
                        key={index}
                        style={{
                            background: `url(${sprite}) no-repeat`,
                            backgroundPosition: position,
                            width,
                            height,
                        }}
                    />
                ))}
            </Marquee>
        </ScCarousel>
    );
};

export const ScCarousel = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    background: #282c34;

    .slide {
        margin: 0 24px;
    }

    @media (max-width: 577px) {
        .slide {
            margin: 0 12px;
        }
    }
`;
