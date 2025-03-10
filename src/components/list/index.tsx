import { FC } from 'react';
import styled from 'styled-components';

import star from '../../assets/start.svg';

export enum Marker {
    blue = 'blue',
    yellow = 'yellow',
}

interface ListProps extends ScListProps {
    data: string[];
}

export const List: FC<ListProps> = ({ data, marker = Marker.blue }) => {
    return (
        <ScList marker={marker}>
            {data.map((item, index) => (
                <li key={index}>
                    <img src={star} alt='' className='marker' />
                    {item}
                </li>
            ))}
        </ScList>
    );
};

interface ScListProps {
    marker?: Marker;
}

const ScList = styled.ul.withConfig({
    shouldForwardProp: (prop) => !['marker'].includes(prop),
})<ScListProps>`
    box-sizing: border-box;
    margin: 0 0 42px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 28px;

    li {
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        margin: 0;
        list-style: none;
        display: flex;
        gap: 12px;
        padding: 0;
    }

    .marker {
        flex: 0 0 30px;
        max-width: 30px;
        height: 30px;
        width: 30px;
        background-size: 100% 100%;
        filter: ${({ marker }) =>
            marker === Marker.blue
                ? 'none'
                : 'brightness(0) saturate(100%) invert(83%) sepia(3%) saturate(5126%) hue-rotate(359deg) brightness(93%) contrast(92%)'};
    }

    @media (max-width: 991px) {
        margin: 0 0 24px;
        gap: 12px;

        li {
            font-size: 16px;
            gap: 8px;
        }

        .marker {
            flex: 0 0 20px;
            max-width: 20px;
            height: 20px;
            width: 20px;
        }
    }
    @media (max-width: 767px) {
        margin-bottom: 16px;
    }

    @media (max-width: 390px) {
        li {
            white-space: nowrap;
            gap: 8px;
        }
    }
`;
