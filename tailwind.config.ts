import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Blueprint palette — monochrome + one navy accent
        paper: '#F7F8FA',
        ink: '#0E1624',
        navy: {
          DEFAULT: '#0F326D',
          hover: '#0B2652',
        },
        obsidian: '#080B10',
        mist: '#C8D4E8',
        graphite: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#9e9e9e',
          400: '#7a7a7a',
          500: '#5c5c5c',
          600: '#424242',
          700: '#2e2e2e',
          800: '#1a1a1a',
          900: '#111111',
        },
        cyan: {
          50: '#f0fbfd',
          100: '#d9f4f9',
          200: '#b7ebf4',
          300: '#85deee',
          400: '#7fd6e7',
          500: '#4bc4db',
          600: '#35a8c0',
          700: '#2f879c',
          800: '#2c6f80',
          900: '#295c6b',
        },
        blue: {
          50: '#f0f7fb',
          100: '#d9ebf5',
          200: '#b7d9eb',
          300: '#87bfdd',
          400: '#4fa8d5',
          500: '#358fc0',
          600: '#2e74a3',
          700: '#2a5e85',
          800: '#284f6e',
          900: '#26435c',
        },
        mint: {
          50: '#f0fbf6',
          100: '#d9f5e9',
          200: '#b7ebd3',
          300: '#87dbb5',
          400: '#74d6ae',
          500: '#3cb582',
          600: '#2d9469',
          700: '#287656',
          800: '#255e47',
          900: '#224e3c',
        },
        grey: {
          50: '#f7f8fa',
          100: '#f0f1f4',
          200: '#e4e6eb',
          300: '#d9dee3',
          400: '#c5cbd4',
          500: '#a8b0bc',
          600: '#8a94a3',
          700: '#6e7889',
          800: '#5a6371',
          900: '#4d5561',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial scale — viewport-driven, meant to crop at the edge
        mega: ['clamp(4rem, 13vw, 13rem)', { lineHeight: '0.84', letterSpacing: '-0.045em' }],
        colossal: ['clamp(3.25rem, 10vw, 10rem)', { lineHeight: '0.86', letterSpacing: '-0.04em' }],
        giant: ['clamp(2.5rem, 6.5vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.035em' }],
        lede: ['clamp(1.125rem, 1.6vw, 1.375rem)', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        label: '0.24em',
      },
      transitionTimingFunction: {
        precision: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
