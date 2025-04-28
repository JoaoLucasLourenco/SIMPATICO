"use client";
import { useChat } from "@ai-sdk/react";
import {
  FormControl,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export const ChatInput = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <Grid spacing={2} container alignSelf={"center"} justifyContent={"center"}>
      <Grid
        id={"mensagens"}
        container
        size={{ lg: 8, md: 8, sm: 11, xs: 11 }}
        sx={{ overflowY: "auto" }}
        style={{ height: "50vh" }}
      >
        {messages.map((message) => (
          <Grid
            textAlign={message.role === "user" ? "right" : "left"}
            key={message.id}
            className="whitespace-pre-wrap"
            wrap="wrap"
            width={"100%"}
          >
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text":
                  return (
                    <Grid
                      sx={{ borderRadius: 2 }}
                      p={2}
                      bgcolor={
                        message.role === "user"
                          ? "background.paper"
                          : "background.primary"
                      }
                    >
                      <p key={`${message.id}-${i}`}>{part.text}</p>
                      <Typography component={"p"} color="text.secondary">
                        {message.role === "user"
                          ? message.createdAt?.toLocaleTimeString("pt-BR", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false, // usa formato 24h (sem AM/PM)
                            })
                          : ""}
                      </Typography>
                    </Grid>
                  );
              }
            })}
          </Grid>
        ))}
      </Grid>
      <Grid size={{ lg: 8, md: 8, sm: 11, xs: 11 }}>
        <form onSubmit={handleSubmit}>
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
              value={input}
              InputProps={{
                disableUnderline: true,
              }}
              onChange={handleInputChange}
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
            <IconButton type="submit" color={"primary"}>
              <NavigateNextIcon color="primary" />
            </IconButton>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
