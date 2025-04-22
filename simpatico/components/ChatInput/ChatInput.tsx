"use client";

import { FormControl, Grid, IconButton, TextField } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const ChatInput = () => {
  return (
    <Grid spacing={2} container alignSelf={"center"} justifyContent={"center"}>
      <Grid size={{ lg: 8, md: 8, sm: 11, xs: 11 }}>
        <form noValidate autoComplete="off">
          <FormControl
            sx={{
              bgcolor: "background.paper",
              borderRadius: 999,
              paddingTop: 2,
              paddingBottom: 2,
              paddingLeft: 3,
              paddingRight: 3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              multiline={true}
              InputProps={{
                disableUnderline: true,
                hiddenLabel: true,
              }}
              placeholder="Pergunte ao Simpatico"
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "transparent",
                  padding: 0,
                },
                "& .MuiInputLabel-root": {
                  color: "gray", // ou 'text.secondary'
                },
                "& .Mui-focused": {
                  color: "gray",
                },
              }}
            />
            <IconButton color={"primary"}>
              <NavigateNextIcon color="primary" />
            </IconButton>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
