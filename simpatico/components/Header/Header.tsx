"use client";

import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/themes/theme";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid spacing={2} container display={"flex"} justifyContent={"center"}>
        <Grid
          size={10}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={2}
          container
        >
          <Typography
            display={"flex"}
            fontWeight={"bold"}
            variant="h5"
            component={"h1"}
            color="text.primary"
          >
            Simpatico{" "}
            <Typography
              color="primary"
              fontWeight={"bold"}
              variant="h5"
              component={"h1"}
            >
              AI
            </Typography>
          </Typography>
          <Grid
            display={"flex"}
            gap={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
