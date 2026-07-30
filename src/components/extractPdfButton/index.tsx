import { PDFDownloadLink } from '@react-pdf/renderer';
import { FC } from 'react';
import { CVDocument } from '../document';
import { useCvPDFData } from '../../hooks/useCvPDFData';
import { EXPERIENCE as cases } from '../experience';
import { SKILLS as skills } from '../skills';

const STATIC_DATA = {
    personalInfo: {
        fullName: 'Mykyta Yudakov',
        title: 'Web Developer',
        email: 'work.nikita.00@gmail.com',
        phone: '+380677332108',
        linkedin: 'mykyta.site'
    },
    summary: 'Web developer with 8 years of experience',
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
        <PDFDownloadLink document={<CVDocument data={cvData} />} fileName='mykyta-web-developer-cv.pdf'>
            Download CV
        </PDFDownloadLink>
    );
};
