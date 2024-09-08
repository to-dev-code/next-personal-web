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
        deskspace: "url('/assets/image/deskspace.jpg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#6d28d9",
          secondary: "#f3f4f6",
          accent: "#67e8f9",
          "neutral-content": "#191e24",
          "base-100": "#333C46",
          "base-200": "#24292f",
          "base-300": "#1F2428",
          "base-content": "#DCDCDC",
          info: "#00c7e3",
          success: "#3ae638",
          warning: "#f97316",
          error: "#dc2626",
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#6d28d9",
          secondary: "#00b7ff",
          accent: "#db2777",
          "neutral-content": "#f9fafb",
          "base-100": "#e5e7eb",
          "base-200": "#f3f4f6",
          "base-300": "#e5e6e6",
          "base-content": "#475569",
          info: "#00c7e3",
          success: "#3ae638",
          warning: "#f97316",
          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
