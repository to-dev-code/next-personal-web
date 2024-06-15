import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        deskspace: "url('/assets/image/deskspace.jpg')"
      }
    }
  },
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
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
