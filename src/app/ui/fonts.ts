import { Roboto, Concert_One } from "next/font/google";

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const concertOne = Concert_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-concertOne",
});
