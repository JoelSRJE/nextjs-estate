"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { CookiesProvider } from "react-cookie";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <Navbar />
            {children}
          </body>
        </ThemeProvider>
      </CookiesProvider>
    </html>
  );
}
