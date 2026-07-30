import { FC, useCallback } from 'react';
import { ScTag, Tag } from '../tag';
import styled from 'styled-components';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

import info from '../../assets/info.svg';
import { Tooltip } from 'react-tooltip';
import { ScreenType, useScreenType } from '../../hooks/useScreenType';

export type TCase = {
    start: string;
    end: string;
    title: string;
    description: string;
    location: string;
    shortDescription: string;
    technologies?: string[];
    link?: {
        text: string;
        to?: string;
    };
};

export const Case: FC<TCase & { id: string }> = ({
    start,
    end,
    title,
    link,
    shortDescription,
    location,
    technologies = [],
    id
}) => {
    const screenType = useScreenType();

    const [targetRef, isIntersecting] = useIntersectionObserver({ rootMargin: '-150px' });

    const handle_navigate = useCallback(() => {
        if (!link || !link.to) return;
        window.open(link.to, '_blank');
    }, [link]);

    return (
        <ScCaseWrap ref={targetRef}>
            <ScCase isIntersecting={isIntersecting}>
                <Tag>{end}</Tag>
                <div className='box'>
                    <div className='date'>
                        {start} — {end}
                    </div>
                    <div className='title'>{title}</div>
                    <ul className='tech'>
                        {technologies.slice(0, 4).map((item, index) => (
                            <li className='tech-item' key={index}>
                                {item}
                            </li>
                        ))}
                        <li className='info-item' data-tooltip-id={`tooltip-${id}`}>
                            + {technologies.slice(4).length} more{' '}
                            {screenType !== ScreenType.mobile_portrait && <img alt='' src={info} />}
                        </li>
                        {screenType !== ScreenType.mobile_portrait && (
                            <Tooltip
                                style={{
                                    color: '#fff',
                                    background: 'var(--background-primary)',
                                    textAlign: 'left',
                                    lineHeight: '1.3',
                                    opacity: '1 !important',
                                    zIndex: 2000,
                                    whiteSpace: 'pre-line',
                                    backdropFilter: 'blur(5)',
                                    boxShadow:
                                        '0px 8px 28px -6px rgba(0, 0, 0, 0.12), 0px 18px 88px -4px rgba(0, 0, 0, 0.14)'
                                }}
                                id={`tooltip-${id}`}
                            >
                                <ScTooltipData>
                                    {technologies.slice(4).map((item) => (
                                        <div key={item}>{item}</div>
                                    ))}
                                </ScTooltipData>
                            </Tooltip>
                        )}
                    </ul>
                    <div className='description'>{shortDescription}</div>
                    <div className='location'>{location}</div>
                    {link && link.to && (
                        <button data-is-empty={Number(!link.to)} onClick={handle_navigate}>
                            {link.to ? link.text : 'Page in progress'}
                        </button>
                    )}
                </div>
                <Tag>{start}</Tag>
                <svg width='1' height='164' viewBox='0 0 1 164' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <line
                        x1='0.5'
                        y1='0.5'
                        x2='0.500066'
                        y2='164'
                        stroke='#404C62'
                        strokeLinecap='round'
                        strokeDasharray='4 6'
                    />
                </svg>
            </ScCase>
        </ScCaseWrap>
    );
};

const ScTooltipData = styled.div`
    max-height: 300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;
`;

const ScCase = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isIntersecting'].includes(prop)
})<{ isIntersecting: boolean }>`
    max-width: 570px;
    position: relative;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    padding-bottom: 68px;
    transition-delay: 1s;
    transition: ease 0.5s;
    opacity: ${({ isIntersecting }) => (isIntersecting ? 1 : 0)};
    scale: ${({ isIntersecting }) => (isIntersecting ? 1 : 0.5)};
    .tech {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        padding: 0;
        margin: 12px 0;

        li {
            list-style: none;
            color: #fff;
            font-size: 12px;
            font-weight: 500;
            padding: 4px 10px;
            line-height: 16px;
            border-radius: 16px;
            background: #fff1;
            display: flex;
            align-items: center;

            &.info-item {
                padding: 0;
                color: #fff5;
                background: transparent;
                border-radius: 0;
                gap: 4px;
                cursor: pointer;
                img {
                    flex: 0 0 14px;
                    max-width: 14px;
                    height: 14px;
                    opacity: 0.5;
                    vertical-align: middle;
                }
            }
        }
    }
    button {
        background: var(--color-accent);
        color: #fff;
        height: 38px;
        padding: 0 24px;
        border-radius: 8px;
        font-size: 14px;
        outline: none;
        font-weight: 600;
        color: #000;
        white-space: nowrap;
        border: none;
        margin-top: 16px;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
            background: #fff;
            color: #000;
        }

        &[data-is-empty='1'] {
            background: transparent;
            border: 2px dashed #fff3;
            color: #fff3;
            pointer-events: none;
        }
    }
    svg {
        position: absolute;
        z-index: -1;
        transition: 0.7s;
        transition-delay: 0.2s;
        transform-origin: bottom;
        height: ${({ isIntersecting }) => (isIntersecting ? '164px' : 0)};
        bottom: ${({ isIntersecting }) => (isIntersecting ? '-46px' : '100%')};
    }

    .box {
        background: linear-gradient(0deg, rgba(40, 44, 52, 1) 0%, rgba(45, 50, 58, 1) 100%);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px;
        position: relative;
    }

    .date {
        font-size: 18px;
        font-weight: 500;
        color: #81d4fa;
        margin-bottom: 10px;
    }

    .description {
        font-size: 16px;
        font-weight: 400;
        color: #fff7;
        line-height: 150%;
        margin-bottom: 16px;
    }

    .location {
        font-size: 14px;
        font-weight: 500;
        color: #fff3;
    }

    .title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
        white-space: pre-line;
    }

    ${ScTag} {
        background: #1f2227;
        border: 1px solid #404c62;
        padding: 6px 10px;
        border-radius: 8px;
        width: auto;
        height: auto;
        font-size: 14px;
        box-shadow: 0px 0px 30px 0px rgba(8, 14, 23, 0.5);
    }

    &:after {
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #1f2227;
        border: 1px solid #404c62;
        bottom: ${({ isIntersecting }) => (isIntersecting ? '24px' : '-54px')};
        transition: ease 1s;
        opacity: ${({ isIntersecting }) => (isIntersecting ? 1 : 0.5)};
    }
    @media (max-width: 577px) {
        max-width: 340px;
        padding-bottom: 32px;

        .title {
            font-size: 21px;
        }

        &::after {
            bottom: ${({ isIntersecting }) => (isIntersecting ? '6px' : '-24px')};
            scale: 0.7;
            transition: 0.2s;
        }
    }
`;

const ScCaseWrap = styled.div`
    &:last-child {
        ${ScCase} {
            svg {
                bottom: 0;
            }
            &:after {
                bottom: 0 !important;
            }
            @media (max-width: 577px) {
                svg {
                    bottom: 5px;
                }
            }
        }
    }
`;
