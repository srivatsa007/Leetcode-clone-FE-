/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          // primary: "green",
          // secondary: "teal",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["forest"]
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
}

