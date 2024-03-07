import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "#eff2f5",
        },
        mediumseagreen: "#14b079",
        "gray-1": "#0f152a",
        "primary-blue": "#0052fe",
        "textGray": "#768396"

      },
    
      borderRadius: {
        "3xs": "10px",
        smi: "13px",
        "5xs-5": "7.5px",
        "6xs-7": "6.7px",
        "40xl-2": "59.2px",
        "21xl": "40px",
        "13xl": "32px",
      },
    },

    // screens: {
    //   mq1300: {
    //     raw: "screen and (max-width: 1300px)",
    //   },
    //   mq1125: {
    //     raw: "screen and (max-width: 1125px)",
    //   },
    //   mq800: {
    //     raw: "screen and (max-width: 800px)",
    //   },
    //   mq450: {
    //     raw: "screen and (max-width: 450px)",
    //   },
    // },
  },
  plugins: [],
};
export default config;
