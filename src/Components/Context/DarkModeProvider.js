import React , { createContext, useEffect , useState } from 'react';
import usePrefersColorScheme from 'use-prefers-color-scheme';

// export context
export const DarkModeContext = createContext();

const DarkModeProvider = ({children}) => {

    // color scheme
    const prefersColorScheme = usePrefersColorScheme();
    const defaultTheme = prefersColorScheme === 'dark' ? 'dark' : 'light';

    // use state
    const [defaultSystem , setDefaultSystem] = useState(
        localStorage.getItem('theme') ? false : true
    );
    const [theme , setTheme] = useState(
        (defaultSystem && defaultTheme) || localStorage.getItem('theme') || 'light'
    )
    
    // use effect
    useEffect(() => {
        const root = document.documentElement;
        if (defaultSystem) {
            localStorage.setItem('theme' , defaultTheme);
            setTheme(defaultTheme);
            root.className = defaultTheme;
        }
        else {
            localStorage.setItem('theme' , theme);
            root.className = theme;
        }
    } , [theme , defaultTheme])

    return (
        <DarkModeContext.Provider value={{theme , setTheme , defaultTheme , defaultSystem , setDefaultSystem}}>
            {children}
        </DarkModeContext.Provider>
    );
};


export default DarkModeProvider;
