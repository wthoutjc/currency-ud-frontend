"use client";

import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const themeOptions: ThemeOptions = {
  typography: {
    allVariants: {
      fontFamily: "Montserrat, Arial, sans-serif",
    },
  },
};

const theme = createTheme(themeOptions);
const myTheme = responsiveFontSizes(theme);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider
      options={{
        key: "mui",
      }}
    >
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
