import { FC } from 'react';
import styled from 'styled-components';
import { Heading } from '../heading';

import glow from '../../assets/glow.png';

export const Contacts: FC = () => {
    return (
        <ScContacts>
            <Heading title='Let’s get in touch!' tag='Contacts'>
                <span style={{ opacity: 0.7 }}>
                    If you are interested in my candidacy, contact me at your convenience.
                </span>
            </Heading>
            <div className='contacts-wrap'>
                <div className='item'>
                    <span className='label'>Phone Number</span>
                    <a href='tel:+380677332108'>+380677332108</a>
                </div>
                <div className='item'>
                    <span className='label'>Email</span>
                    <a href='mailto:work.nikita.00@gmail.com'>work.nikita.00@gmail.com</a>
                </div>
                <div className='item'>
                    <span className='label'>Links</span>
                    <a href='https://t.me/qedcbjm' target='_blank' rel='noreferrer'>
                        @qedcbjm
                    </a>
                </div>
            </div>
        </ScContacts>
    );
};

const ScContacts = styled.footer`
    position: relative;
    padding-bottom: 100px;

    h2 {
        font-size: 80px;
        margin: 0 0 10px;
    }

    &::after {
        position: absolute;
        content: '';
        width: 890px;
        max-width: calc(100vw - 128px);
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        height: auto;
        aspect-ratio: 890/436;
        background: ${() => `url(${glow}) no-repeat`};
        background-size: 100% 100%;
    }

    .contacts-wrap {
        max-width: 969px;
        margin-inline: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 32px;

        .item {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 16px;
            flex: 0 0 33.3%;
            max-width: 33.3%;
        }

        .label {
            font-size: 18px;
            font-weight: 700;
            color: #fff5;
            display: block;
        }
        a {
            color: #fff;
            text-decoration: none;
            font-size: 28px;
            &:hover {
                color: #81d4fa;
            }
        }
    }
`;
