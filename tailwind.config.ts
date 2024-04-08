import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#24292F",
          secondary: "#333C46",
          accent: "#DCDCDC",
          neutral: "#1F2428",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
