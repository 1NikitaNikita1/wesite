import { useEffect, useState } from 'react';

export enum ScreenType {
    mobile_portrait = 0,
    mobile_landscape,
    tablet,
    pc,
}

export const useScreenType = () => {
    const [screenType, setScreenType] = useState<ScreenType>(ScreenType.pc);

    const handleResize = () => {
        if (window.innerWidth < 479) {
            setScreenType(ScreenType.mobile_portrait);
        } else if (window.innerWidth < 767) {
            setScreenType(ScreenType.mobile_landscape);
        } else if (window.innerWidth < 991) {
            setScreenType(ScreenType.tablet);
        } else {
            setScreenType(ScreenType.pc);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenType;
};
