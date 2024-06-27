import { createTheme } from "@mui/material";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: josefinSans.style.fontFamily,
  },
});

export default theme;
