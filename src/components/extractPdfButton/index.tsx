import { PDFDownloadLink } from '@react-pdf/renderer';
import { FC } from 'react';
import { CVDocument } from '../document';
import { useCvPDFData } from '../../hooks/useCvPDFData';
import { EXPERIENCE as cases } from '../experience';
import { SKILLS as skills } from '../skills';
import { trackPdf } from '../../hooks/useCvTracker';

const STATIC_DATA = {
    personalInfo: {
        fullName: 'Mykyta Yudakov',
        title: 'Full-Stack Developer',
        email: 'work.nikita.00@gmail.com',
        phone: '+380677332108',
        linkedin: 'mykyta.site'
    },
    summary:
        'Frontend-focused Full-Stack Developer with over 5 years of experience building scalable web applications, SaaS products, and complex user interfaces. Strong expertise in React, Next.js, TypeScript, Node.js, and modern frontend architecture. Experienced in designing reusable systems, integrating third-party APIs, and delivering products from concept to production.Founder of Yoona Space, where I independently designed and built a SaaS platform for analytics and marketing gamification, covering product architecture, frontend, backend, APIs, payments, infrastructure, and deployment. Passionate about clean architecture, performance optimization, and creating high-quality developer and user experiences.',
    education: [
        {
            institution: '"KROK" university',
            degree: "Bachelor's Degree",
            field: 'Software Engineering',
            startDate: '2023',
            endDate: '2027'
        },
        {
            institution: '"KROK" university',
            degree: 'Associate Degree',
            field: 'Computer Systems and Networks',
            startDate: '2015',
            endDate: '2019'
        }
    ],
    coverLetter: {
        greeting: 'Dear Hiring Manager,',
        paragraphs: ["I'm excited to apply for this role"],
        closing: 'Sincerely,'
    }
};

export const ExtractPDFButton: FC = () => {
    const cvData = useCvPDFData({
        ...STATIC_DATA,
        cases,
        skills
    });

    return (
        <PDFDownloadLink
            document={
                <CVDocument
                    data={{
                        ...cvData,
                        languages: [
                            { name: 'English', level: 'Intermediate' },
                            { name: 'Ukrainian', level: 'Fluent' }
                        ]
                    }}
                />
            }
            fileName='mykyta-full-stack-developer-cv.pdf'
            onClick={() => trackPdf()}
        >
            Download CV
        </PDFDownloadLink>
    );
};
