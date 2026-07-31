import { useMemo } from 'react';
import { TSkills } from '../components/skills';
import { TCase } from '../components/experience/case';
import { CVData } from '../components/document';
import { SKILL_CATEGORIES } from '../components/yoona-space';

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

function groupSkills(skills: TSkills) {
    const allSkills = skills.flatMap((group) => group.flatMap((list) => list.items));

    return Object.entries(SKILL_CATEGORIES)
        .map(([category, categorySkills]) => {
            const items = allSkills.filter((skill) => categorySkills.includes(skill));

            return {
                category,
                items
            };
        })
        .filter((group) => group.items.length > 0);
}

export function useCvPDFData({
    personalInfo,
    summary,
    cases,
    skills,
    coverLetter,
    education
}: UseCVPDFDataParams): CVData {
    const experience = useMemo(() => cases.map(mapCaseToExperience), [cases]);

    const groupedSkills = useMemo(() => groupSkills(skills), [skills]);

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
            skills: groupedSkills,
            coverLetter
        }),
        [personalInfo, summary, experience, education, groupedSkills, coverLetter]
    );
}
