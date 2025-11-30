/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./src/app/**/*.css"   // @app/index.css 위치
  ],

  theme: {
    extend: {
      /* Colors — Semantic Tokens */
      colors: {
        // Brand
        main: "#d96060",
        mainLight: "#e98c8c",
        mainDark: "#b54848",

        // UI Background Layers
        surface: "rgba(255,255,255,0.3)",
        surfacesoft: "rgba(255,255,255,0.15)",
        borderlight: "rgba(255,255,255,0.2)",

    // Borders
    borderLight: "rgba(255,255,255,0.2)",
    borderSoft: "rgba(255,255,255,0.1)",

    // Text
    textPrimary: "#222",
    textSecondary: "#555",
    textMuted: "#999",

    // Background
    backgroundBase: "#FAFAFA",
  },

  /* Radius Tokens */
  borderRadius: {
    none: "0",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    glass: "20px",
    full: "9999px",
  },

  /* Shadow Tokens (Glass 전용 포함) */
  boxShadow: {
    soft: "0 4px 12px rgba(0,0,0,0.08)",
    medium: "0 0 20px rgba(0,0,0,0.12)",
    heavy: "0 0 40px rgba(0,0,0,0.2)",

    // Glass
    glass: "0 0 30px rgba(0,0,0,0.12)",
    glassStrong: "0 0 50px rgba(0,0,0,0.2)",
  },

  /* Blur Tokens */
  backdropBlur: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "20px",

    // Glass special
    glass: "16px",
    glassStrong: "24px",
  },

  /* Spacing Tokens */
  spacing: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
  },

  /* Font Tokens */
  fontFamily: {
    primary: ["Pretendard", "sans-serif"],
    pen: ["Nanum Pen Script", "cursive"],
  },
},
  },
plugins: [],
};
