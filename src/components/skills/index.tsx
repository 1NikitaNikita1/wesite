import { FC } from 'react';
import styled from 'styled-components';
import { Heading } from '../heading';
import { Carousel, CarouselDirection, ScCarousel } from '../carousel';
import { List, Marker } from '../list';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ScreenType, useScreenType } from '../../hooks/useScreenType';

type TSkillList = {
    items: string[];
    marker?: Marker;
};

type TSkills = [TSkillList[], TSkillList[]];

const SKILLS: TSkills = [
    [
        {
            items: ['React', 'Vue', 'Ethers', 'TypeScript', 'JavaScript', 'i18n', 'Canvas'],
        },
        {
            items: ['NodeJS', 'jQuery', 'Styled Components', 'Tailwind', 'Bootstrap', 'jQuery UI'],
        },
        { items: ['REST/JSON/SOAP', 'Keyframes', 'Context API', 'Zustand', 'Redux'] },
    ],
    [
        {
            items: ['Git / Gitlab', 'Heroku', 'Aws', 'Postman'],
            marker: Marker.yellow,
        },
        {
            items: ['Strapi', 'Contentful', 'Evolution'],
            marker: Marker.yellow,
        },
        {
            items: ['Adobe', 'Figma', 'Framer', 'etc.'],
            marker: Marker.yellow,
        },
    ],
];

export const SkillsSection: FC = () => {
    const [targetRef, isIntersecting] = useIntersectionObserver();
    const [skillsRef, isSkillsIntersecting] = useIntersectionObserver();

    const screenType = useScreenType();

    return (
        <div ref={targetRef}>
            <ScSkillsSection
                isMobile={screenType === ScreenType.mobile_portrait}
                isIntersecting={isIntersecting}
                isSkillsIntersecting={isSkillsIntersecting}
            >
                <div className='headline'>
                    <div className='buttons-plug'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Heading tag='Skills' title={'What else can I do?'} />
                </div>
                <div className='carousel-wrap'>
                    <Carousel speed={screenType === ScreenType.mobile_portrait ? 50 : 15} />
                    <Carousel
                        speed={screenType === ScreenType.mobile_portrait ? 50 : 15}
                        direction={CarouselDirection.right}
                    />
                </div>
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
                    <div ref={skillsRef}>
                        {SKILLS.map((row, row_index) => (
                            <div className='list-wrap' key={row_index}>
                                {row.map(({ items, marker }, column_index) => (
                                    <List data={items} marker={marker} key={column_index} />
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </ScSkillsSection>
        </div>
    );
};

interface ScSkillSectionProps {
    isIntersecting: boolean;
    isSkillsIntersecting: boolean;
    isMobile: boolean;
}

const ScSkillsSection = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isSkillsIntersecting', 'isIntersecting', 'isMobile'].includes(prop),
})<ScSkillSectionProps>`
    position: relative;
    overflow: hidden;
    /* scale: ${({ isIntersecting }) => (isIntersecting ? 1 : 0.7)}; */
    opacity: ${({ isIntersecting, isMobile }) => (!isMobile ? (isIntersecting ? 1 : 0) : 1)};
    transition: all 0.2s ease;
    .headline {
        max-width: 1040px;
        margin-inline: auto;
        padding: 44px 0 64px;
        border-radius: 8px 8px 0 0;
        background: linear-gradient(
            353deg,
            rgba(31, 34, 39, 0) 0%,
            rgba(35, 39, 45, 0.7861738445378151) 49%,
            rgba(40, 44, 51, 1) 100%
        );
        position: relative;
        z-index: 2;
        backdrop-filter: blur(10px);
    }

    .buttons-plug {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        padding: 12px 16px;
        background: rgba(40, 44, 51, 1);
        z-index: 2;
        border-radius: 8px 8px 0 0;
        display: flex;
        gap: 8px;

        span {
            flex: 0 0 12px;
            max-width: 12px;
            height: 12px;
            border-radius: 50%;
            &:nth-child(1) {
                background: #eb695d;
            }
            &:nth-child(2) {
                background: #f4be4f;
            }
            &:nth-child(3) {
                background: #61c554;
            }
        }
    }

    .carousel-wrap {
        position: relative;
        margin-top: -124px;
        margin-bottom: 240px;
    }

    .list-wrap {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 990px;
        margin-inline: auto;
        opacity: ${({ isSkillsIntersecting }) => (isSkillsIntersecting ? 1 : 0)};
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

    ${ScCarousel} {
        box-shadow: 0px 4px 80px 0px rgba(0, 0, 0, 0.25);
        width: 120%;
        position: absolute;
        transform-origin: center;
        margin-left: -5%;
        &:first-child {
            background: #21242a;
            rotate: 6deg;
            z-index: -1;
            .slide {
                opacity: 0.2;
                /* scale: -1 1; */
            }
        }
        &:last-child {
            rotate: -6deg;
            z-index: 3;
        }
    }

    @media (max-width: 991px) {
        .headline {
            max-width: 650px;
        }

        .list-wrap {
            max-width: 650px;

            & > * {
                &:first-child {
                    flex: 0 0 146px;
                    max-width: 146px;
                }
                &:nth-child(2) {
                    flex: 0 0 182px;
                    max-width: 182px;
                }
                &:last-child {
                    flex: 0 0 163px;
                    max-width: 163px;
                }
            }
        }
    }

    @media (max-width: 767px) {
        .carousel-wrap {
            margin-top: -32px;
            margin-bottom: 164px;
        }
        .headline {
            max-width: 340px;
            padding: 24px 0 0 0;
            overflow: hidden;
            border-radius: 16px;
            max-height: 180px;
        }
        .list-wrap {
            flex: 0 0 50%;
            max-width: 50%;
            margin: 0;
            display: inline-block;
            padding: 0 16px;
            opacity: 1 !important;

            & > * {
                flex: 0 0 100% !important;
                max-width: 100% !important;
            }
        }
        ${ScCarousel} {
            &:first-child {
                rotate: 13deg;
            }
            &:last-child {
                rotate: -13deg;
            }
        }
    }
`;
