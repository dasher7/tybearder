import { useMediaQuery } from 'react-responsive'

export default function useResponsiveDetector() {
    

    const isMobile   = useMediaQuery({ query: `(max-width: 768px)`})
    const isTablet   = useMediaQuery({ query: `(min-width: 768px) and (max-width: 1024px)`})
    const isDesktop  = useMediaQuery({ query: `(min-width: 1024px)`})
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return {
        isMobile,
        isTablet,
        isDesktop,
        isPortrait,
    };
}