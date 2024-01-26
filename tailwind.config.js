const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans-pro': ['var(--font-montseratt)', ...defaultTheme.fontFamily.sans],
      serif: ['var(--font-crimson)', ...defaultTheme.fontFamily.serif],
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}

