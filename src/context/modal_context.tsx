import { createContext, FC, ReactNode, useCallback, useMemo, useState } from 'react';



export type TModal = {
    id: string;
    body?: string | JSX.Element;
};

interface IModalProps {
    set_modal: (modal: TModal) => void;
    close_modal: (id: string, async?: boolean) => Promise<void>;
    data: TModal[];
}

const initialContextValue: IModalProps = {
    set_modal: () => {},
    close_modal: async () => Promise.resolve(),
    data: [],
};

export const ModalContext = createContext<IModalProps>(initialContextValue);

interface ModalProps {
    children: ReactNode;
}

export const ModalProvider: FC<ModalProps> = ({ children }) => {
    const [data, set_data] = useState<TModal[]>([]);

    const set_modal = (modal: TModal) => set_data((state) => [...state, modal]);

    const close_modal = useCallback(
        async (id: string, async?: boolean) => {
            if (async) {
                const modal = data.find((el) => el.id === id);
                if (modal && modal.body && typeof modal.body !== 'string' && 'props' in modal.body) {
                    const { onClose } = modal.body.props as any;
                    if (typeof onClose === 'function') {
                        await onClose();
                    }
                }
            }

            set_data((state) => state.filter((modal) => modal.id !== id));
        },
        [data]
    );

    const value = useMemo(() => ({ data, set_modal, close_modal }), [close_modal, data]);

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
