/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        "star-movement-bottom":
          "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
        unblur: "unblur .4s ease-out",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
        unblur: {
          "0%": {
            filter: "blur(12px)",
          },
          "100%": {
            filter: "blur(0px)",
          },
        },
      },
      colors: {
        primary: {
          50: "#FFF9F5",
          100: "#FDEFE8",
          200: "#F8E0D3",
          300: "#F2D2BF",
          400: "#E8BEA6",
          500: "#D9AC92",
          600: "#DA956D",
          700: "#D87840",
          800: "#C45A1D",
          900: "#8C3C0D",
          950: "#6C2A04",
        },
      },
      typography: ({ theme }) => ({
        primary: {
          css: {
            "--tw-prose-body": theme("colors.primary[800]"),
            "--tw-prose-headings": theme("colors.primary[900]"),
            "--tw-prose-lead": theme("colors.primary[700]"),
            "--tw-prose-links": theme("colors.primary[900]"),
            "--tw-prose-bold": theme("colors.primary[900]"),
            "--tw-prose-counters": theme("colors.primary[600]"),
            "--tw-prose-bullets": theme("colors.primary[400]"),
            "--tw-prose-hr": theme("colors.primary[300]"),
            "--tw-prose-quotes": theme("colors.primary[900]"),
            "--tw-prose-quote-borders": theme("colors.primary[300]"),
            "--tw-prose-captions": theme("colors.primary[700]"),
            "--tw-prose-code": theme("colors.primary[900]"),
            "--tw-prose-pre-code": theme("colors.primary[100]"),
            "--tw-prose-pre-bg": theme("colors.primary[900]"),
            "--tw-prose-th-borders": theme("colors.primary[300]"),
            "--tw-prose-td-borders": theme("colors.primary[200]"),
            "--tw-prose-invert-body": theme("colors.primary[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.primary[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.primary[400]"),
            "--tw-prose-invert-bullets": theme("colors.primary[600]"),
            "--tw-prose-invert-hr": theme("colors.primary[700]"),
            "--tw-prose-invert-quotes": theme("colors.primary[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.primary[700]"),
            "--tw-prose-invert-captions": theme("colors.primary[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.primary[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.primary[600]"),
            "--tw-prose-invert-td-borders": theme("colors.primary[700]"),
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
