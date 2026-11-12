    import { useEffect } from 'react';
    import { useLocation } from 'react-router-dom';

    // On every page change: jump to the section named in the URL (#projects),
    // or back to the top. Without this, a new page opens scrolled down where the last one was.
    export default function ScrollManager() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
            target.scrollIntoView({ behavior: 'instant' });
            return;
        }
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname, hash]);

    return null;
    }