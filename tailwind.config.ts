import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          50: '#fbecec',
          100: '#f4c7c7',
          200: '#eda2a2',
          300: '#e98f8f',
          400: '#e67c7c',
          500: '#e26969',
          600: '#df5757',
          700: '#db4444',
          800: '#af3636',
          900: '#6e2222',
        },
        secondary: {
          50: '#E6FFF0',
          100: '#CCFFE0',
          200: '#99FFC2',
          300: '#66FFA3',
          400: '#33FF85',
          500: '#00CC52',
          600: '#00993D',
          700: '#00FF66',
          800: '#006629',
          900: '#003314',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
