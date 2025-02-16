import { FC } from 'react';
import { CoverLetter } from './coverLetter';
import { SkillsSection } from './skills';
import { Experience } from './experience';
import { Contacts } from './contacts';
import { Header } from './header';
import { GlowWrapper } from './glowWrapper';

export const Page: FC = () => {
    return (
        <GlowWrapper>
            <Header />
            <CoverLetter />
            <SkillsSection />
            <Experience />
            <Contacts />
        </GlowWrapper>
    );
};
