import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C0C0C', // Night
        'primary-dark': '#0D0D0D',
        'primary-light': '#2F2F2F',
        secondary: '#EAEEE7', // Slate Blue
      },
    },
  },
  plugins: [],
};
export default config;
