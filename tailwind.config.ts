import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#15223D",
      red: "#CB403A",
      black: "#070711",
      gray: "#8A8AA4",
      white: "#FFFFFF",
      light_gray: "#F7F7F7",
    


    },

    extend: {
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",


      },
      keyframes: {
        "loop-scroll": {
          from: { transform:"translateX(0)"},
          to: { transform: "translateX(-110%)" },
        }
      },
      fontFamily: {

        sans: ["var(--font-opensans)"],
        poppins: ["var(--font-poppins)"],
        

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }: { matchUtilities: any, theme: any }) => {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') as Record<string, string> }
      )
    }),
  ],

};
export default config;
