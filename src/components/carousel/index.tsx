import { FC } from 'react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

import logo1 from '../../assets/logo/1.svg';
import logo2 from '../../assets/logo/2.svg';
import logo3 from '../../assets/logo/3.svg';
import logo4 from '../../assets/logo/4.svg';
import logo5 from '../../assets/logo/5.svg';
import logo6 from '../../assets/logo/6.svg';
import logo7 from '../../assets/logo/7.svg';
import logo8 from '../../assets/logo/8.svg';
import logo9 from '../../assets/logo/9.svg';
import logo10 from '../../assets/logo/10.svg';
import logo11 from '../../assets/logo/11.svg';
import logo12 from '../../assets/logo/12.svg';
import logo13 from '../../assets/logo/13.svg';
import logo14 from '../../assets/logo/14.svg';

const baseConfig = [
    { cover: logo1, width: 32, height: 32 },
    { cover: logo2, width: 119, height: 41 },
    { cover: logo3, width: 40, height: 32 },
    { cover: logo4, width: 33, height: 32 },
    { cover: logo5, width: 119, height: 32 },
    { cover: logo6, width: 32, height: 32 },
    { cover: logo7, width: 36, height: 32 },
    { cover: logo8, width: 43, height: 32 },
    { cover: logo9, width: 32, height: 32 },
    { cover: logo10, width: 23, height: 32 },
    { cover: logo11, width: 114, height: 32 },
    { cover: logo12, width: 32, height: 32 },
    { cover: logo13, width: 32, height: 32 },
    { cover: logo14, width: 32, height: 32 },
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
                {baseConfig.map(({ cover, width, height }, index) => (
                    <div
                        className='slide'
                        key={index}
                        style={{
                            background: `url(${cover}) 100% 100% no-repeat`,
                            backgroundSize: '100% 100%',
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
