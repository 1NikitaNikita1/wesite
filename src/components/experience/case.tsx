import { FC } from 'react';
import { ScTag, Tag } from '../tag';
import styled from 'styled-components';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export type TCase = {
    start: string;
    end: string;
    title: string;
    description: string;
    location: string;
};

export const Case: FC<TCase> = ({ start, end, title, description, location }) => {
    const [targetRef, isIntersecting] = useIntersectionObserver({ rootMargin: '-150px' });

    return (
        <ScCaseWrap ref={targetRef}>
            <ScCase isIntersecting={isIntersecting}>
                <Tag>{end}</Tag>
                <div className='box'>
                    <div className='date'>
                        {start} — {end}
                    </div>
                    <div className='title'>{title}</div>
                    <div className='description'>{description}</div>
                    <div className='location'>{location}</div>
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

const ScCase = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isIntersecting'].includes(prop),
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
