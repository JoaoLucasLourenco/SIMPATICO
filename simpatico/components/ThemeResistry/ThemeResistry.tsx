"use client";

import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/themes/theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
