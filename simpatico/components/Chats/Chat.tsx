"use client";
import { useCourse } from "@/lib/context/useCourse";
import { Grid, Typography } from "@mui/material";

export const Chat = () => {
  const { selectedCourse, selectedDiscipline } = useCourse();

  return (
    <>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid
          size={{ xs: 11, sm: 11, md: 8 }}
          sx={{
            backgroundColor: "background.default",
            textAlign: "center",
            my: 5,
          }}
        >
          <Typography
            color="info"
            variant="h5"
            component="h1"
            fontWeight="bold"
          >
            {selectedCourse}
          </Typography>
          <Typography color="text.secondary" variant="h6" component="h2">
            {selectedDiscipline}
          </Typography>
        </Grid>
      </Grid>
      <Grid container></Grid>
    </>
  );
};
