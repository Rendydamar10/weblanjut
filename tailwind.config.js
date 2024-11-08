/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./produk.html",
    "./pemesanan.html",
    "./layanan.html",
    "./cupcake.html",
    "./donut.html",
    "./cakes.html",
    "./scriptscroll.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta": "Plus Jakarta Sans",
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
        fadeUp: "fadeUp 1s ease-out forwards",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translate(0, 0px)" },
          "50%": { transform: "translate(0, 8px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "image-custom": "url('./img/img-pesan1.jpg')",
      },
    },
  },
  plugins: [],
};
