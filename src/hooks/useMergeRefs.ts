import { useCallback } from 'react';

export function useMergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
    return useCallback(
        (element: T | null) => {
            refs.forEach((ref) => {
                if (!ref) return;
                if (typeof ref === 'function') {
                    ref(element);
                } else if ('current' in ref) {
                    (ref as React.MutableRefObject<T | null>).current = element;
                }
            });
        },
        [refs]
    );
}
