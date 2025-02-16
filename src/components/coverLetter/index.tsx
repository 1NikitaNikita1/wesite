import { FC } from 'react';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

import icon from '../../assets/js-icon.svg';

const COVER_LETTER = `As a Front-end Developer, I have extensive experience with Vue.js, Nuxt.js, React, Next.js, and TypeScript. I’ve worked in product teams on long-term projects and Web3 startups, focusing on performance, scalability, and blockchain integrations. My expertise includes building maintainable UI architectures using Sass, Less, BEM, and styled-components.
//
I thrive in Agile environments, collaborating with designers and backend developers to ensure seamless user experiences. With a strong focus on responsive design, cross-browser compatibility, and performance optimization, I consistently deliver high-quality solutions that meet business and user needs.`;

export const CoverLetter: FC = () => {
    const [targetRef, isIntersecting] = useIntersectionObserver();

    return (
        <ScCoverLetter isIntersecting={isIntersecting} ref={targetRef}>
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

const ScCoverLetter = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isIntersecting'].includes(prop),
})<{ isIntersecting: boolean }>`
    max-width: 820px;
    margin-inline: auto;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    margin-bottom: 80px;
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
        padding-bottom: 80px;
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
