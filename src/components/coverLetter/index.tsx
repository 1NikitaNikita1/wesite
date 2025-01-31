import { FC } from 'react';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';

const TEXT = `As an experienced Front-end Developer, I have a strong command of Sass, Less, and BEM, as well as proficiency in Git, Scrum, Vue.js, Nuxt.js, Node.js, Express.js, and MongoDB. I work effectively in Agile development environments, ensuring timely delivery of projects while maintaining high-quality standards. \n//\nWith excellent problem-solving skills and attention to detail, I am confident in my ability to contribute to any team, delivering successful projects with responsive design, cross-browser compatibility, and website optimization.`;

export const CoverLetter: FC = () => {
    return (
        <ScCoverLetter>
            <ScCodeHeader></ScCodeHeader>
            <CodeMirror
                spellCheck
                value={TEXT}
                readOnly={true}
                extensions={[javascript(), EditorView.lineWrapping]}
                editable={false}
                basicSetup={{ lineNumbers: true }}
            />
        </ScCoverLetter>
    );
};

const ScCodeHeader = styled.div`
    background: #191919;
    height: 32px;
`;

const ScCoverLetter = styled.div`
    max-width: 820px;
    margin-inline: auto;

    .cm-content {
        background: var(--background-secondary);
        font-size: 22px;
        line-height: 150%;
    }
    .cm-line:nth-child(2) {
        color: #32aa57;
    }
    .cm-line {
        padding-left: 24px;
    }
    .cm-activeLine {
        background-color: rgba(255, 255, 255, 0.05);
    }
    .cm-gutter {
        width: 54px;
        box-sizing: border-box;
    }
    .cm-activeLineGutter {
        background: rgba(255, 255, 255, 0.05);
    }
    .cm-gutters {
        border: none;
        color: var(--color-gray);
        font-size: 20px;
        font-weight: 500;
        background: var(--background-secondary);
    }
    .cm-gutterElement {
        padding-right: 16px;
    }
`;
