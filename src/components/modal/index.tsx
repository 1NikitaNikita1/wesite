import { FC, useContext } from 'react';
import useEscape from '../../hooks/use_escape';
import styled, { css } from 'styled-components';
import { ModalContext } from '../../context/modal_context';

export const ModalV2Controller: FC = () => {
    const { data } = useContext(ModalContext);
    return data.length > 0 ? <ModalV2 /> : null;
};

export const ModalV2: FC = () => {
    const { data, close_modal } = useContext(ModalContext);

    useEscape(() => {
        const current_modal = data[data.length - 1];
        close_modal(current_modal.id);
    });

    return (
        <ScModalWrapper>
            <div className='modal-body'>
                {data.map(({ body: modal, id }, index) => (
                    <ScModalContainer dataSize={data.length} index={index + 1} id={id} key={id}>
                        <div className='headline'>
                            {index === data.length - 1 && (
                                <button
                                    className='close-btn'
                                    onClick={() => close_modal(id)}
                                >
                                    <span></span>
                                    <span></span>
                                </button>
                            )}
                        </div>
                        {modal}
                     
                    </ScModalContainer>
                ))}
            </div>
        </ScModalWrapper>
    );
};


export const ScModalWrapper = styled.div`
    position: fixed;
    height: 100vh;
    left: 0;
    right: 0;
    top: 50%;
    padding-top: 64px;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 999;
    overflow-y: auto;
    box-sizing: border-box;
    .modal-body {
        width: 100%;
        flex: 0 0 760px;
        max-width: calc(100% - 24px);
        position: relative;
    }
`;

export interface ScModalContainerProps {
    dataSize: number;
    index: number;
}

export const ScModalContainer = styled.div<ScModalContainerProps>`
    background: #575757;
    border-radius: 6px;
    position: relative;
    z-index: ${({ dataSize }) => dataSize + 1};
    padding: 24px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin-inline: auto;

    .headline {
        position: relative;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 16px;

        & > .cl-text {
            flex: 1 1 auto;
        }

        .cl-dlg-frame-close {
            position: relative;
            width: 30px;
            height: 30px;
            background: transparent !important;
            border-radius: 0;
            transition: ease 0.2s;

            span {
                position: absolute;
                display: block;
                background-color: #fff;
                height: 2px;
                left: 8px;
                right: 8px;
                border-radius: 4px;
                &:first-child {
                    rotate: 135deg;
                }
                &:last-child {
                    rotate: -135deg;
                }
            }

            &:hover {
                opacity: 0.3;
            }
        }
    }

    ${({ index, dataSize }) => {
        return css`
            &:not(:last-child) {
                left: calc(${dataSize - index + 4}px);
                right: calc(${dataSize - index + 4}px);
                translate: 0 ${48 - dataSize - index + 6}px;
                z-index: ${index};
                transition: ease 0.2s;

                &::before {
                    position: absolute;
                    content: '';
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.4);
                    border-radius: 6px;
                    z-index: ${index + 1};
                }
            }
        `;
    }}
`;
