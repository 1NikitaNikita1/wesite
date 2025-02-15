import { FC } from 'react';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';

import icon from '../../assets/js-icon.svg';

const COVER_LETTER = `As an experienced Front-end Developer, I have a strong \ncommand of Sass, Less, and BEM, as well as proficiency \nin Git, Scrum, Vue.js, Nuxt.js, Node.js, Express.js, and \nMongoDB. I work effectively in Agile development \nenvironments, ensuring timely delivery of projects while \nmaintaining high-quality standards. \n//\nWith excellent problem-solving skills and attention to \ndetail, I am confident in my ability to contribute to \nany team, delivering successful projects with responsive \ndesign, cross-browser compatibility, and website \noptimization.`;

export const CoverLetter: FC = () => {
    return (
        <ScCoverLetter>
            <ScCodeHeader>
                <div className='tab'>
                    <img alt='' src={icon} />
                    Who am I
                </div>
            </ScCodeHeader>
            <CodeMirror
                spellCheck
                value={COVER_LETTER}
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
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    align-items: stretch;
    justify-content: flex-start;
    display: flex;

    .tab {
        background: #303030;
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        padding: 0 16px;
    }
`;

const ScCoverLetter = styled.div`
    max-width: 820px;
    margin-inline: auto;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    margin-bottom: 80px;

    .cm-editor{
        background: transparent;
    }

    .cm-content {
        background: var(--background-secondary);
        font-size: 22px;
        line-height: 150%;
        padding-bottom: 80px;
    }
    .cm-line:nth-child(7) {
        color: #32aa57;
    }
    .cm-line {
        padding-left: 24px;
    }
    .cm-activeLine {
        background-color: rgba(255, 255, 255, 0.05);
    }
    .cm-gutter {
        width: 38px;
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
    .cm-selectionMatch {
        background: transparent;
    }
`;
