"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";

import { AuthProvider } from "./SessionProvider";

import "./globals.css";
import Navbar from "@/components/navbar/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <Navbar />
            {children}
          </body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
