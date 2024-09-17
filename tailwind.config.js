/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        textColor: "#545454",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      const components = {
        ".line": {
          position: "relative", // Absolute positioning for the `before` pseudo-element
          "&::before": {
            content: "''",
            position: "absolute",
            width: "100px", // You can use Tailwind's width utility equivalent
            height: "4px",  // You can adjust this based on Tailwind's height utilities
            backgroundColor: "black", // Tailwind's `bg-black`
            left: "-134px", // Adjust left position
            top: "50%",
            display: "none", // Hidden on smaller screens
          },
          "@screen lg": {
            "&::before": {
              display: "block", // Visible on larger screens
            },
          },
        },
      };

      addComponents(components);
    },
  ],
};
