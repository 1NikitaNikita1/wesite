import { FC } from 'react';
import { CoverLetter } from './coverLetter';
import { SkillsSection } from './skills';
import { Experience } from './experience';
import { Contacts } from './contacts';
import { Header } from './header';
import { GlowWrapper } from './glowWrapper';
import { useCvTracker } from '../hooks/useCvTracker';
import { FloatBar } from './floatBar';

export const Main: FC = () => {
    useCvTracker();

    return (
        <GlowWrapper>
            <Header />
            <CoverLetter />
            <SkillsSection />
            <Experience />
            <FloatBar />
            <Contacts />
        </GlowWrapper>
    );
};
