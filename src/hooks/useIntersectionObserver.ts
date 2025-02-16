import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ScreenType, useScreenType } from './useScreenType';

interface IntersectionObserverProps {
    root?: Element | Document | null;
    rootMargin?: string;
    threshold?: number | number[];
}

export const useIntersectionObserver = (
    options: IntersectionObserverProps = {}
): [React.RefObject<HTMLDivElement>, boolean] => {
    const screeType = useScreenType();

    const isMobile: boolean = useMemo(() => {
        switch (screeType) {
            case ScreenType.mobile_portrait:
                return true;

            default:
                return false;
        }
    }, [screeType]);

    const { root = null, rootMargin = !isMobile ? '0px' : '-70px', threshold = 0 } = options;
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const current = targetRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { root, rootMargin, threshold }
        );

        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [root, rootMargin, threshold, targetRef]);

    return [targetRef, isIntersecting];
};
