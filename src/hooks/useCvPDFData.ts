import { useMemo } from 'react';
import { TSkills } from '../components/skills';
import { TCase } from '../components/experience/case';
import { CVData } from '../components/document';

export type TCoverLetter = {
    greeting?: string;
    paragraphs: string[];
    closing?: string;
};

export type TEducation = {
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
};

interface UseCVPDFDataParams {
    personalInfo: {
        fullName: string;
        title: string;
        email: string;
        phone?: string;
        location?: string;
        linkedin?: string;
        github?: string;
    };
    summary: string;
    cases: TCase[];
    skills: TSkills;
    coverLetter: TCoverLetter;
    education: TEducation[];
    skillGroupLabels?: [string, string];
}

function splitToBullets(text: string): string[] {
    if (!text) return [];

    const byNewline = text
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);

    if (byNewline.length > 1) return byNewline;

    return text
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter(Boolean);
}

function splitTitleIntoPositionAndCompany(title: string): {
    position: string;
    company: string;
} {
    const normalized = title.replace(/\s+/g, ' ').trim(); 
    const separator = ' at ';
    const idx = normalized.indexOf(separator);

    if (idx === -1) {
        return { position: normalized, company: '' };
    }

    return {
        position: normalized.slice(0, idx).trim(),
        company: normalized.slice(idx + separator.length).trim()
    };
}
function flattenSkills(skills: TSkills, labels: [string, string]) {
    return skills.flatMap((group, groupIndex) => {
        const items = group.flatMap((list) => list.items);
        return items.length > 0 ? [{ category: labels[groupIndex], items }] : [];
    });
}

function mapCaseToExperience(c: TCase) {
    const { position, company } = splitTitleIntoPositionAndCompany(c.title);

    return {
        position,
        company,
        location: c.location,
        startDate: c.start,
        endDate: c.end,
        description: splitToBullets(c.description),
        technologies: c.technologies ?? [],
        link: c.link
    };
}
export function useCvPDFData({
    personalInfo,
    summary,
    cases,
    skills,
    coverLetter,
    education,
    skillGroupLabels = ['Technical Skills', 'Other Skills']
}: UseCVPDFDataParams): CVData {
    const experience = useMemo(() => cases.map(mapCaseToExperience), [cases]);

    const flatSkills = useMemo(() => flattenSkills(skills, skillGroupLabels), [skills, skillGroupLabels]);

    return useMemo(
        () => ({
            fullName: personalInfo.fullName,
            title: personalInfo.title,
            contacts: {
                email: personalInfo.email,
                phone: personalInfo.phone,
                location: personalInfo.location,
                linkedin: personalInfo.linkedin,
                github: personalInfo.github
            },
            summary,
            experience,
            education,
            skills: flatSkills,
            coverLetter
        }),
        [personalInfo, summary, experience, education, flatSkills, coverLetter]
    );
}
