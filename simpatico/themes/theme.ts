import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563EB", // Azul institucional
      dark: "#1E3A8A", // Azul intermediário (hover)
      light: "#DBEAFE", // Azul claro (bg leve)
    },
    secondary: {
      main: "#6B7280", // Cinza escuro (texto secundário)
    },
    background: {
      default: "#FFFFFF", // Fundo principal
      paper: "#F3F4F6", // Cards, campos de entrada
    },
    text: {
      primary: "#111827", // Preto suave
      secondary: "#6B7280",
    },
    success: {
      main: "#10B981", // Verde sucesso
    },
    error: {
      main: "#EF4444", // Vermelho erro
    },
    warning: {
      main: "#F59E0B", // Amarelo atenção
    },
    info: {
      main: "#1E3A8A", // Azul escuro (textos importantes)
    },
    divider: "#D1D5DB", // Cinza médio
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: { textTransform: "none" },
  },
});

export { theme };
