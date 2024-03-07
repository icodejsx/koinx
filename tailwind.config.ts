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
    fontSize: {
      xl: "20px",
      base: "16px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      mini: "15px",
      lg: "18px",
      "base-6": "15.6px",
      "base-1": "15.1px",
      "mini-3": "14.3px",
      "17xl-4": "36.4px",
      "3xl": "22px",
      "10xl": "29px",
      "lg-9": "18.9px",
      "xs-2": "11.2px",
      smi: "13px",
      "sm-8": "13.8px",
      "sm-6": "13.6px",
      "2xs": "11px",
      "9xl": "28px",
      inherit: "inherit",
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
