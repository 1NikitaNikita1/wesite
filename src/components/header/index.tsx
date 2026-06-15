import { FC } from 'react';
import { Heading, HType } from '../heading';
import { useParallax } from '../../hooks/useParallax';
import styled from 'styled-components';

export const Header: FC = () => {
    const ref = useParallax({ speed: 0.15, initialOffset: 0 });
    return (
        <ScHeader ref={ref}>
            <Heading type={HType.h1} title='Nikita Yudakov' tag='Front end Developer'>
                Focused on delivering scalable and maintainable frontend solutions for product teams.
            </Heading>
        </ScHeader>
    );
};

const ScHeader = styled.div`
    max-width: 991px;
    margin-inline: auto;

    @media (max-width: 991px) {
        max-width: 577px;
    }

    @media (max-width: 577px) {
        max-width: 360px;
    }
`;
