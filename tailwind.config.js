/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary_green: "#00ED64",
      primary_green_light: "#1aff79",
      secondary_gray: "#21313C",
      secondary_gray_400: "#7B8B92",
      secondary_gray_300: "#001E2B",
      foreground: "#fff",
      // addition
      light_white: "#F7F8F8",
    },
    spacing: {
      hero_pt_desk: "158px",
      hero_pb_desk: "100px",
      hero_pt_mob: "140px",
      hero_pb_mob: "60px",
      section_py_desk: "70px",
      section_py_mob: "60px",

      // section_py_mob:"80px",
    },
    transitionProperty: {
      width: "width",
      height: "height",
    },
    extend: {},
  },
  plugins: [],
};
