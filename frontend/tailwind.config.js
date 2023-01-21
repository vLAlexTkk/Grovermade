const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,html}",
    "./src/styles/**/*.{js,ts,jsx,tsx,html}",
    "./public/index.html",
  ],
  theme: {
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
      "2xl": "1440px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        xs: "1rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "1.5rem",
        xl: "1.5rem",
        "2xl": "1.5rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#FFF",
      },
      black: {
        DEFAULT: "#030A1B",
      },
      primary: {},
    },
    fontSize: {
      10: ".625rem",
      12: ".75rem",
      14: ".875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      26: "1.625rem",
      28: "1.75rem",
      30: "1.875rem",
      32: "2rem",
      34: "2.125rem",
      36: "2.25rem",
      38: "2.375rem",
      40: "2.5rem",
      42: "2.625rem",
      44: "2.75rem",
      46: "2.875rem",
      48: "3rem",
      52: "3.25rem",
      56: "3.5rem",
      60: "3.75rem",
      64: "4rem",
      72: "4.5rem",
      96: "6rem",
      128: "8rem",
    },
    lineHeight: {
      8: "8px",
      9: "9px",
      10: "10px",
      11: "11px",
      12: "12px",
      13: "13px",
      14: "14px",
      15: "15px",
      16: "16px",
      17: "17px",
      18: "18px",
      19: "19px",
      20: "20px",
      21: "21px",
      22: "22px",
      23: "23px",
      24: "24px",
      25: "25px",
      26: "26px",
      27: "27px",
      28: "28px",
      29: "29px",
      30: "30px",
      31: "31px",
      32: "32px",
      33: "33px",
      34: "34px",
      35: "35px",
      36: "36px",
      37: "37px",
      38: "38px",
      39: "39px",
      40: "40px",
      42: "42px",
      44: "44px",
      46: "46px",
      48: "48px",
      50: "50px",
      52: "52px",
      54: "54px",
      56: "56px",
      58: "58px",
      60: "60px",
      62: "62px",
      64: "64px",
      66: "66px",
      68: "68px",
      70: "70px",
      base: "normal",
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
    letterSpacing: {
      0.01: ".01em",
      0.02: ".02em",
      0.03: ".03em",
      0.04: ".04em",
      0.05: ".05em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
    },
    extend: {
      fontFamily: {
        primary: ["'Poppins'", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        10.5: "2.625rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
        13.5: "3.375rem",
        14.5: "3.625rem",
        15: "3.75rem",
        15.5: "3.875rem",
        16.5: "4.125rem",
        17: "4.25rem",
        17.5: "4.375rem",
        18: "4.5rem",
        18.5: "4.625rem",
        19: "4.75rem",
        19.5: "4.875rem",
        20.5: "5.125rem",
        21: "5.25rem",
        21.5: "5.375rem",
        22: "5.5rem",
        22.5: "5.625rem",
        23: "5.75rem",
        23.5: "5.875rem",
        24.5: "6.125rem",
        25: "6.25rem",
        25.5: "6.375rem",
        26: "6.5rem",
        26.5: "6.625rem",
        27: "6.75rem",
        27.5: "6.875rem",
        28.5: "7.125rem",
        29: "7.25rem",
        29.5: "7.375rem",
        30: "7.5rem",
        30.5: "7.625rem",
        31: "7.75rem",
        31.5: "7.875rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
