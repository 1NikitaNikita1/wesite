import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Tag } from '../tag';

export enum HType {
    h1 = 0,
    h2,
    h3,
}

interface HeadingProps {
    type?: HType;
    children?: ReactNode;
    tag?: string;
    title: string;
}

interface HComponentProps {
    type: HType;
    children: ReactNode;
}

const HComponent: FC<HComponentProps> = ({ type, children }) => {
    switch (type) {
        case HType.h1:
            return <h1>{children}</h1>;
        case HType.h2:
            return <h2>{children}</h2>;

        case HType.h3:
            return <h3>{children}</h3>;
        default:
            return null;
    }
};

export const Heading: FC<HeadingProps> = ({ type = HType.h2, children, tag, title }) => {
    return (
        <ScHeading>
            {tag && <Tag>{tag}</Tag>}
            <HComponent type={type}>{title}</HComponent>
            <p>{children}</p>
        </ScHeading>
    );
};

const ScHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 80px;
    margin-bottom: 40px;

    p {
        font-size: 22px;
        line-height: 150%;
        text-align: center;
        max-width: 820px;
        margin-inline: auto;
    }

    @media (max-width: 991px) {
        margin: 32px 0 24px;
        gap: 8px;
    }

    @media (max-width: 577px) {
        p {
            max-width: 360px;
            font-size: 16px;
        }
    }
`;
