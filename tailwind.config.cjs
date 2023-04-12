module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "violet-purple": "#3d0080",
        "dark-slate-blue": "#082e4a",
        "slate-blue": "#6e99ba",
        "light-blue": "#d6e8fa",
        red: "#d91f2b",
      },
    },
  },
  daisyui: {
    themes: [
      {
        csi: {
          primary: "#3D0080",
          secondary: "#6E99BA",
          accent: "#D6E8FA",
          neutral: "#082E4A",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("tw-elements/dist/plugin")],
  plugins: [require("daisyui")],
};
