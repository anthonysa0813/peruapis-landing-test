/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        0.5: ".5px",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(131.5deg,#111728 48.9%,rgba(17,23,39,0) 82.15%)",
      },
      fontFamily: {
        aeonik: ["aeonik"],
      },
      colors: {
        primary: "#111728",
        secondary: "#0f1525",
        third: "#b82749",
        quarter: "#162238",
      },
    },
  },
  plugins: [],
};
