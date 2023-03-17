module.exports = {
  content: [
    "./templates/*.html", // root templates dir
    "./templates/**/*.html", // root templates subdir
    "./**/templates/*.html", // pkgs templates dir
    "./**/templates/**/*.html", // pkgs templates subdir, mainly react templates
    "./assets/ts/*.{ts,tsx}", // typescript files, mainly react templates
    "./assets/ts/**/*.{ts,tsx}",
    "./assets/js/*.js", // javascript files, mainly react templates
    "./assets/js/**/*.js",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
