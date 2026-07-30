import { useEffect } from 'react';

const useEscape = (handle: (event?: KeyboardEvent) => void) => {
    useEffect(() => {
        const keyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                handle(event);
            }
        };

        document.addEventListener('keydown', keyDown);

        return () => {
            document.removeEventListener('keydown', keyDown);
        };
    });
};

export default useEscape;
