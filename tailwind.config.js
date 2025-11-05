export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // adjust path to your project structure
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A74FF',
                accent: '#E0F2FF',
                surface: '#FFFFFF',
                textMain: '#1E293B',
                textSub: '#475569',
            },
            boxShadow: {
                sm: '0 1px 3px rgba(0,0,0,0.08)',
                md: '0 4px 12px rgba(0,0,0,0.06)',
                hover: '0 6px 20px rgba(10,116,255,0.15)',
            },
            borderRadius: {
                xl: '1rem',
                '2xl': '1.5rem',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
    ],
};
