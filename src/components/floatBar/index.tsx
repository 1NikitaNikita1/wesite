import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { ExtractPDFButton } from '../extractPdfButton';

export const FloatBar: FC = () => {
    return (
        <ScFloatBar>
            <ExtractPDFButton />
            <a href='https://cal.com/nikita-nikita-vajfvb' target='_blank' rel='noreferrer'>
                Book a Call
            </a>
        </ScFloatBar>
    );
};

const show = keyframes`
to{
    box-shadow: 0px 0px 30px 0px rgba(8, 14, 23, 0.5);
    background: #404c624c;
    opacity: 1;
    scale: 1;
    bottom: 24px;
    backdrop-filter: blur(8px);
}`;

const ScFloatBar = styled.div`
    z-index: 998;
    background: transparent;
    padding: 16px 24px;
    opacity: 0;
    border-radius: 16px;
    width: auto;
    height: auto;
    font-size: 14px;
    box-shadow: 0px 0px 30px 0px rgba(8, 14, 23, 0);
    bottom: 0;
    position: fixed;
    scale: 0.8;
    left: 50%;
    transform: translateX(-50%);
    margin-inline: auto;
    backdrop-filter: blur(0px);
    animation: ${show} 0.7s ease-out forwards;
    display: flex;
    align-items: center;
    gap: 12px;
    &::after {
        content: '';
        width: 2px;
        height: 12px;
        border-radius: 4px;
        background: #fff3;
    }
    a,
    button {
        font-size: 16px;
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s;
        order: -1;
        background: transparent;
        border: none;
        outline: none;
        &:hover {
            color: var(--color-accent);
        }
    }
    button,
    a:last-child {
        order: 1;
    }

    @media (max-width: 767px) {
    }
`;
