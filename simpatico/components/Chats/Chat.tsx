"use client";

import { useCourse } from "@/lib/context/useCourse";
import { Grid, Typography } from "@mui/material";

export const Chat = () => {
  const { selectedCourse, selectedDiscipline } = useCourse();
  return (
    <Grid spacing={2} container alignSelf={"center"} justifyContent={"center"}>
      <Grid size={{ lg: 8, md: 8, sm: 11, xs: 11 }} textAlign={"center"} my={5}>
        <Typography
          color="info"
          variant="h5"
          component={"h1"}
          fontWeight={"bold"}
        >
          {selectedCourse}
        </Typography>
        <Typography color="text.secondary" variant="h6" component={"h2"}>
          {selectedDiscipline}
        </Typography>
      </Grid>
    </Grid>
  );
};
