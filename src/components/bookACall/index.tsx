import { FC, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../context/modal_context';

export const BookACall: FC = () => {
    const { set_modal } = useContext(ModalContext);

    const handleBookACall = useCallback(() => {
        set_modal({
            id: 'book-a-call-modal',
            body: (
                <>
                    <iframe
                        title='Book a Call'
                        width={'100%'}
                        height={'100%'}
                        src='https://cal.com/nikita-nikita-vajfvb'
                    />
                </>
            )
        });
    }, [set_modal]);

    return <ScBookACall onClick={handleBookACall}>Book a Call</ScBookACall>;
};

const ScBookACall = styled.button``;
