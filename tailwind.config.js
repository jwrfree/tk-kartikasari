const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        canvas: 'hsl(var(--canvas))',
        primary: {
          50: 'hsl(18 56% 96%)',
          100: 'hsl(18 54% 90%)',
          200: 'hsl(18 50% 82%)',
          500: 'hsl(var(--primary))',
          600: 'hsl(17 50% 48%)',
          700: 'hsl(17 46% 40%)',
          DEFAULT: 'hsl(var(--primary))',
        },
        secondary: {
          50: 'hsl(102 14% 95%)',
          100: 'hsl(102 15% 90%)',
          200: 'hsl(102 16% 82%)',
          500: 'hsl(var(--secondary))',
          600: 'hsl(102 10% 41%)',
          700: 'hsl(145 14% 23%)',
          DEFAULT: 'hsl(var(--secondary))',
        },
        accent: {
          50: 'hsl(43 74% 93%)',
          500: 'hsl(var(--accent))',
          DEFAULT: 'hsl(var(--accent))',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          alt: 'hsl(var(--surface-alt))',
        },
        surfaceAlt: 'hsl(var(--surface-alt))',
        'surface-muted': 'hsl(var(--surface-muted))',
        text: {
          DEFAULT: 'hsl(var(--foreground))',
          muted: 'hsl(var(--text-muted))',
          disabled: 'hsl(var(--text-disabled))',
        },
        border: 'hsl(var(--border))',
      },
      fontFamily: {
        sans: ['var(--font-body)', ...fontFamily.sans],
        display: ['var(--font-display)', ...fontFamily.serif],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        premium: 'var(--shadow-premium)',
        floating: '0 20px 48px -24px rgba(31, 42, 36, 0.45)',
      },
      backgroundImage: {
        'editorial-glow':
          'radial-gradient(circle at top left, rgba(197, 106, 74, 0.2), transparent 36%), radial-gradient(circle at bottom right, rgba(215, 164, 65, 0.18), transparent 28%)',
        'paper-fade': 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
