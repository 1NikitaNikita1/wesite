import { forwardRef, LegacyRef, ReactNode } from 'react';
import styled from 'styled-components';

export const Tag = forwardRef((props: { children?: ReactNode }, ref: LegacyRef<HTMLDivElement>) => {
    return <ScTag ref={ref}>{props.children}</ScTag>;
});

export const ScTag = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    border-radius: 60px;
    border: 1px solid #fff1;
    background: transparent;
    padding: 0 19px;
    height: 52px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    color: #fff;

    @media (max-width: 991px) {
        font-size: 18px;
        padding: 0 16px;
        height: 42px;
    }
`;
