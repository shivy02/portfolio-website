module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include all files in the app directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include all files in the components directory
    "./node_modules/@magicui/**/*.{js,ts,jsx,tsx}", // Required for magicui
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
        "shimmer-slide":
        "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(var(--angle)) translateX(0)",
            opacity: "0.1",
          },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(var(--angle)) translateX(-500px)",
            opacity: "0.1",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
