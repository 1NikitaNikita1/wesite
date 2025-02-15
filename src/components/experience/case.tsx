import { FC } from 'react';
import { ScTag, Tag } from '../tag';
import styled from 'styled-components';

export type TCase = {
    start: string;
    end: string;
    title: string;
    description: string;
    location: string;
};

export const Case: FC<TCase> = ({ start, end, title, description, location }) => {
    return (
        <ScCase>
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
    );
};

const ScCase = styled.div`
    max-width: 570px;
    position: relative;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    padding-bottom: 68px;

    svg {
        position: absolute;
        bottom: -46px;
        z-index: -1;
    }

    .box {
        background: linear-gradient(0deg, rgba(40, 44, 52, 1) 0%, rgba(45, 50, 58, 1) 100%);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px;
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

    &:last-child{
        svg{
            bottom: 0;
        }
        &:after{
            bottom: 0;
        }
    }

    &:after{
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #1F2227;
        border: 1px solid #404C62;
        bottom: 24px;
    }
`;
