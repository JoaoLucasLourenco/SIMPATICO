"use client";

import { FormControl, Grid, IconButton, TextField } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useEffect, useRef, useState } from "react";
import IChatInputData from "@/types/ChatInputData";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useCourse } from "@/lib/context/useCourse";

const API_URL = process.env.NEXT_PUBLIC_POST_API_PATH as string;

export const ChatInput = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { text: string; role: "user" | "assistant" }[]
  >([]);
  const userId = 1;
  const userName = "joao";
  const { selectedCourse, selectedDiscipline } = useCourse();

  const messagesRef = useRef<HTMLDivElement>(null);

  const sendMessage = async (messageText: string) => {
    const payload: IChatInputData = {
      id: userId,
      nome: userName,
      curso: selectedCourse,
      materia: selectedDiscipline,
      mensagem_usuario: messageText,
    };
    if (!(messageText === "First message")) {
      setMessages((prev) => [...prev, { role: "user", text: messageText }]);
    }

    setInput("");
    try {
      const response = await fetch(API_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.text();
      const respostaIA = data;
      setMessages((prev) => [...prev, { role: "assistant", text: respostaIA }]);
    } catch (error) {}
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    await sendMessage(input);
  };

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <Grid spacing={2} container alignSelf="center" justifyContent="center">
      <Grid
        id="mensagens"
        container
        ref={messagesRef}
        sx={{ overflowY: "auto", height: "50vh", p: 2 }}
        size={{ lg: 8, md: 8, sm: 11, xs: 11 }}
        maxWidth={"100%"}
      >
        {messages.map((msg, index) => (
          <Grid
            key={index}
            textAlign={msg.role === "user" ? "right" : "left"}
            width="100%"
          >
            <Grid
              sx={{ borderRadius: 2 }}
              p={2}
              bgcolor={
                msg.role === "user" ? "background.paper" : "background.primary"
              }
            >
              <Markdown remarkPlugins={[remarkGfm]}>{msg.text}</Markdown>
            </Grid>
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
              InputProps={{ disableUnderline: true }}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pergunte ao Simpatico"
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: "transparent",
                  padding: 0,
                },
                "& .MuiInputLabel-root": { color: "text.secondary" },
                "& .Mui-focused": { color: "text.secondary" },
              }}
            />
            <IconButton type="submit" color="primary">
              <NavigateNextIcon color="primary" />
            </IconButton>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
