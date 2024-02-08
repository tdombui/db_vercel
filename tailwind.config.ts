import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      '2xs': '0.8rem',
      'xs': '0.8rem',
      // 'xl': '1rem',
      // '2xl': '1.2rem',
      '2hxl': '1.2rem',
      '2txl': '1.4rem',
      '3xl': '1.5rem',
      '3txl': '1.7rem',
      '3hxl': '2.1rem',
      '4xl': '2.9rem',
      '4hxl': '3rem',
      '5xl': '3.6rem',
      '6xl': '4rem',
    },
    extend: {
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(144px, 1fr))'
      },
      dropShadow: {
        glow: [
          "0 0px 81px rgba(255,255,255,0.8)",
          "0 0px 55px rgba(255,255,255,0.8)"
        ]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'blob': "blob 8s infinite"
      },
      keyframes: {
        'blob': {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      blur: {
        xs: "1px",
      },
    },
  },
  plugins: [
  ],
}



export default config
