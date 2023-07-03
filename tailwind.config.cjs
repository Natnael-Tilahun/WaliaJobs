/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thm_root1_color: `var(--thm-root1-color)`, // define the primary color used in your website's design. This color can be used for headings, buttons, and other elements that need to stand out.
        thm_root2_color: `var(--thm-root2-color)`, // define the secondary color used in your website's design. This color can be used for backgrounds, borders, and other elements that need to be less prominent.
        thm_primary_color: `var(--thm-primary-colo)`, // define the color of website's headings, buttons, and links.
        thm_background: `var(--thm-background)`, // background color of your website's pages.
        thm_secondary_background: `var(--thm-secondary-background)`, // define the background color of secondary elements such as panels, cards, and containers.
        thm_secondary_color: `var(--thm-secondary-color)`, //  define the color of secondary elements such as text, icons, and borders.
      },
      fontFamily: {
        sans: [`var(--thm-font)`, "Inter", "Poppins", "sans-serif"],
      },
      fontSize: {
        xxxxxxs: "0.25rem", // Sextuple extra small
        xxxxxs: "0.3125rem", // Quintuple extra small
        xxxxs: "0.375rem", // Quadruple extra small
        xxxs: "0.5rem", // Triple extra small
        xxs: "0.625rem", // Extra extra small
        "3xl": "1.875rem", // Triple extra small
        "4xl": "2.25rem", // Quadruple extra small
        "5xl": "3rem", // Quintuple extra small
        "6xl": "4rem", // Sextuple extra large
        // Add more custom font sizes here
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // "ul > li::before": {
            //   content: '"•"',
            //   marginRight: theme("spacing.2"),
            //   color: theme("colors.gray.700"),
            // },
            "ol > li::before": {
              marginRight: theme("spacing.2"),
              color: theme("colors.gray.900"),
            },
          },
        },
      }),
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1150px",
      xl: "1400px",
      "2xl": "1650px", // Custom screen size,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
