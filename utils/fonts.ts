import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    {
      path: "../assets/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
  ],
});
