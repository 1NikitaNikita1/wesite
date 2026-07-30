import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ModalProvider } from '../context/modal_context';
import { ModalV2Controller } from './modal';
import { Tooltip } from 'react-tooltip';

export const AppContainer: FC = (): JSX.Element => {
    return (
        <ModalProvider>
            <Outlet />
            <ModalV2Controller />
            <Tooltip
                id={`tooltip`}
                style={{
                    color: '#fff',
                    background: 'var(--background-primary)',
                    textAlign: 'left',
                    lineHeight: '1.3',
                    opacity: '1 !important',
                    zIndex: 2000,
                    whiteSpace: 'pre-line',
                    backdropFilter: 'blur(5)',
                    boxShadow: '0px 8px 28px -6px rgba(0, 0, 0, 0.12), 0px 18px 88px -4px rgba(0, 0, 0, 0.14)'
                }}
            />
        </ModalProvider>
    );
};
