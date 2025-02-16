import { useEffect, useRef } from 'react';

interface ParallaxOptions {
    speed?: number;
    initialOffset?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
    const { speed = 0, initialOffset = 1 } = options;
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const offset = scrollTop * speed + initialOffset;

                ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [speed, initialOffset]);

    return ref;
};
