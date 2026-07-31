import { FC } from 'react';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

import icon from '../../assets/js-icon.svg';

const COVER_LETTER = `I am a Full-Stack Engineer with experience building and scaling commercial products using React, Next.js, Vue, Nuxt, TypeScript, and Node.js. Throughout my career, I have designed frontend architecture, developed reusable UI systems, integrated complex APIs, and delivered production-ready features across SaaS, Web3, and data-driven platforms.
//
Beyond implementation, I enjoy taking ownership of products, improving architecture, solving technical challenges, and delivering solutions that create measurable business value. I work closely with cross-functional teams to build fast, maintainable, and user-focused applications with an emphasis on performance, scalability, and long-term maintainability.`;

const TAG = 'Who I am';
interface CoverLetterProps {
    tag?: string;
    body?: string;
}

export const CoverLetter: FC<CoverLetterProps> = ({ tag = TAG, body = COVER_LETTER }) => {
    const [targetRef, isIntersecting] = useIntersectionObserver();

    return (
        <ScCoverLetter isIntersecting={isIntersecting} ref={targetRef}>
            <ScCodeHeader>
                <div className='tab'>
                    <img alt='' src={icon} />
                    {tag}
                </div>
            </ScCodeHeader>
            <CodeMirror
                spellCheck
                value={body}
                readOnly={true}
                extensions={[javascript(), EditorView.lineWrapping]}
                editable={false}
                basicSetup={{ lineNumbers: true }}
            />
        </ScCoverLetter>
    );
};

export const ScCodeHeader = styled.div`
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

export const ScCoverLetter = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isIntersecting'].includes(prop)
})<{ isIntersecting: boolean }>`
    max-width: 820px;
    margin-inline: auto;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    margin-bottom: 80px;
    padding-top: 16px;
    transition: ease 0.5s;
    opacity: ${({ isIntersecting }) => (isIntersecting ? 1 : 0)};
    scale: ${({ isIntersecting }) => (isIntersecting ? 1 : 0.7)};

    .cm-editor {
        background: transparent;
    }

    .cm-content {
        background: var(--background-secondary);
        font-size: 22px;
        line-height: 150%;
        padding-bottom: 32px;
        padding-top: 32px;
    }
    .cm-line:nth-child(2) {
        color: #32aa57;
    }
    .cm-line {
        padding-left: 24px;
    }
    .cm-activeLine {
        background-color: rgba(255, 255, 255, 0);
    }
    .cm-gutter {
        width: 38px;
        box-sizing: border-box;
    }
    .cm-activeLineGutter {
        background: rgba(255, 255, 255, 0);
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

    @media (max-width: 991px) {
        max-width: 650px;

        .cm-line {
            padding-left: 16px;
            font-size: 16px;
            line-height: 160%;
        }
        .cm-lineNumbers .cm-gutterElement {
            font-size: 16px;
        }

        .cm-content {
            padding-bottom: 32px;
        }
    }

    @media (max-width: 577px) {
        max-width: 340px;
        margin-top: 32px;

        .cm-line {
            font-size: 14px;
            line-height: 1.6;
            padding: 0 0 0 16px;
        }
    }
`;
