import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
    family: 'Roboto',
    fonts: [
        { src: '/fonts/Roboto-Regular.ttf', fontWeight: 'normal' },
        { src: '/fonts/Roboto-Bold.ttf', fontWeight: 'bold' }
    ]
});

const styles = StyleSheet.create({
    entry: {
        marginBottom: 18
    },
    entryHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    entryPosition: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#1a1a1a'
    },
    entryDates: {
        fontSize: 10,
        color: '#1a1a1a'
    },
    entryCompany: {
        fontSize: 11,
        color: '#000',
        marginTop: 2,
        marginBottom: 6
    },
    techLine: {
        fontSize: 9,
        lineHeight: 1.5,
        color: '#333',
        marginBottom: 6
    },
    techLabel: {
        fontWeight: 'bold'
    },
    bulletRow: {
        flexDirection: 'row',
        marginBottom: 3
    },
    bulletDot: {
        width: 10,
        fontSize: 9
    },
    bulletText: {
        flex: 1,
        fontSize: 9.5,
        lineHeight: 1.4,
        color: '#333'
    },
    page: {
        padding: 40,
        fontFamily: 'Roboto',
        fontSize: 10,
        color: '#1a1a1a'
    },
    header: {
        marginBottom: 20,
        borderBottom: '2 solid #000',
        paddingBottom: 12
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4
    },
    title: {
        fontSize: 13,
        color: '#000',
        marginBottom: 8
    },
    contactsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    contactItem: {
        fontSize: 9,
        color: '#555'
    },
    section: {
        marginBottom: 16
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000',
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    summary: {
        fontSize: 10,
        lineHeight: 1.5,
        color: '#333'
    },
    skillsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16
    },
    skillCategory: {
        marginBottom: 6
    },
    skillCategoryTitle: {
        fontSize: 9,
        fontWeight: 'bold',
        marginBottom: 2
    },
    skillItems: {
        fontSize: 9,
        color: '#555'
    },
    twoColRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export interface CVData {
    fullName: string;
    title: string;
    contacts: {
        email: string;
        phone?: string;
        location?: string;
        linkedin?: string;
        github?: string;
    };
    summary: string;
    experience: {
        company: string;
        position: string;
        startDate: string;
        endDate: string;
        description: string[];
        technologies: string[];
    }[];
    education: {
        institution: string;
        degree: string;
        field: string;
        startDate: string;
        endDate: string;
    }[];
    skills: { category: string; items: string[] }[];
    languages?: { name: string; level: string }[];
}

export const CVDocument = ({ data }: { data: CVData }) => (
    <Document>
        <Page size='A4' style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.name}>{data.fullName}</Text>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.contactsRow}>
                    <Text style={styles.contactItem}>{data.contacts.email}</Text>
                    {data.contacts.phone && <Text style={styles.contactItem}>{data.contacts.phone}</Text>}
                    {data.contacts.location && <Text style={styles.contactItem}>{data.contacts.location}</Text>}
                    {data.contacts.linkedin && <Text style={styles.contactItem}>{data.contacts.linkedin}</Text>}
                    {data.contacts.github && <Text style={styles.contactItem}>{data.contacts.github}</Text>}
                </View>
            </View>

            {/* Summary */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Summary</Text>
                <Text style={styles.summary}>{data.summary}</Text>
            </View>
            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={styles.skillsGrid}>
                    {data.skills.map((skill, i) => (
                        <View key={i} style={styles.skillCategory}>
                            <Text style={styles.skillCategoryTitle}>{skill.category}</Text>
                            <Text style={styles.skillItems}>{skill.items.join(' · ')}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Experience */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Employment history</Text>
                {data.experience.map((exp, i) => (
                    <View key={i} style={styles.entry}>
                        <View style={styles.entryHeaderRow}>
                            <Text style={styles.entryPosition}>{exp.position}</Text>
                            <Text style={styles.entryDates}>
                                {exp.startDate} — {exp.endDate}
                            </Text>
                        </View>

                        <Text style={styles.entryCompany}>{exp.company}</Text>

                        {exp.technologies && exp.technologies.length > 0 && (
                            <Text style={styles.techLine}>
                                <Text style={styles.techLabel}>Technologies: </Text>
                                {exp.technologies.join(', ')}
                            </Text>
                        )}

                        {exp.description.map((line, j) => (
                            <View key={j} style={styles.bulletRow}>
                                <Text style={styles.bulletDot}>•</Text>
                                <Text style={styles.bulletText}>{line}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>

            {/* Education + Languages в два стовпці */}
            <View style={styles.twoColRow}>
                <View style={{ width: '60%' }}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    {data.education.map((edu, i) => (
                        <View key={i} style={styles.entry}>
                            <Text style={styles.entryPosition}>
                                {edu.degree}, {edu.field}
                            </Text>
                            <Text style={styles.entryCompany}>{edu.institution}</Text>
                            <Text style={styles.entryDates}>
                                {edu.startDate} — {edu.endDate}
                            </Text>
                        </View>
                    ))}
                </View>

                {data.languages && (
                    <View style={{ width: '35%' }}>
                        <Text style={styles.sectionTitle}>Languages</Text>
                        {data.languages.map((lang, i) => (
                            <Text key={i} style={styles.skillItems}>
                                {lang.name} — {lang.level}
                            </Text>
                        ))}
                    </View>
                )}
            </View>
        </Page>
    </Document>
);
