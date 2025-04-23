"use client";

import { Grid, Typography } from "@mui/material";
import Link from "next/link";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid
      sx={{ bgColor: "background.default" }}
      spacing={2}
      container
      display={"flex"}
      justifyContent={"center"}
    >
      <Grid
        size={10}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={2}
        container
      >
        <Link href={"/"}>
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
        </Link>
        <Grid
          display={"flex"}
          gap={3}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
