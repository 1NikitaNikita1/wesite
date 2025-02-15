import { FC } from 'react';
import { CoverLetter } from './coverLetter';
import { Heading, HType } from './heading';
import { SkillsSection } from './skills';
import { Experience } from './experience';
import { Contacts } from './contacts';

export const Page: FC = () => {
    return (
        <>
            <Heading type={HType.h1} title='Nikita Nikita' tag='Front end Developer'>
                I work effectively in Agile development environments, ensuring timely delivery of projects while
                maintaining high-quality standards.
            </Heading>
            <CoverLetter />
            <SkillsSection />
            <Experience />
            <Contacts />
        </>
    );
};
