"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
