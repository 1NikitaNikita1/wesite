import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ModalProvider } from '../context/modal_context';
import { ModalV2Controller } from './modal';

export const AppContainer: FC = (): JSX.Element => {
    return (
        <ModalProvider>
            <Outlet />
            <ModalV2Controller />
        </ModalProvider>
    );
};
