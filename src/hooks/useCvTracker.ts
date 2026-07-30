import { useEffect, useRef } from 'react';

export function useCvTracker(_case?: string) {
    const sent = useRef(false);

    useEffect(() => {
        if (sent.current) return;
        if (sessionStorage.getItem(_case ? _case + ' cv_tracked' : 'cv_tracked') === '1') return;

        sent.current = true;
        sessionStorage.setItem(_case ? _case + ' cv_tracked' : 'cv_tracked', '1');

        fetch('/api/track', {
            method: 'POST',
            body: JSON.stringify({
                case: _case || 'Main page'
            })
        }).catch(() => {});
    }, [_case]);
}

export async function trackPdf() {
    if (sessionStorage.getItem('cvpdf__tracked') === '1') return;
    sessionStorage.setItem('cvpdf__tracked', '1');

    fetch('/api/track-pdf', {
        method: 'POST'
    }).catch(() => {});
}


export async function trackCall() {
    if (sessionStorage.getItem('cvcall__tracked') === '1') return;
    sessionStorage.setItem('cvcall__tracked', '1');

    fetch('/api/track-call', {
        method: 'POST'
    }).catch(() => {});
}
